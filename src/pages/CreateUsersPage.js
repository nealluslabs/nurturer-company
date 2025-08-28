
import React, { useState } from "react";
import { 
  Box, 
  Typography, 
  Alert, 
  Button, 
  Grid, 
  TextField, 
  Divider, 
  Chip 
} from "@mui/material";
import { useDispatch } from 'react-redux';

export default function CreateUsersPage() {
  const [values, setValues] = useState({
    email: '',
    confirmEmail: ''
  });
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Add your submit logic here
    setTimeout(() => {
      setIsLoading(false);
      setMessage('User created successfully!');
    }, 2000);
  };

  const resetMsg = () => {
    setError('');
    setMessage('');
  };

  return (
    <>
      <Box mx={2} pr={4} mt={0.5}>
        <Box sx={{ width: "100%", margin: "2px 0" }}>
          <Typography
            sx={{ 
              fontFamily: "inter", 
              fontWeight: "bold", 
              fontSize: "18px", 
              display: "inline-block", 
              borderBottom: "2px solid #000000" 
            }}
            mb={3}
            px={0.5}
          >CREATE USER</Typography>

          <form onSubmit={handleSubmit}>
            {error && (
              <div>
                <Alert
                  severity="error" 
                  color="error"
                  action={
                    <Button 
                      color="inherit" 
                      size="small" 
                      style={{ fontSize: '15px' }} 
                      onClick={resetMsg}
                    >
                      <b>X</b>
                    </Button>
                  }
                >
                  <p style={{ fontSize: '11px' }}><b>{error}</b></p>
                </Alert>
                <br/>
              </div>
            )}

            {message && (
              <div>
                <Alert
                  severity="success" 
                  color="success"
                  action={
                    <Button 
                      color="inherit" 
                      size="small" 
                      style={{ fontSize: '15px' }} 
                      onClick={resetMsg}
                    >
                      <b>X</b>
                    </Button>
                  }
                >
                  <p style={{ fontSize: '11px' }}><b>{message}</b></p>
                </Alert>
                <br/>
              </div>
            )}

            <h2>Create New User</h2>
            <br/>

            <Grid container spacing={4} style={{position:"relative", marginTop:"2rem"}}>
              <Grid item xs={12} sm={6} style={{marginTop:"1rem"}}>
                <TextField
                  label="Email Address"
                  name="email"
                  value={values.email}
                  onChange={handleInputChange}
                  fullWidth
                  variant="outlined"
                  type="email"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#000000',
                      },
                      '&:hover fieldset': {
                        borderColor: '#000000',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#000000',
                      },
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  name="confirmEmail"
                  label="Confirm Email Address"
                  value={values.confirmEmail}
                  onChange={handleInputChange}
                  fullWidth
                  variant="outlined"
                  type="email"
                  multiline
                  rows={2}
                  maxRows={4}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#000000',
                      },
                      '&:hover fieldset': {
                        borderColor: '#000000',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#000000',
                      },
                    },
                  }}
                />
              </Grid>
            </Grid>

            <br/>
            <Divider>
              <Chip label="📧 | ➕" />
            </Divider>

            <Box 
              display="flex" 
              alignItems="center"
              justifyContent="center"
            >
              <div>
                <Button
                  type="submit"
                  disabled={isLoading}
                  variant="contained"
                  sx={{
                    background: "linear-gradient(to right, #000000, #333333)",
                    color: "white",
                    borderRadius: "12px",
                    padding: "12px 24px",
                    fontWeight: "bold",
                    fontSize: "14px",
                    fontFamily: "inter",
                    '&:hover': {
                      background: "linear-gradient(to right, #333333, #555555)",
                    },
                    '&:disabled': {
                      background: "#cccccc",
                      color: "#666666",
                    }
                  }}
                >
                  {isLoading ? 'Loading...' : 'Create User'}
                </Button>
              </div>
            </Box>
          </form>
        </Box>
      </Box>
    </>
  );
}
