import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import BoxWrapper from '../../Components/BoxWrapper';
import ActionButton from '../../Components/ActionButton';
import TransactionHistoryCard from '../../Components/TransactionHistoryCard';
import AccountDetailsCard from '../../Components/AccountDetailsCard';
import BackButton from '../../Components/BackButton';
import { getAccountBalance, getTransactionHistory } from "../../API";

const LogoutButton = () => (
    <Typography sx={{fontWeight: '800'}} variant='body1'>Logout</Typography>
)

function Dashboard() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [accountInfo, setAccountInfo] = useState({});
    const [transactionHistory, setTransactionHistory] = useState([]);

    useEffect(() => {
        async function fetchAccountBalance() {
            await dispatch.common.setLoading(true);
            const accountBalance = await getAccountBalance();
            const { data } = accountBalance;
            setAccountInfo(data);
            await dispatch.common.setLoading(false);
        };
        async function fetchTransactionHistory() {
            await dispatch.common.setLoading(true);
            const transactionHistory = await getTransactionHistory();
            const { data:res } = transactionHistory;
            setTransactionHistory(res.data);
            await dispatch.common.setLoading(false);
        };
        fetchAccountBalance();
        fetchTransactionHistory();
    },[]);

    const makeTransferHandler = () => {
        navigate('/transfer', {state:{accountNo:accountInfo.accountNo}})
    };

    const logoutHandler = async() => {
        await dispatch.common.setLoading(true);
        sessionStorage.removeItem('token');
        await dispatch.common.setLoading(false);
        navigate('/login');
    }
    return (
        <>
            <BackButton onClick={logoutHandler} icon={LogoutButton} align="flex-end" />
            <Grid container>
                <Grid item xs={12}>
                    <AccountDetailsCard data={accountInfo}/>
                </Grid>
            </Grid>
            <BoxWrapper>
                <div>
                    <Typography variant="h6" sx={{fontWeight: '800'}}>Your transaction history</Typography>
                    <Grid container>
                        {transactionHistory && transactionHistory.map((transaction, index) => (
                            <Grid item xs={12} key={transaction.transactionId}>
                                <TransactionHistoryCard data={transaction} />
                            </Grid>
                        ))}
                    </Grid>
                </div>
                <div>
                    <ActionButton variant="contained" onClick={makeTransferHandler} text='Make Transfer' dataTestId="logout-btn"/>
                </div>
            </BoxWrapper>
        </>
    )
}

export default Dashboard;