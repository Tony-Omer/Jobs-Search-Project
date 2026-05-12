import express from 'express';
import passport from 'passport';
import session from 'express-session';
import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcrypt';
import axios from 'axios';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { Pool } from 'pg';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;
const saltRounds = 10;



// Middleware
app.use(cors({
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST'],
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'your_secret_key', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());



app.use(express.static('public'));
app.use(express.static('views'));







// connecting to the database
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: 5432,
});

pool.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Connected to the database');
    }
});


// Test the connection specifically
const testConnection = async () => {
    try {
        const client = await pool.connect();
        console.log('✅ Success: Connected to the PostgreSQL database');
        client.release(); // release the client back to the pool
    } catch (err) {
        console.error('❌ Database Connection Error details:');
        console.error('Message:', err.message);
        console.error('Code:', err.code); // This code tells us exactly what's wrong (e.g., 28P01 for wrong password)
    }
};

testConnection();










// API endpoints
app.post('/api/jobs', async (req, res) => {
    const { job_title, location_name, salary, job_description, key_responsibilities, requirements } = req.body;

    try {
        const query = `
            INSERT INTO jobs (job_title, location_name, salary, job_description, key_responsibilities, requirements)
            VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;
        
        const values = [job_title, location_name, salary || null, job_description, key_responsibilities, requirements];
        
        const result = await pool.query(query, values);
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});









// GET route to fetch jobs (and handle search)
app.get('/api/jobs', async (req, res) => {
    try {
        const { search } = req.query; // Get the search term from URL (?search=...)
        let result;

        if (search) {
            // Use ILIKE for case-insensitive search in Postgres
            const query = "SELECT * FROM jobs WHERE job_title ILIKE $1 OR job_description ILIKE $1";
            result = await pool.query(query, [`%${search}%`]);
        } else {
            // Just get everything if no search term
            result = await pool.query("SELECT * FROM jobs ORDER BY id DESC");
        }

        res.json(result.rows); // Send the array of jobs to React
    } catch (err) {
        console.error("Error fetching jobs:", err.message);
        res.status(500).send('Server Error');
    }
});










app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});