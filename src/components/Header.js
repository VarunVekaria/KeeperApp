import React from 'react'
import Paper from '@mui/material/Paper';
function Header() {
    return (
        <div>
        <Paper style={{padding:"5px", display:"flex"}}square elevation={3}>
            <img style={{width:"50px"}} src="https://img.icons8.com/officel/2x/react.png" alt="img"></img>
            <h1 className="site-name"> ReactApp </h1>

        </Paper>
        </div>
    )
}

export default Header
