import React from "react"

const UseCallbackButtons = p => {
    return(
        <div>
            <button className="btn" onClick={() => p.inc(6)}>+6</button>
            <button className="btn" onClick={() => p.inc(12)}>+12</button>
            <button className="btn" onClick={() => p.inc(18)}>+18</button>
        </div>
    )
}

export default React.memo(UseCallbackButtons)