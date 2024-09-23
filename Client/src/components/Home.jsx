import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function Home() {
    const [posts, setPosts] = useState([]);

    // This method fetches the names of users from the database.
    useEffect(() => {
        async function getPosts() {
            const response = await fetch(`http://localhost:5050/planner/`);
            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                console.error(message);
                return;
            }
            const posts = await response.json();
            setPosts(posts);
        }
        getPosts();
        return;
    }, [posts.length]);


    function postList() {
        return posts.map((post) => {
            return (
                <> <div className="homepage"> 
                    <p>- Name: {post.name}</p>
                </div></>
            );
        });
    }    
    
    return (
        <div>
            {postList()}
        </div>
    );
}