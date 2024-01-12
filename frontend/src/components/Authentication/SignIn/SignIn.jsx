import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import LinearProgress from '@mui/material/LinearProgress';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { signInThunk } from '../../../redux/slices/authenticationSlice';
import "./SignIn.css";

function SignIn() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const accessToken = useSelector(state => state.authenticationSlice.accessToken)
    const loading = useSelector(state => state.authenticationSlice.loading)
    const [step, setStep] = useState(1)
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleStep = (number) => {
        setStep(number)
    }

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleNavigateSignUp = () => {
        navigate('/signup')
    }

    const handleSignIn = () => {
        dispatch(signInThunk({ email, password }))
    }
    return !accessToken ? (
        <div className="signin-block">
            <div className="signin-container">
                {loading && <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%'
                }}>
                    <LinearProgress sx={{ height: 5 }} />
                </Box>}
                <div className="signin-container-header">
                    <svg viewBox="0 0 75 24" width="75" height="24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="BFr46e xduoyf"><g id="qaEJec"><path fill="#ea4335" d="M67.954 16.303c-1.33 0-2.278-.608-2.886-1.804l7.967-3.3-.27-.68c-.495-1.33-2.008-3.79-5.102-3.79-3.068 0-5.622 2.41-5.622 5.96 0 3.34 2.53 5.96 5.92 5.96 2.73 0 4.31-1.67 4.97-2.64l-2.03-1.35c-.673.98-1.6 1.64-2.93 1.64zm-.203-7.27c1.04 0 1.92.52 2.21 1.264l-5.32 2.21c-.06-2.3 1.79-3.474 3.12-3.474z"></path></g><g id="YGlOvc"><path fill="#34a853" d="M58.193.67h2.564v17.44h-2.564z"></path></g><g id="BWfIk"><path fill="#4285f4" d="M54.152 8.066h-.088c-.588-.697-1.716-1.33-3.136-1.33-2.98 0-5.71 2.614-5.71 5.98 0 3.338 2.73 5.933 5.71 5.933 1.42 0 2.548-.64 3.136-1.36h.088v.86c0 2.28-1.217 3.5-3.183 3.5-1.61 0-2.6-1.15-3-2.12l-2.28.94c.65 1.58 2.39 3.52 5.28 3.52 3.06 0 5.66-1.807 5.66-6.206V7.21h-2.48v.858zm-3.006 8.237c-1.804 0-3.318-1.513-3.318-3.588 0-2.1 1.514-3.635 3.318-3.635 1.784 0 3.183 1.534 3.183 3.635 0 2.075-1.4 3.588-3.19 3.588z"></path></g><g id="e6m3fd"><path fill="#fbbc05" d="M38.17 6.735c-3.28 0-5.953 2.506-5.953 5.96 0 3.432 2.673 5.96 5.954 5.96 3.29 0 5.96-2.528 5.96-5.96 0-3.46-2.67-5.96-5.95-5.96zm0 9.568c-1.798 0-3.348-1.487-3.348-3.61 0-2.14 1.55-3.608 3.35-3.608s3.348 1.467 3.348 3.61c0 2.116-1.55 3.608-3.35 3.608z"></path></g><g id="vbkDmc"><path fill="#ea4335" d="M25.17 6.71c-3.28 0-5.954 2.505-5.954 5.958 0 3.433 2.673 5.96 5.954 5.96 3.282 0 5.955-2.527 5.955-5.96 0-3.453-2.673-5.96-5.955-5.96zm0 9.567c-1.8 0-3.35-1.487-3.35-3.61 0-2.14 1.55-3.608 3.35-3.608s3.35 1.46 3.35 3.6c0 2.12-1.55 3.61-3.35 3.61z"></path></g><g id="idEJde"><path fill="#4285f4" d="M14.11 14.182c.722-.723 1.205-1.78 1.387-3.334H9.423V8.373h8.518c.09.452.16 1.07.16 1.664 0 1.903-.52 4.26-2.19 5.934-1.63 1.7-3.71 2.61-6.48 2.61-5.12 0-9.42-4.17-9.42-9.29C0 4.17 4.31 0 9.43 0c2.83 0 4.843 1.108 6.362 2.56L14 4.347c-1.087-1.02-2.56-1.81-4.577-1.81-3.74 0-6.662 3.01-6.662 6.75s2.93 6.75 6.67 6.75c2.43 0 3.81-.972 4.69-1.856z"></path></g></svg>
                    {
                        step === 1 ? <>
                            <h2 className="signin-text">Sign In</h2>
                            <span className="signin-subtext">to continue to Gmail</span>
                        </> : <>
                            <h2 className="signin-text">Welcome</h2>
                            <div className="welcome-group" onClick={() => handleStep(1)}>
                                <svg aria-hidden="true" className="stUf5b" fill="currentColor" focusable="false" width="20px" height="20px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.36 14.83c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6z"></path></svg>
                                <span className="welcome-group_email-address">{email}</span>
                                <svg aria-hidden="true" className="stUf5b MSBt4d" fill="currentColor" focusable="false" width="24px" height="24px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><polygon points="12,16.41 5.29,9.71 6.71,8.29 12,13.59 17.29,8.29 18.71,9.71"></polygon></svg>
                            </div>
                        </>
                    }
                </div>
                <div className={`email-address-container ${step === 2 ? 'move-to-left' : ''}`}>
                    <TextField
                        id="outlined-basic"
                        label="Email address"
                        variant="outlined"
                        sx={{
                            width: '100%',
                            my: 3
                        }}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        error={Boolean(email.length) && !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)}
                        helperText={Boolean(email.length) && !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email) ? "Email address is incorrect!" : ''}
                    />
                    <span className="forgot-email">Forgot email?</span>

                    <div className="email-address-bottom-group">
                        <span className="create-account-text" onClick={handleNavigateSignUp}>Create account</span>
                        <Button
                            variant="contained"
                            sx={{ bgcolor: "#1A73E8" }}
                            onClick={() => handleStep(2)}
                        >
                            Next
                        </Button>
                    </div>
                </div>
                <div className={`password-container ${step === 1 ? 'move-to-right' : ''}`}>
                    <FormControl sx={{ width: '100%', my: 3 }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}

                        />
                    </FormControl>

                    <div className="email-address-bottom-group">
                        <span className="create-account-text">Forgot password?</span>
                        <Button
                            variant="contained"
                            sx={{ bgcolor: "#1A73E8" }}
                            onClick={handleSignIn}
                            disabled={loading}
                        >
                            Sign In
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    ) : <Navigate to="/" />;
}

export default SignIn;
