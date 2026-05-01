import { Routes, Route } from 'react-router-dom';
import NAVBAR from './components/navbar';
import FRONTPAGE from './components/frontpage';
import OPTIONS from './components/options';
import JOBHEADER from './components/job-header';
import JOBPOSTS from './components/JOBPOSTS';
import Employer from './components/Employer'; // Capitalized the 'E'
import JobFind from './components/JobFind';


function App() {
  return (
    <div>
      {/* NAVBAR stays visible on every single page */}
      <NAVBAR />

      <Routes>
        {/* The Home Route: Groups all home components together */}
        <Route path="/" element={
          <>
            <FRONTPAGE />
            <JOBHEADER />
            <JOBPOSTS />
            <OPTIONS />
          </>
        } />

        {/* The Employer Route: Only shows the Employer component */}
        <Route path="/employer" element={<Employer />} />

        {/* The JobFind Route: Only shows the JobFind component */}
        <Route path="/jobfind" element={<JobFind />} /> 
      </Routes>
    </div>
  );
}

export default App;