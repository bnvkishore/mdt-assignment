import React from 'react';
import { IconButton } from '@mui/material';
import { styled } from '@mui/system';
import PropTypes from 'prop-types'

const StyledIconButton = styled(IconButton)(({ theme }) => ({
    padding: theme.spacing(4, 4, 2, 4),
    width: '100%',
}));

const BackButton = ({ onClick, icon:Icon, align }) => {
    const bntHandler = () => {
        onClick();
    };
    return (
        <StyledIconButton sx={{justifyContent: `${align}`}}color="primary" aria-label="back" component="span" onClick={bntHandler}>
            <Icon />
        </StyledIconButton>
    )
};

BackButton.defaultProps = {
    align: 'flex-start'
}
export default BackButton;