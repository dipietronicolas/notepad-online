import {
    NOTE_ONCHANGE,
    SET_TAB_NUMBER,
    GET_NOTE_REQUEST,
    GET_NOTE_RESPONSE,
    GET_NOTE_ERROR,
    SAVE_NOTE_REQUEST,
    SAVE_NOTE_RESPONSE,
    SAVE_NOTE_ERROR,
} from "./notepad.actions";


const initialState = {
    note0: '',
    note1: '',
    note2: '',
    tabNumber: 0,
    currentDocumentId: '',
    ui: {
        getNotesPending: false,
        saveNotePending: false,
    }
}

const noteReducer = (state = initialState, action) => {
    switch (action.type) {
        case NOTE_ONCHANGE:
            const stateToChange = `note${state.tabNumber}`;
            return {
                ...state,
                [stateToChange]: action.note,
            }
        case SET_TAB_NUMBER:
            return {
                ...state,
                tabNumber: action.tabNumber,
            }
        case GET_NOTE_REQUEST:
            return {
                ...state,
                currentDocumentId: '',
                ui: {
                    ...state,
                    getNotesPending: true,
                }
            }
        case GET_NOTE_RESPONSE:
            const noteToRequest = `note${state.tabNumber}`
            return {
                ...state,
                [noteToRequest]: action.res.text,
                currentDocumentId: action.res.id,
                ui: {
                    ...state,
                    getNotesPending: false,
                }
            }
        case GET_NOTE_ERROR:
            return {
                ...state,
                ui: {
                    ...state,
                    getNotesPending: false,
                }
            }
        case SAVE_NOTE_REQUEST:
            return {
                ...state,
                ui: {
                    ...state,
                    saveNotePending: true,
                }
            }
        case SAVE_NOTE_RESPONSE:
            return {
                ...state,
                currentDocumentId: action?.id || '',
                ui: {
                    ...state,
                    saveNotePending: false,
                }
            }
        case SAVE_NOTE_ERROR:
            return {
                ...state,
                ui: {
                    ...state,
                    saveNotePending: false,
                }
            }
        default:
            return state;
    }
}


export default noteReducer;