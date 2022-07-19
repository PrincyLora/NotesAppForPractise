import React from "react";

function Header({handleToggleDarkMode}){
    return (<div className="header">
<h1>Notes</h1>
<button onClick={()=>handleToggleDarkMode((previousDarkmode)=>!previousDarkmode)} className="save">Toggle Mode</button>
    </div>)
}

export default Header