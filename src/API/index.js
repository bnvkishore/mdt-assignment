import axios from '../axiosConfig';

export const doLogin = async (payload, dispatch) => {
    return await axios.post('/login', payload).then(async (res) => {
        return res;
    }).catch(async err => {
        return err.response;
    })
};

export const doRegister = async (payload) => {
    return await axios.post('/register', payload).then((res) => {
        return res;
    }).catch(err => {
        return err;
    })
};

export const getAccountBalance = async () => {
    return await axios.get('/balance').then(res => {
        return res;
    }).catch(err => {
        return err;
    })
};

export const getTransactionHistory = async () => {
    return await axios.get('/transactions').then(res => {
        return res;
    }).catch(err => {
        return err;
    })
};

export const makeTransfer = async (payload) => {
    return await axios.post('/transfer', payload).then(res => {
        return res;
    }).catch(err => {
        return err;
    })
};

export const getPayees = async (payload) => {
    return await axios.get('/payees', payload).then(res => {
        return res;
    }).catch(err => {
        return err;
    })
}

