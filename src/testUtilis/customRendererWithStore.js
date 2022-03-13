import React from 'react';
import PropTypes from 'prop-types';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import store from '../Store';
import theme from '../theme';
import { render } from '@testing-library/react';

const AllTheProviders = ({ children }) => {
    return (
        <MemoryRouter>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    {children}
                </ThemeProvider>
            </Provider>
        </MemoryRouter>
    )
}

const customRendererWithStore = (ui, options = {}) => render(ui, { wrapper: AllTheProviders, ...options });

export default customRendererWithStore;
