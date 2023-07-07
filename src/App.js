import { useEffect, useState } from "react";
import AddTeacher from "./AddTeacher";
import "./App.css";
import Dashboard from "./Dashboard";
import { searchBySkills } from "./Lib";


function App() {
  const [teachers, setTeachers] = useState([]);
  const [result, setResult] = useState([]);

  console.log(teachers, "Teachers");
  console.log(result, "result")
  
  useEffect(()=>{
    fetch("teachers.json")
    .then((r)=> r.json())
    .then(r => {
      setTeachers(r.data)
      setResult(r.data)
    }) 
  }, [])

  const skills = [
    "HTML", 'CSS', "JS", "React",
     "ANGULAR", "NODE", "C#", "PYTHON",
      "OOP", "SQL", "DJANGO", "JAVA", "C++"
  ]

  const add = (T) => {
    setTeachers([...teachers, T]);
    setResult([...teachers, T]);
  }

  const updateList = (list)=>{
    list = list.filter(a => a.active).map(a => a.title);
    let data = searchBySkills(teachers, list);
    setResult(data);
  }

  return (
    <div className="App">
      <h1>Teacher App. {teachers.length} teachers are </h1>
      <div id="main">
        <AddTeacher data={skills}  addTeacherMethod={add} />
        <Dashboard fn={updateList} skills={skills} teachers={result} />
      </div>
    </div>
  );
}

export default App;
