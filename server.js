import express from 'express';
import passport from 'passport';
import session from 'express-session';
import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcrypt';
import axios from 'axios';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;
const saltRounds = 10;



// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'your_secret_key', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());


app.use(express.static('public'));
app.use(express.static('views'));





app.get('/jobs', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});









app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});