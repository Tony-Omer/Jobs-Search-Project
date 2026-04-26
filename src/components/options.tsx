import { Link } from "react-router-dom";

const OPTIONS = () => {
    return (
        <div className="container">
            {/* Employer Section */}
            <div className="description employer">
                <p>
                    Get the best candidates for your job openings. Post your job listings and access a pool of qualified job seekers. 
                </p>
                {/* Keep only the text inside the Link */}
                <Link to="/employer" className="btn">
                    Post a Job
                </Link>
            </div>

            {/* Job Seeker Section */}
            <div className="description job-seeker">
                <p>
                    Search for your dream job and connect with employers who are looking for talented professionals.
                </p>
                <Link to="/jobs" className="btn">
                    Find a Job
                </Link>
            </div>
        </div>
    );
};

export default OPTIONS;