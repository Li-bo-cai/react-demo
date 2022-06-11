import store from "./store"

export const createIncrement = (data) => ({ type: 'increment', data })
export const createDecrement = (data) => ({ type: 'decrement', data })
export const createIncrementIfOdd = (data) => ({ type: 'incrementIfOdd', data })
export const createIncrementAsync = (data) => {
    return () => {
        setTimeout(() => {
            store.dispatch(createIncrement(data))
        }, 500)
    }
} 