import { useState } from 'react';

const REGISTER = () => {
    const [formData, setFormData] = useState({
        job_title: '',
        location_name: '',
        salary: '',
        job_description: '',
        key_responsibilities: '',
        requirements: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would format key_responsibilities into an array before sending to Postgres
        const submissionData = {
            ...formData,
            key_responsibilities: formData.key_responsibilities.split(',').map(item => item.trim())
        };
        console.log("Submitting to Postgres:", submissionData);
        // Add your API call here (e.g., fetch or axios)
    };

    return (
        <div className="form-container">
            <h2>Post New Job</h2>
            <form onSubmit={handleSubmit}>
                
                <div className="form-group">
                    <label htmlFor="job_title">Job Title</label>
                    <input 
                        type="text" 
                        id="job_title" 
                        name="job_title" 
                        placeholder="e.g. Senior Postgres DBA" 
                        value={formData.job_title}
                        onChange={handleChange}
                        required 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="location_name">Location</label>
                    <input 
                        type="text" 
                        id="location_name" 
                        name="location_name" 
                        placeholder="e.g. Remote / New York, NY"
                        value={formData.location_name}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="salary">Annual Salary (USD)</label>
                    <input 
                        type="number" 
                        id="salary" 
                        name="salary" 
                        step="0.01" 
                        placeholder="e.g. 120000"
                        value={formData.salary}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="job_description">Job Description</label>
                    <textarea 
                        id="job_description" 
                        name="job_description" 
                        placeholder="Describe the role and the team..."
                        value={formData.job_description}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="key_responsibilities">Key Responsibilities</label>
                    <textarea 
                        id="key_responsibilities" 
                        name="key_responsibilities" 
                        placeholder="Enter responsibilities, separated by commas..."
                        value={formData.key_responsibilities}
                        onChange={handleChange}
                    />
                    <div className="hint" style={{ fontSize: '0.8rem', color: '#888' }}>
                        Note: Comma-separated values will be converted to a Postgres Array.
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="requirements">Requirements</label>
                    <textarea 
                        id="requirements" 
                        name="requirements" 
                        placeholder="Education, years of experience, specific skills..."
                        value={formData.requirements}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit">Save Job to Database</button>
            </form>
        </div>
    );
};

export default REGISTER;