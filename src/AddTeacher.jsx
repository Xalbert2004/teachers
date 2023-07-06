import React, { useState } from 'react'

export default function AddTeacher({ data, addTeacherMethod }) {
    const [teacher, setTeacher] = useState({name:"", age:"", skills:[]})
    const [error, setError] = useState("");

    const addSkill = (name) => {
        let skills = teacher.skills;
        if(!skills.includes(name)){
            skills.push(name);
        }
        setTeacher({...teacher, skills});
    }
    const addNewTeacher = (e) => {
        e.preventDefault();

        if(!teacher.name.trim() || !teacher.age.trim()){
            setError("Mutqagreq anuny kam tariqy chisht")
        }else if(teacher.skills.length === 0){
            setError("Yntreq skillery (minimum 1)")
        }else if(+teacher.age <= 15 || +teacher.age >= 80){
            setError("Mutqagreq chisht tariq")
        }else{
            setError("");
            addTeacherMethod(teacher);
            setTeacher({name:"", age:"", skills:[]})
        }

    }
  return (
    <div>
        <h3>Add Teacher</h3>
        <p className='error' style={{color:"red"}}>{error}</p>
        <form
         className='form'
         onSubmit={addNewTeacher}
         name='languages'
         >
            <div>
                <label>Name</label>
                <input 
                    type="text"
                    value={teacher.name}
                    onChange={(e) => setTeacher({...teacher, name:e.target.value}) }
                />
            </div>
            <div>
                <label>Age</label>
                <input 
                type="text"
                value={teacher.age}
                onChange={(e) => setTeacher({...teacher, age:e.target.value})}
                />
            </div>
            <div>
                <label>Skills</label>
                <select onChange={(e) => addSkill(e.target.value)} >
                    {
                        data.map((elm, index) => {
                            return <option key={index}>{elm}</option>
                        })
                    }
                </select>
                <ul>
                    {
                        teacher.skills.map((elm, index) => {
                            return <li key={index}>{elm}</li>
                        })
                    }
                </ul>
            </div>
            <button>Save</button>
        </form>
    </div>
  )
}
