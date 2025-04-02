import React from "react";

const MoodDisplay = ({mood, emoji}) => {
    if(!mood) return null;

    return(
        <div>
            <p>You're feeling {mood}<span>{emoji}</span></p>
        </div>
    )
}
export default MoodDisplay;