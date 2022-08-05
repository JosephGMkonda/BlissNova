import React, {useState} from 'react'
import {Box,styled,Card,Typography,Button} from '@mui/material';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import {Redirect} from 'react-router-dom'
// import {useSelector,useDispatch} from 'react-redux'
import {useSelector,useDispatch} from 'react-redux'

// import {register} from 'features/Auth'

import {register} from 'features/Auth'



const UserLogin = styled(Box)({

    // alignItems:"center",
    // display:"flex",
    // flexDirection:"column",
    // justifyContent: "center",
    
  })
  



function Registration() {

    


  return (

    <Box 
    sx={{alignItems:"center",
    display:"flex",
    flexDirection:"column",
    justifyContent: "center"}}>
      

        <Card sx={{margin:10, width:"400px", height:"500px"}}>
        <UserLogin>
          <Typography 
          sx={{marginTop:5}}
          fontWeight={500} 
          variant="h4" 
          color="primary" 
          textAlign="center" >CHAT-VIBE</Typography>

        <form sx={{margin:5}} >
            
        <TextField
        name='username'
        required
        sx={{margin:2,width:"100%"}}
        id="username"
        label="Username"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />

<TextField
        
        sx={{margin:2,width:"100%"}}
        id="email"
        type="email"
        label="email"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />

     <TextField
        
        sx={{margin:2,width:"100%"}}
        id="Password"
        label="Password"
        type="password"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              
          
              <Visibility />

              

            </InputAdornment>
          ),
        }}
        variant="standard"
      />


       </form>

       <Button sx={{margin:5,color:"primary"}} >register</Button>

       
      </UserLogin>

     

      
      </Card>

      </Box>
    
  )
}

export default Registration