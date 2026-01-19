import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import FindWork from "./pages/FindWork";
import HireFreelancers from "./pages/HireFreelancers";
import JobDetails from "./pages/JobDetails";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Profile from "./pages/Profile";
import FreelancerDetails from "./pages/FreelancerDetails";
import PostJob from "./pages/PostJob";
import PostService from "./pages/PostService";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop></ScrollToTop>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<FindWork />} />
        <Route path="/freelancers" element={<HireFreelancers />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/post-job" element={<PostJob />} />
        <Route path="/post-service" element={<PostService />} />
        <Route path="/job/:id" element={<JobDetails />} />
        <Route path="/freelancers/:id" element={<FreelancerDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
