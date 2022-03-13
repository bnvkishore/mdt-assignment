import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/system';
import PropTypes from 'prop-types';

const StyledButton = styled(Button)(({ theme }) => ({
    borderRadius: '20px',
    width: '100%',
    marginBottom: theme.spacing(2)
}));

const ActionButton = ({ text, onClick, variant, disabled, dataTestId }) => {
    const onClickHandler = () => {
        onClick();
    }
    return (
        <StyledButton data-testid={ dataTestId } variant={variant} disabled={disabled} size="large" onClick={onClickHandler}>{text}</StyledButton>
    )
};

ActionButton.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
};

ActionButton.defaultProps = {
    variant: 'contained'
}

export default ActionButton;