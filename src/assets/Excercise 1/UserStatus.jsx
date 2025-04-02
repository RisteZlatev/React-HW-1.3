import React from "react";

const UserStatus = ({isAdmin}) => {
    return(
        <div>
            {isAdmin ? (<p>Welcome, Admin User!</p>) 
            : (<p>Welcome, Regular User!</p>)}
        </div>
    );
};

export default UserStatus;