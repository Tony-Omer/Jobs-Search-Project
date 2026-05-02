import { Routes, Route } from 'react-router-dom';
import NAVBAR from './components/navbar';
import FRONTPAGE from './components/frontpage';
import OPTIONS from './components/options';
import Employer from './components/Employer'; 
import JobFind from './components/JobFind';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';


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
            <OPTIONS />
          </>
        } />

        {/* The Employer Route: Only shows the Employer component */}
        <Route path="/employer" element={<Employer />} />

        {/* The JobFind Route: Only shows the JobFind component */}
        <Route path="/jobfind" element={<JobFind />} /> 

        {/* The AboutUs Route: Only shows the AboutUs component */}
        <Route path="/about" element={<AboutUs />} />

        {/* The ContactUs Route: Only shows the ContactUs component */}
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;