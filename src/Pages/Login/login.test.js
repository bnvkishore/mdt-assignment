/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import Login from './index';
import customRendererWithStore from '../../testUtilis/customRendererWithStore';

afterEach(cleanup);

it('render login component', () => {
  const {container} = customRendererWithStore(<Login />);
  expect(container).toBeDefined();
});

it('register button click', async() => {
    const {container, queryByTestId} = customRendererWithStore(<Login />);
    const button = queryByTestId('register-btn')
    await fireEvent.click(button);
    expect(container).toBeDefined();
})

it('login button click', async() => {
    const {container, queryByTestId} = customRendererWithStore(<Login />);
    const username = queryByTestId('username').querySelector('input');;
    const password = queryByTestId('password').querySelector('input');;
    const loginButton = queryByTestId('login-btn');
    await fireEvent.change(username, { target: { value: 'test1' } });
    await fireEvent.change(password, { target: { value: '1234' } });
    expect(username.value).toBe('test1');
    expect(password.value).toBe('1234');
    await fireEvent.click(loginButton);
})