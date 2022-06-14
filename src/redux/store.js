// 引入createStore,专门用于创建redux中最为核心的store对象
import { createStore, applyMiddleware, combineReducers } from 'redux'
// 引入为count组件服务的reducer
import countReducer from './count_reducer'
// 引入redux-thunk,用于支持异步action
import thunk from 'redux-thunk'


// 汇总所有的reducer
const allReducer = combineReducers({
    count: countReducer
})

export default createStore(allReducer, applyMiddleware(thunk))
