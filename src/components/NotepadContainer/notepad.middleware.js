import {
    notesActions,
    GET_NOTE_REQUEST,
    SAVE_NOTE_REQUEST,
} from './notepad.actions';
import services from './notepad.service';

const notesMiddleware = ({ dispatch, getState }) => {
    return next => action => {
        next(action);

        switch (action.type) {
            case GET_NOTE_REQUEST:
                services.getDocByTabNumber(getState().notes.tabNumber)
                    .then(res => {
                        if (res._docs.length === 0) {
                            throw new Error("No note on this editor");
                        }
                        res.forEach((doc) => {
                            const note = {
                                id: doc.id,
                                ...doc.data()
                            };
                            dispatch(notesActions.getNotes.response(note));
                        });
                    })
                    .catch(error => {
                        dispatch(notesActions.getNotes.error(error));
                    });
                break;
            case SAVE_NOTE_REQUEST:
                const tabNumber = getState().notes.tabNumber;
                const id = getState().notes.currentDocumentId;
                const text = getState().notes[`note${tabNumber}`];
                
                services.saveDoc(tabNumber, text, id)
                    .then((res) => {
                        if(res?.id){
                            console.log(res.id)
                        }
                        dispatch(notesActions.saveNote.response(res.id || id));
                    })
                    .catch(error => {
                        dispatch(notesActions.saveNote.error(error));
                    })
                break;
            default:
                break;
        }
    }
}

export default notesMiddleware;
