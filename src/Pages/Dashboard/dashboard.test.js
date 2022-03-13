/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import Dashboard from './index';
import customRendererWithStore from '../../testUtilis/customRendererWithStore';

afterEach(cleanup);

it('render login component', () => {
  const {container} = customRendererWithStore(<Dashboard />);
  expect(container).toBeDefined();
});

it('logout button click', async() => {
    const {container, queryByTestId} = customRendererWithStore(<Dashboard />);
    const button = queryByTestId('logout-btn')
    await fireEvent.click(button);
    expect(container).toBeDefined();
})

