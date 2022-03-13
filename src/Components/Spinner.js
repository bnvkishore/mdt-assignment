import React from 'react';
import { Backdrop } from '@mui/material';
import { CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';
import { select } from '../Store';

function Spinner() {
    const open = useSelector(state => state.common.isLoading);
    console.log('open', open);
    return (
        <div>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    )
};

export default Spinner;