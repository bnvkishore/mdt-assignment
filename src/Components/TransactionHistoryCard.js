import React from 'react';
import { styled } from '@mui/system';
import { Grid, Typography } from '@mui/material';
import theme from '../theme';
import PropTypes from 'prop-types';

const StyledContainer = styled('div')(({ theme }) => ({
    minHeight: '150px',
    backgroundColor: '#fff',
    borderRadius: theme.spacing(2),
    padding: theme.spacing(2, 4),
    margin: theme.spacing(2,0)
}));

const TransactionHistoryCard = ({ data }) => {
    console.log('data', data);
    const date = new Date(data.transactionDate).toLocaleDateString('en-US');
    console.log('date', date);
    return (
        <StyledContainer>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant='body1' sx={{fontWeight: '600', color:'#a8a8a8', paddingBottom: theme.spacing(2)}}>{date}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={6}>
                            <Typography variant='subtitle2' sx={{ fontWeight: '800' }}>{data.sender ? data.sender.accountHolder : data.receipient.accountHolder}</Typography>
                            <Typography variant='subtitle2' sx={{ fontWeight: '600', color: '#a8a8a8', paddingBottom: theme.spacing(2) }}>{data.sender ? data.sender.accountNo : data.receipient.accountNo}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography
                                variant='h6'
                                sx={{
                                    fontWeight: '800',
                                    color: data.transactionType === 'received'? theme.palette.success.main: '#a8a8a8',
                                    textAlign: 'right'
                                }}
                            >
                                {data.transactionType === 'received' ? data.amount : `- ${data.amount}`}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </StyledContainer>
    )
};

TransactionHistoryCard.propTypes = {
    data: PropTypes.object
};

export default TransactionHistoryCard;