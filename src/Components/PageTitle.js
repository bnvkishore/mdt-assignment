import React from 'react';
import { Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { styled } from '@mui/system';

const StyledGrid = styled(Grid)(({ theme }) => ({
    padding: theme.spacing(4),
}));

const PageTitle = (props) => {
    const { title } = props
    return (
        <StyledGrid container>
            <Grid item xs={12}>
                <Typography sx={{ fontWeight: '800' }} variant='h4'>{title}</Typography>
            </Grid>
        </StyledGrid>
    )
}

PageTitle.propTypes = {
    title: PropTypes.string
};

export default PageTitle