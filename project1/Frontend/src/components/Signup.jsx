import { Button, Card, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const SignUp = () => {
  const [inputs,setInputs]=useState({
    ename:"",
    enum:"",
    email:"",
    epass:""
  });
  const navigate = useNavigate();
  const inputHandler =(e) =>{
    const {name, value} = e.target;
    setInputs((prevData) =>({...prevData,[name]: value}));
  };
  const addHandler=() =>{
    console.log("button clicked");
    axios.post("http://localhost:9030/signup", inputs)
    .then((response) =>{
      console.log(response.data);
      alert(response.data);
      navigate('/Login'); // Redirect to Home page
    })
    .catch((err)=> console.log(err));
  };
  const backgroundImageStyle = {
    position: 'fixed',
    top:0,
    left:0,
    width:'100%',
    height:'100%',
    zIndex: -1,
  };
  return (
    <div>
     
     <Card variant='outlined'style={{padding:'20px',
    margin:'auto',
    marginTop:'10px',
    alignContent:'center',
  width:'300px',
  backgroundColor:'white',
  border:'0.5px solid black',
  cursor:'pointer',
  borderRadius:'30px',
  opacity:'100%',}}>
        
        <Typography variant='h3'>SIGN UP</Typography><b></b><b></b><br></br>
        
        <TextField label="First Name" variant="standard" name='ename' value={inputs.ename} onChange={inputHandler}
         InputProps={{
          startAdornment:(<InputAdornment position="start">
          <AccountCircle/>
          </InputAdornment>
          ),
        }}
        // variant='standard'
      style={{cursor:'pointer'}}/><br /><br />
        <TextField label="Number"  variant="standard" name='enum' value={inputs.enum} onChange={inputHandler}
         InputProps={{
          startAdornment:(<InputAdornment position="start">
          <AccountCircle/>
          </InputAdornment>
          ),
        }}
        // variant='standard'
      style={{cursor:'pointer'}}/><br /><br />
        <TextField label="email"type='gmail'  variant="standard" name='email' value={inputs.email} onChange={inputHandler} InputProps={{
          startAdornment:(
            <InputAdornment position="start">
              <EmailIcon/>
              </InputAdornment>
            ),
          }}
          style={{cursor:'pointer'}}/><br /><br />
        <TextField label="password"type='password'  variant="standard" name='epass' value={inputs.epass} onChange={inputHandler}
        InputProps={{
          startAdornment:(
            <InputAdornment position="start">
              <LockIcon/>
              </InputAdornment>
            ),
          }}
          style={{cursor:'pointer'}}/><br /><br /><br />
        <Button variant='contained'color='success' onClick={addHandler}>SIGNUP</Button><br></br><br/><br /><br />
            <Typography variant='h8'> Already have an account 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     <Button variant= 'contained'color='warning'> 
     <Link to={'/Login'} style={{ textDecoration: 'none', color: 'white' }}>LOGIN</Link>
     </Button></Typography>
    
    </Card>
        </div>
  )
}

export default SignUp