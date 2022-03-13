import React from 'react';
import { styled } from '@mui/system';
import { Box } from '@mui/material';

const StyledBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(4),
    height: `calc(${window.screen.height}px - ${theme.spacing(20)})`, 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
}));

const BoxWrapper = ({ children }) => (
    <>
        <StyledBox>
            {children}
        </StyledBox>
    </>
);

export default BoxWrapper

