import rootReducer from "./Reducers/index";

import {createStore} from 'redux'

const Store = createStore(rootReducer)

export default Store;