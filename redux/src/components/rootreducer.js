
import {CounterReducer} from './reduceers';
import {NameReducer} from './reduceers';
import {combineReducers} from 'redux';



const rootReducer = combineReducers({
    counter: CounterReducer,
    name: NameReducer
})

export default rootReducer;