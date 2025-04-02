import React, { useState } from "react";
import UserStatus from "./UserStatus";
import AdminPanel from "./AdminPanel";
import Login from "./Login";

const Dashboard = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    return(
        <div>
            <h2>User Status Dashboard</h2>
            {!isLoggedIn ? (
                <Login onLogin={()=> setIsLoggedIn(true)}/>
            ) : (
                <div>
                    <UserStatus isAdmin={isAdmin}/>
                    <button onClick={() => setIsAdmin(!isAdmin)}>Toggle Admin</button>
                    <button onClick={()=>{ setIsLoggedIn(false); setIsAdmin(false);}}>Log Out</button>
                    {isAdmin && <AdminPanel/>}
                </div>
            )
            
        }
        </div>
    )
}

export default Dashboard;