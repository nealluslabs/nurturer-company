import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from 'react-redux';

export default function SettingsPage() {
  const [values, setValues] = useState({
    password: '',
    resetPassword: ''
  });

  const { user} = useSelector((state) => state.auth);


const [userLocal, setUserLocal] = useState(user)
console.log("who is our logged in userLocal-->",userLocal)
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copyButtonText, setCopyButtonText] = useState('Copy');
  const dispatch = useDispatch();

  useEffect(()=>{
    if(user){
      setUserLocal(user)
      console.log("who is our logged in userLocal-->",userLocal)
    }
  },user)

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
      setMessage('Password reset successfully!');
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
          >SETTINGS</Typography>

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

            <div style={{ 
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)", 
              padding: "20px", 
              borderRadius: "8px",
              margin: "2rem 0"
            }}>
              <h2 style={{ marginBottom: "21px" }}>Invite Link</h2>

              <Grid container spacing={2} style={{position:"relative", marginBottom:"3rem"}}>
                <Grid item xs={12} sm={8}>
                  <TextField
                    label="Invite Link"
                    value={userLocal && userLocal.companyID ?
                      `https://www.nurturer.ai/register/${userLocal && userLocal.companyID}`
                      :
                      "https://www.nurturer.ai/register"
                    }
                    
                    fullWidth
                    variant="outlined"
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
                <Grid item xs={12} sm={4}>
                  <Button
                    variant="contained"
                    sx={{
                      background: "#20dbe4",
                      color: "white",
                      borderRadius: "12px",
                      padding: "12px 24px",
                      fontWeight: "bold",
                      fontSize: "14px",
                      fontFamily: "inter",
                      height: "56px",
                      width: "100%",
                      '&:hover': {
                        background: "linear-gradient(to right, #333333, #555555)",
                      },
                    }}
                    onClick={() => {
 

                      if(userLocal && userLocal.companyID){
                     

                      navigator.clipboard.writeText(`https://www.nurturer.ai/register/${userLocal && userLocal.companyID}`);
                      setCopyButtonText('Copied');
                      setTimeout(() => {
                        setCopyButtonText('Copy');
                      }, 3000);

                    }
                      else{
                      
                      navigator.clipboard.writeText("https://www.nurturer.ai/register/");
                      setCopyButtonText('Copied');
                      setTimeout(() => {
                        setCopyButtonText('Copy');
                      }, 3000);
                     
                      }


                    }}
                  >
                    {copyButtonText}
                  </Button>
                </Grid>
              </Grid>
            </div>

            <div style={{ 
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)", 
              padding: "20px", 
              borderRadius: "8px",
              margin: "2rem 0"
            }}>
              <h2>Reset Password</h2>
              <br/>

              <Grid container spacing={4} style={{position:"relative", marginTop:"2rem"}}>
                <Grid item xs={12} sm={6} style={{marginTop:"1rem"}}>
                  <TextField
                    label="Password"
                    name="password"
                    value={values.password}
                    onChange={handleInputChange}
                    fullWidth
                    variant="outlined"
                    type="password"
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

                <Grid item xs={12} sm={6} style={{position:"relative", marginTop:"1rem"}}>
                  <TextField
                    name="resetPassword"
                    label="Reset Password"
                    value={values.resetPassword}
                    onChange={handleInputChange}
                    fullWidth
                    variant="outlined"
                    type="password"
                    
                    
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
                <Chip label="😉 | 🔃" />
              </Divider>

              <Box 
                display="flex" 
                alignItems="center"
                justifyContent="center"
                marginTop="1.5rem"
              >
                <div>
                  <Button
                    type="submit"
                    disabled={isLoading}
                    variant="contained"
                    sx={{
                      background: "#20dbe4",
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
                    {isLoading ? 'Loading...' : 'Submit'}
                  </Button>
                </div>
              </Box>
            </div>
          </form>
        </Box>
      </Box>
    </>
  );
}
