import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Tasks() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({
        username: sessionStorage.getItem("username"),
        task: "",
        description: "",
        course: "",
        dueDate: "",
        complete: false
    });
    const [user, setUser] = useState("");
    
    // This method fetches the users tasks from the database.
    useEffect(() => {
        async function getTasks() {
            const username = localStorage.getItem("username");
            if(!username) return;
            const response = await fetch(`http://localhost:5050/planner/tasks`);
            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                console.error(message);
                return;
            }
            const tasks = await response.json();
            setTasks(tasks);
        }
        //this fetches the users info from the database.
        async function getUser() {
            const username = sessionStorage.getItem("username");
            if(!username) return;
            const response = await fetch(`http://localhost:5050/planner/tasks/user`);
            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                console.error(message);
                return;
            }
            const user = await response.json();
            setUser(user);
        }
        getUser();
        getTasks();
        return;
    }, [tasks.length]);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:5050/planner/tasks", newTask)
        .then(result => {
            console.log(result)
        })
        .catch(err => console.log(err))
    }

    //creating a new task
        //handles input form changes
    function handleChange(event) {
        const { name, value } = event.target;
    
        setNewTask(prevValue => {
            return {
            ...prevValue,
            [name]: value
            };
        });
    }

    


    return (
    <div className="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center">
    <div className="list-group">
        {tasks.map(task => (
            <NewTask
            key={task._id}
            username={task.username}
            task={task.task}
            description={task.description}
            course={task.course}
            dueDate={task.dueDate}
            complete={task.complete}
            />
        ))}  

        <label className="list-group-item d-flex gap-3 bg-body-tertiary">
            <input className="form-check-input form-check-input-placeholder bg-body-tertiary flex-shrink-0 pe-none" disabled="" type="checkbox" value=""/>
            
            <span className="pt-1 form-checked-content">               
            <input
                type="text"
                name="task"
                className=""
                placeholder="Task"
                value={newTask.task}
                onChange={handleChange}
            />  
            <input
                type="text"
                name="description"
                className=""
                placeholder="Description of task"
                value={newTask.description}
                onChange={handleChange}
            /> 
            <input
                    type="submit"
                    value="Create Task"
                    className="inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 hover:text-accent-foreground h-9 rounded-md px-3 cursor-pointer mt-4"
                    onClick={handleSubmit}
                />
            </span>
        </label> 
    </div>
    </div>
    );
}

export default Tasks;