import React from 'react';
import { Alert, AlertTitle} from '@mui/material'
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function Toaster() {
    const toastInfo = useSelector(state => state.common.toastInfo);
    console.log('toastInfo', toastInfo);
    const { severity, title, description } = toastInfo;
    return (
        <div>
            {severity !== "" && (
                <Alert severity={severity}>
                    <AlertTitle>{title}</AlertTitle>
                    {description}
                </Alert>
            )}
        </div>
    )
}
Toaster.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
}
Toaster.defaultProps = {
    severity: 'error'
}
export default Toaster