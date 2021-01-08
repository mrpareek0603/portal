import React from 'react'
import {Button} from '@material-ui/core';
import { Link} from 'react-router-dom';
import Box from '@material-ui/core/Box';

// import logo from '../'

function Header() {
    return (
        <div className="">
            <Box  boxShadow={3} display="flex" flexDirection="row" justifyContent="space-between" p={1} >
              <Link to="/">
                <div><img width="120px" src="/logo.png" alt="Logo "/></div>
              </Link>

              <Link to="/login">
                <div ><Button style={{borderRadius: "20px",
                background: "linear-gradient(to bottom right, #FFFFFF 1%, #121760 50%)", color: "white", fontFamily:"Gilroy-Bold"}} variant="contained" >Sign In</Button></div>
              </Link>

            </Box>
        </div>
    )
}

export default Header
