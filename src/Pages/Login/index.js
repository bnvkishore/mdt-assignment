import React, { useState } from 'react';
import { Grid, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import theme from '../../theme';
import PageTitle from '../../Components/PageTitle';
import BoxWrapper from '../../Components/BoxWrapper';
import ActionButton from '../../Components/ActionButton';
import { doLogin } from '../../API';

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({});

    const validate = (value, type) => {
        setError({
                    ...error,
                    [type]: !value
                });
    }

    const inputChangeHandler = (e, type) => {
        switch (type) {
            case 'username':
                setUsername(e.target.value);
                validate(e.target.value.length > 0, type);
                break;
            case 'password':
                setPassword(e.target.value);
                validate(e.target.value.length > 0, type);
                break;
            default:
                break;
        }
    }

    const loginHandler = async () => {
        const payload = {
            username, password
        }
        await dispatch.common.setLoading(true);
        const res = await doLogin(payload, dispatch);
        const { data } = res;
        await dispatch.common.setLoading(false);
        if (res.status !== 200) {
            await dispatch.common.setToastInfo({
                toastInfo: {
                    title: "Error",
                    description: data.error,
                    severity: 'error'
                }
            });
        } else {
            sessionStorage.setItem('token', data.token);
            await dispatch.common.setToastInfo({
                toastInfo: {
                    title: "",
                    description: "",
                    severity: ''
                }
            });
            if (data.status === 'success') {
                navigate('/dashboard');
            }
        }
    };

    const registerHandler = () => {
        navigate('/register');
    };

    return (
        <>
            <PageTitle title="Login" />
            <BoxWrapper>
                <div>
                    <Grid container>
                        <Grid item xs={12}>
                            <TextField
                                sx={{ marginBottom: theme.spacing(2) }}
                                id="username"
                                label="Username"
                                variant="outlined"
                                data-testid="username"
                                fullWidth
                                onChange={(e) => inputChangeHandler(e, 'username')}
                                error={error.username}
                                helperText={ error.username ? 'Username is required': ''}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                sx={{ marginBottom: theme.spacing(2) }}
                                id="password"
                                label="Password"
                                data-testid="password"
                                type="password"
                                variant="outlined"
                                fullWidth
                                onChange={(e) => inputChangeHandler(e, 'password')}
                                error={error.password}
                                helperText={ error.password ? 'Password is required': ''}
                            />
                        </Grid>
                    </Grid>
                </div>
                <div>
                    <ActionButton variant="contained" onClick={loginHandler} disabled={username==="" || password===""} text='Login' dataTestId="login-btn"/>
                    <ActionButton variant="outlined" onClick={registerHandler} text='Register' dataTestId="register-btn"/>
                </div>
            </BoxWrapper>
        </>
    )
}

export default Login;