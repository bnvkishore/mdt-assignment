import { init } from '@rematch/core'
import selectPlugin from '@rematch/select'
import * as common from '../Models/Common'

const store = init({
  models: {
	...common,
  },
  plugins: [selectPlugin()],
  redux: {
    devtoolOptions: {
      disabled: false
    },
    rootReducers: { RESET_APP: () => undefined }
  }
});

export default store;
export const { dispatch, select, getState } = store;
