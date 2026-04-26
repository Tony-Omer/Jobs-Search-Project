import { Routes, Route } from 'react-router-dom';
import NAVBAR from './components/navbar';
import FRONTPAGE from './components/frontpage';
import OPTIONS from './components/options';
import JOBHEADER from './components/job-header';
import JOBPOSTS from './components/JOBPOSTS';
import employer from './components/employer'; // Renamed to REGISTER for clarity

function App() {
  return (
    <div>
      {/* 1. Components that should ALWAYS show (like a header) go OUTSIDE Routes */}
      <NAVBAR />
      <FRONTPAGE />
      <JOBHEADER />
      <JOBPOSTS />
      <OPTIONS />
      

      <Routes>

        {/* 3. The "Employer" Page Route */}
        {/* When the URL is /employer, it hides the home components and shows this: */}
        <Route path="/employer" element={ <employer /> } />
      </Routes>
    </div>
  );
}

export default App;