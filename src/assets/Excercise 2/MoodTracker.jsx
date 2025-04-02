import React, { useState } from "react";
import MoodDisplay from "./MoodDisplay";

const moodEmojiMap = {
    Happy: "😊",
    Sad: "😢",
    Excited: "🤩",
    Tired: "😴",
};

const MoodTracker = () => {
    const [currentMood, setCurrentMood] = useState(null);

    return(
        <div>
            <h2>Mood Tracker</h2>
            <div>
                {Object.entries(moodEmojiMap).map(([mood])=>{
                    return(
                    <button 
                    key={mood}
                    onClick={()=> setCurrentMood(mood)}
                    >
                    {mood}
                    </button>
                    );
                })}
            </div>
            <MoodDisplay
            mood={currentMood}
            emoji={currentMood ? moodEmojiMap[currentMood] : ''}/>
        </div>
    )

}

export default MoodTracker;