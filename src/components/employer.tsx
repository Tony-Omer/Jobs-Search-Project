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

    // CRITICAL: This was missing in your last snippet
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const submissionData = {
            ...formData,
            salary: formData.salary ? parseFloat(formData.salary) : null,
            // Only split if there is text, otherwise send an empty array
            key_responsibilities: formData.key_responsibilities.trim() 
                ? formData.key_responsibilities.split(',').map(item => item.trim()) 
                : [],
        };

        try {
            const response = await fetch('http://localhost:5000/api/jobs', { 
            method: 'POST',
            headers: {
           'Content-Type': 'application/json',
            },
            body: JSON.stringify(submissionData),
            });
            

            if (response.ok) {
                const result = await response.json();
                console.log("Success:", result);
                alert("Job posted!");
                // Clear form after success
                setFormData({
                    job_title: '', location_name: '', salary: '',
                    job_description: '', key_responsibilities: '', requirements: ''
                });
            } else {
                const errorText = await response.text();
                console.error("Server Error:", errorText);
                alert("Failed to save to database.");
            }
        } catch (error) {
            console.error("Network error:", error);
            alert("Check if your backend server is running on port 5000.");
        }
    };

    return (
        <div className="form-container">
            <h2>Post New Job</h2>
            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label>Job Title</label>
                    <input type="text" name="job_title" value={formData.job_title} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>Location</label>
                    <input type="text" name="location_name" value={formData.location_name} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Salary</label>
                    <input type="number" name="salary" value={formData.salary} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Description</label>
                    <textarea name="job_description" value={formData.job_description} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Key Responsibilities (comma separated)</label>
                    <textarea name="key_responsibilities" value={formData.key_responsibilities} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Requirements</label>
                    <textarea name="requirements" value={formData.requirements} onChange={handleChange} />
                </div>

                <button type="submit">Save Job to Database</button>
            </form>
        </div>
    );
};

export default REGISTER;