
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    state: {
        isLoading: false,
        toastInfo: {
            title: '',
            description: '',
            severity: ''
        }
    },
    reducers: {
        setLoading(prevState, newState) {
            return {
                ...prevState,
                isLoading: newState
            }
        },
        setToastInfo(prevState, newState) {
            console.log('newState', newState);
            return {
                ...prevState,
                ...newState
            }
        }
    },
}