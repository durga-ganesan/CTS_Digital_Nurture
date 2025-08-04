import React, { useState } from "react";
import BookDetails from "./components/BookDetails";
import BlogDetails from "./components/BlogDetails";
import CourseDetails from "./components/CourseDetails";

function App() {
  const [activeComponent, setActiveComponent] = useState("book");

  const renderComponent = () => {
    switch (activeComponent) {
      case "book":
        return <BookDetails />;
      case "blog":
        return <BlogDetails />;
      case "course":
        return <CourseDetails />;
      default:
        return <BookDetails />;
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "left" }}>
      <h1>Blogger App</h1>

      <div>
        <button onClick={() => setActiveComponent("book")}>Book</button>
        <button onClick={() => setActiveComponent("blog")}>Blog</button>
        <button onClick={() => setActiveComponent("course")}>Course</button>
      </div>

      <hr />
      {renderComponent()}
    </div>
  );
}

export default App;
