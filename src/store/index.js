import { createStore, applyMiddleware } from "redux"
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers/index'
import { saga } from './sagas/index'

const sagaMiddleware = createSagaMiddleware()

export default () => {
    const store = createStore(
        reducers,
        applyMiddleware(sagaMiddleware)
    )

    sagaMiddleware.run(saga)

    return store
}
