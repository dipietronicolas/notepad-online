import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import noteReducer from '../components/NotepadContainer/notepad.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import notesMiddleware from '../components/NotepadContainer/notepad.middleware';

const rootReducer = combineReducers({
    notes: noteReducer,
});

const composeEnhancers =
    (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
    
const store = createStore(
    rootReducer,
    undefined,
    composeEnhancers(
        applyMiddleware(
            notesMiddleware,
        )
    )
)

export default store;