import React, { useEffect, useState } from 'react';
import { Grid, TextField, FormControl, InputLabel, Select, MenuItem, OutlinedInput } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import theme from '../../theme';
import PageTitle from '../../Components/PageTitle';
import BoxWrapper from '../../Components/BoxWrapper';
import BackButton from '../../Components/BackButton';
import ActionButton from '../../Components/ActionButton';
import { makeTransfer, getPayees } from '../../API';
import { ArrowBack } from '@mui/icons-material';

function Transfer(props) {
    const {state} = useLocation();
    const accountNo = state && state.accountNo;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [payeeList, setPayeeList] = useState([]);
    const[selectedPayee, setSelectedPayee] = useState('');
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState({});

    useEffect(() => {
        async function fetchPayeeList() {
            const payload = {
                accountNo
            };
            const res = await getPayees(payload);
            const { data } = res;
            console.log('list', data.data);
            setPayeeList(data.data);
        };
        fetchPayeeList();
    },[accountNo])

    const validate = (value, type) => {
        setError({
                    ...error,
                    [type]: !value
                });
    }
    const inputChangeHandler = (e, type) => {
        switch (type) {
            case 'selectedPayee':
                setSelectedPayee(e.target.value);
                validate(e.target.value.length>0, type);
                break;
            case 'amount':
                setAmount(e.target.value);
                validate(e.target.value.length>0, type);
                break;
            case 'description':
                setDescription(e.target.value);
                validate(e.target.value.length>0, type);
                break;
            default:
                break;
        }
    };

    const backBtnHandler = () => {
        navigate('/dashboard');
    };

    const registerClickHandler = async () => {
        const payload = {
            receipientAccountNo: selectedPayee,
            amount: parseInt(amount),
            description
        };
        await dispatch.common.setLoading(true);
        const res = await makeTransfer(payload);
        const { data } = res;
        await dispatch.common.setLoading(true);
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
                            <FormControl sx={{ mb: 2, width: '100%' }}>
                                <InputLabel id="demo-multiple-name-label">Payee</InputLabel>
                                <Select
                                    labelId="demo-multiple-name-label"
                                    id="demo-multiple-name"
                                    value={selectedPayee}
                                    onChange={(e) => inputChangeHandler(e, 'selectedPayee')}
                                    input={<OutlinedInput label="Name" />}
                                >
                                {payeeList.map((payee) => (
                                    <MenuItem
                                        key={payee.id}
                                        value={payee.accountNo}
                                        // style={getStyles(name, personName, theme)}
                                    >
                                        {payee.name}
                                    </MenuItem>
                                ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                sx={{ marginBottom: theme.spacing(2) }}
                                id="amount"
                                label="Amount"
                                type="number"
                                variant="outlined"
                                fullWidth
                                onChange={(e) => inputChangeHandler(e, 'amount')}
                                error={error.amount}
                                helperText={ error.amount ? 'Amount is required': ''}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                sx={{ marginBottom: theme.spacing(2) }}
                                id="description"
                                label="Description"
                                type="password"
                                variant="outlined"
                                multiline
                                maxRows={4}
                                fullWidth
                                onChange={(e) => inputChangeHandler(e, 'description')}
                                error={error.confirmPassword}
                                helperText={ error.confirmPassword ? 'Password does not match': ''}
                            />
                        </Grid>
                    </Grid>
                </div>
                <div>
                    <ActionButton variant="contained" disabled={selectedPayee==="" || amount===""} onClick={registerClickHandler} text='Transfer Now' />
                </div>
            </BoxWrapper>
        </>
    )
};

export default Transfer;