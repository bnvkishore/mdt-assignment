import React from 'react';
import { styled } from '@mui/system';
import { Grid, Typography } from '@mui/material';
import theme from '../theme';
import PropTypes from 'prop-types';

const StyledContainer = styled('div')(({ theme }) => ({
    minHeight: '150px',
    backgroundColor: '#fff',
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    padding: theme.spacing(2, 4),
    margin: theme.spacing(0,10,0,0)
}));

const AccountDetailsCard = ({data}) => {
    return (
        <StyledContainer>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant='body1' sx={{fontWeight: '800'}}>You have</Typography>
                    <Typography variant='h4' sx={{ fontWeight: '800', paddingBottom: theme.spacing(2) }}>SGD { data.balance}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='body1' sx={{fontWeight: '600', color:'#a8a8a8'}}>Account No</Typography>
                    <Typography variant='h6' sx={{fontWeight: '800', paddingBottom: theme.spacing(2)}}>{ data.accountNo}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='body1' sx={{ fontWeight: '600', color: '#a8a8a8' }}>Account Holder</Typography>
                    <Typography variant='h6' sx={{ fontWeight: '800', paddingBottom: theme.spacing(2) }}>{ data.name || "Donald trump" }</Typography>
                </Grid>
            </Grid>
        </StyledContainer>
    )
};

AccountDetailsCard.propTypes = {
    data: PropTypes.object
}

export default AccountDetailsCard;