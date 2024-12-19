import React from "react"

export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    const dotPositions = [
        [4],
        [0, 8],
        [0, 4, 8],
        [0, 2, 6, 8],
        [0, 2, 4, 6, 8],
        [0, 2, 3, 5, 6, 8]
    ]
    /*
    return (
        <div 
            className="die-face" 
            style={styles}
            onClick={props.holdDice}
        >
            <h2 className="die-num">{props.value}</h2>
        </div>
    )*/


    return (
        <div 
            className={`die-face ${props.isHeld ? "held" : ""}`} 
            style={styles}
            onClick={props.holdDice}
        >
            {dotPositions[props.value - 1].map(pos => (
                <div 
                    key={pos} 
                    className="pip" 
                    style={{ gridColumn: (pos % 3) + 1, gridRow: Math.floor(pos / 3) + 1 }}
                >      
                </div>
            ))}
        </div>
    )
}

