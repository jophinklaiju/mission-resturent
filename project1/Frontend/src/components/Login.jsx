import React, { useState } from 'react';
import { Button, Card, TextField, Typography } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import LockIcon from '@mui/icons-material/Lock';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [epass, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:9030/login', {
        email,
        epass
      });
      if (response.data === "success") {
        setMessage("Login successful");
        navigate('/Home'); // Redirect to Home page
      } else {
        setMessage("Invalid username or password");
      }
    } catch (error) {
      console.error(error);
      setMessage("An error occurred. Please try again later.");
    }
  };

  const backgroundImageStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
  };

  return (
    <div>
      <Card variant='outlined' style={{
        padding: '20px',
        margin: 'auto',
        marginTop: '70px',
        alignContent: 'center',
        width: '300px',
        backgroundColor: '',
        border: '0.5px solid black',
        cursor: 'pointer',
        borderRadius: '30px',
        opacity: '100%',
      }}>
        <form onSubmit={handleSubmit}>
          <Typography variant='h3'>LOGIN </Typography><b></b><b></b><br></br>
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            variant='standard'
            style={{ cursor: 'pointer' }}
          /><br /><br />
          <TextField
            label="Password"
            value={epass}
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
            }}
            variant='standard'
            style={{ cursor: 'pointer' }}
          /><br /><br /><br />
          <Button type="submit" variant='contained' color='success'>LOGIN</Button>
        </form>
        <br /><br /><br />
        <Typography variant='h8'> Don't have an account 
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button variant='contained' color='success'>
            <Link to={'/Signup'} style={{ textDecoration: 'none', color: 'white' }}>SignUp</Link>
          </Button>
        </Typography>
      </Card>
      {message && <Typography style={{ color: 'red' }}>{message}</Typography>}
    </div>
  );
};

export default Login;
