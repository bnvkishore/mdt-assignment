import React, { useState } from 'react';
import { Grid, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import theme from '../../theme';
import PageTitle from '../../Components/PageTitle';
import BoxWrapper from '../../Components/BoxWrapper';
import BackButton from '../../Components/BackButton';
import ActionButton from '../../Components/ActionButton';
import { doRegister } from '../../API';
import { ArrowBack } from '@mui/icons-material';

function Register() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
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
                validate(e.target.value.length>0, type);
                break;
            case 'password':
                setPassword(e.target.value);
                validate(e.target.value.length>0, type);
                break;
            case 'confirmPassword':
                setConfirmPassword(e.target.value);
                validate(e.target.value.length>0, type);
                break;
            default:
                break;
        }
    };

    const passwordValidator = () => {
        console.log('password', password);
        console.log('confirmPwd', confirmPassword);
        validate(password === confirmPassword, 'confirmPassword');
    };

    const backBtnHandler = () => {
        navigate('/login');
    };

    const registerClickHandler = async () => {
        const payload = {
            username, password
        };
        await dispatch.common.setLoading(true);
        const res = await doRegister(payload);
        const { data } = res;
        await dispatch.common.setLoading(false);
        sessionStorage.setItem('token', data.token);
        if (data.status === 'success') {
            navigate('/dashboard');
        }
    };

    return (
        <>
            <BackButton onClick={backBtnHandler} icon={ArrowBack}/>
            <PageTitle title="Register" />
            <BoxWrapper>
                <div>
                    <Grid container>
                        <Grid item xs={12}>
                            <TextField
                                sx={{ marginBottom: theme.spacing(2) }}
                                id="username"
                                label="Username"
                                variant="outlined"
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
                                type="password"
                                variant="outlined"
                                fullWidth
                                onChange={(e) => inputChangeHandler(e, 'password')}
                                onBlur={passwordValidator}
                                error={error.password}
                                helperText={ error.password ? 'Password is required': ''}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                sx={{ marginBottom: theme.spacing(2) }}
                                id="confirmPassword"
                                label="Confirm Password"
                                type="password"
                                variant="outlined"
                                fullWidth
                                onChange={(e) => inputChangeHandler(e, 'confirmPassword')}
                                onBlur={passwordValidator}
                                error={error.confirmPassword}
                                helperText={ error.confirmPassword ? 'Password does not match': ''}
                            />
                        </Grid>
                    </Grid>
                </div>
                <div>
                    <ActionButton variant="contained" disabled={username==="" || password===""} onClick={registerClickHandler} text='Register' />
                </div>
            </BoxWrapper>
        </>
    )
};

export default Register;