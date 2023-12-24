import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Mentor from "./components/Mentor";
import BookForm from "./components/BookForm";
import How from "./components/How";
import ReadFull from "./components/ReadFull";
import {
  Blog,
  Community,
  ReadFullBlog,
  Mentors,
  MentorShipPage,
} from "./Pages";
import { FindMentors, ReadFullQuestion, Signup } from "./features/index";
import Join from "./Pages/Join";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/:id" element={<ReadFull />} />
        <Route path="/join-as-mentor" element={<Mentor />} />
        <Route path="/session" element={<BookForm />} />
        <Route path="/how" element={<How />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/ReadFull" element={<ReadFullBlog />} />
        <Route path="/mentors" element={<FindMentors />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/join" element={<Join />} />
        <Route path="/mentors" element={<Mentors />} />
        <Route path="/community" element={<Community />} />
        <Route path="/Mentor-Ship-Page" element={<MentorShipPage />} />
        <Route path="/queries/:postid/" element={<ReadFullQuestion />} />
      </Routes>
    </>
  );
};

export default App;