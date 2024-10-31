import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function Home() {
    const [users, setUsers] = useState([]);

    // This method fetches the names of users from the database.
    useEffect(() => {
        async function getUsers() {
            const response = await fetch(`http://localhost:5050/planner/`);
            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                console.error(message);
                return;
            }
            const users = await response.json();
            setUsers(users);
        }
        getUsers();
        return;
    }, [users.length]);


    function userList() {
        return users.map((user) => {
            return (
                <> <div key={user._id}> 
                    <p>- Name: {user.name}</p>
                </div> </>
            );
        });
    }    
    
    return (
        <div>
            <h1>Course Planner</h1>
            <h2>Join our growing list of users! Current users listed below:</h2>
            {userList()}
        </div>
    );
}