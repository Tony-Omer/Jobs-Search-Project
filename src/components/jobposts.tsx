
const jobPosts = () => {
    return (
        <div>



     <div className="job-post">


       <div className="firstBox box">

                    <div className="image">
                        <i className="fa-solid fa-building building"></i>
                    </div>

                    <div className="title">
                        <h1>Software Engineer</h1>
                        <p className="company">Here you can find all the latest job postings.</p>
                    </div>


       </div>



       <div className="secondBox box">

             <div className="jobDescription">
                <i className="fa-regular fa-file-lines file"></i>
                <h2>Job Description</h2>
             </div>

             <p> We are looking for a talented software engineer to join our team.  
                you will design and develop software solutions that meet the needs of our clients.
             </p>
        
       </div>



       <div className="thirdBox box">

        <h2>Key Responsibilities</h2>

        <p>you will design and develop software solutions that meet the needs of our clients</p>

       </div>




       <div className="fourthBox box">

        <h2>Requirements</h2>

        <p>background in software development or any related field</p>
       </div>



       
       <div className="fifthBox ">

        <div className="salary">
            <span>
                <i className="fa-solid fa-sack-dollar salary-icon"></i>
                <p>Salary</p>
            </span>

            <p>Based on experience and skills</p>
        </div>


        <div className="location">
            <span>
                <i className="fa-solid fa-location-dot location-icon"></i>
                <p>Location</p>
            </span>

            <p id="location">UAE</p>
        </div>

       </div>















        </div>





        </div>
    );
};

export default jobPosts;