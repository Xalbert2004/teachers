import { useState } from "react";
import AddTeacher from "./AddTeacher";
import "./App.css";
import Dashboard from "./Dashboard";


function App() {
  const [teachers, setTeachers] = useState([]);
  const skills = [
    "HTML", 'CSS', "JS", "React",
     "ANGULAR", "NODE", "C#", "PYTHON",
      "OOP", "SQL", "DJANGO", "JAVA", "C++"
  ]

  const add = (t) => {
    setTeachers([...teachers, t]);
  }
  console.log(teachers);

  return (
    <div className="App">
      <h1>Teacher App</h1>
      <div id="main">
        <AddTeacher data={skills}  addTeacherMethod={add} />
        <Dashboard/>
      </div>
    </div>
  );
}

export default App;
