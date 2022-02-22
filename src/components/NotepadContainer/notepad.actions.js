export const GET_NOTE_REQUEST = 'GET_NOTE_REQUEST';
export const GET_NOTE_RESPONSE = 'GET_NOTE_RESPONSE';
export const GET_NOTE_ERROR = 'GET_NOTE_ERROR';
export const SAVE_NOTE_REQUEST = 'SAVE_NOTE_REQUEST';
export const SAVE_NOTE_RESPONSE = 'SAVE_NOTE_RESPONSE';
export const SAVE_NOTE_ERROR = 'SAVE_NOTE_ERROR';
export const NOTE_ONCHANGE = 'NOTE_ONCHANGE';
export const SET_TAB_NUMBER = 'SET_TAB_NUMBER';

export const notesActions = {
    noteOnChange: (note, tabNumber) => ({ type: NOTE_ONCHANGE, note, tabNumber }),
    setTabOnChange: (tabNumber) => ({ type: SET_TAB_NUMBER, tabNumber }),
    getNotes: {
        request: () => ({ type: GET_NOTE_REQUEST }),
        response: (res) => ({ type: GET_NOTE_RESPONSE, res }),
        error: (error) => ({ type: GET_NOTE_ERROR, error }),
    },
    saveNote: {
        request: () => ({ type: SAVE_NOTE_REQUEST }),
        response: (id) => ({ type: SAVE_NOTE_RESPONSE, id }),
        error: () => ({ type: SAVE_NOTE_ERROR }),
    }
}