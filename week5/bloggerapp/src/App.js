import { useState } from "react";

function BookDetails() {
  const books = [
    { id: 1, title: "Clean Code" },
    { id: 2, title: "The Pragmatic Programmer" }
  ];
  return (
    <div>
      <h2>Book Details</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
}

function BlogDetails() {
  const blogs = [
    { id: 1, title: "React Basics" },
    { id: 2, title: "State and Props" }
  ];
  return (
    <div>
      <h2>Blog Details</h2>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>{blog.title}</li>
        ))}
      </ul>
    </div>
  );
}

function CourseDetails() {
  const courses = [
    { id: 1, title: "Java FSE" },
    { id: 2, title: "React Development" }
  ];
  return (
    <div>
      <h2>Course Details</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>{course.title}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const [view, setView] = useState("books");

  const renderBySwitch = () => {
    switch (view) {
      case "books":
        return <BookDetails />;
      case "blogs":
        return <BlogDetails />;
      default:
        return <CourseDetails />;
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Blogger App</h1>
      <button onClick={() => setView("books")}>Show Books</button>{" "}
      <button onClick={() => setView("blogs")}>Show Blogs</button>{" "}
      <button onClick={() => setView("courses")}>Show Courses</button>
      <hr />
      {view === "books" && <p>Showing books using logical && rendering</p>}
      {view === "blogs" ? <p>Showing blogs using ternary rendering</p> : null}
      {renderBySwitch()}
    </div>
  );
}

export default App;
