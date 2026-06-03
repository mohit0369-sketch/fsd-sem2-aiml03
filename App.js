import React from "react";
import Student from "./Student";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Student Information System</h1>

      <Student
        name="Lakshaya Kumar"
        course="B.Tech CSE (AI & ML)"
        marks="92"
      />

      <Student
        name="Rahul Sharma"
        course="BCA"
        marks="85"
      />

      <Student
        name="Priya Verma"
        course="B.Tech IT"
        marks="88"
      />

      <Student
        name="Aman Gupta"
        course="MCA"
        marks="90"
      />
    </div>
  );
}

export default App;
