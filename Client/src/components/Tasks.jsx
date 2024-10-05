import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import moment from 'moment';

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
            //look for username in session storage
            const username = sessionStorage.getItem("username");
            if(!username) return;
            
            //fetch tasks from that user
            axios.get(`http://localhost:5050/planner/tasks/${username}`)
            .then(result => {
                console.log(result);
                setTasks(result.data);
            })
            .catch(err => console.log(err))            
        }

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
        .finally(function() {
            setNewTask({username: sessionStorage.getItem("username"),
            task: "",
            description: "",
            course: "",
            dueDate: "",
            complete: false});
            location.reload();
          });
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

    function checkedItem(event) {
        const { name, value } = event.target;
    
        setNewTask(prevValue => {
            return {
            ...prevValue,
            complete: value
            };
        });
    }

    function tasksList() {
        return (
            tasks.map((item) => {
                return (
                    <label key={item._id} className="list-group-item d-flex gap-3">
                    <input className="form-check-input flex-shrink-0" type="checkbox" checked={item.complete} onChange={checkedItem}/>
                        <span className="pt-1 form-checked-content">
                            <strong>{item.task}</strong>
                            <small className="d-block text-body-secondary">
                                <svg className="bi me-1" width="1em" height="1em"></svg>
                                <p>{item.description}</p>
                                <p>{item.course}</p>
                                {moment(item.dueDate).format("dddd, MMMM Do YYY")}
                            </small>
                        </span>
                    </label>

                );
            })
        );
    }   

    


    return (
    <div className="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center">
    <div className="list-group">
        
        {tasksList()}

        <label className="list-group-item d-flex gap-3 bg-body-tertiary">
            <input className="form-check-input form-check-input-placeholder bg-body-tertiary flex-shrink-0 pe-none" disabled="" type="checkbox" value=""/>
            <span className="pt-1 form-checked-content">               
            <input
                type="text"
                name="task"
                className="input-group mb-3"
                placeholder="Task"
                value={newTask.task}
                onChange={handleChange}
            />  
            <input
                type="text"
                name="description"
                className="input-group mb-3"
                placeholder="Description of task"
                value={newTask.description}
                onChange={handleChange}
            /> 
            <input
                type="text"
                name="course"
                className="input-group mb-3"
                placeholder="Course task is in"
                value={newTask.course}
                onChange={handleChange}
            /> 
            <input
                type="date"
                name="dueDate"
                className="input-group mb-3"
                placeholder="Due Date"
                value={newTask.dueDate}
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