import { Link } from "react-router-dom";

const OPTIONS = () => {
    return (
        <div>
            
            <div className="container">

               <div className=" description employer">
                <p>
                    Get the best candidates for your job openings. Post your job listings and access a pool of qualified job seekers. 
                    Find the perfect match for your company and grow your team with ease.
                </p>
                {/* Changed <a> to <Link> and href to to */}
                <Link to="/employer">
                    Post a Job
                </Link>
               </div>




                <div className=" description job-seeker">

                <p>
                    Search for your dream job and connect with employers who are looking for
                     talented professionals like you.
                </p>
                {/* Changed <a> to <Link> and href to to */}
                <Link to="/jobs">
                    Find a Job
                </Link>
                </div>



            </div>
            


        </div>
    )
}



export default OPTIONS;