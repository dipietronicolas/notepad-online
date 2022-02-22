import { notesActions } from "../notepad.actions";
import { connect } from 'react-redux';
import Notepad from "../NotepadContainer";

const mapStateToProps = (state) => ({
    note0: state.notes.note0,
    note1: state.notes.note1,
    note2: state.notes.note2,
    tabNumber: state.notes.tabNumber,
    getNotesPending: state.notes.ui.getNotesPending,
    saveNotePending: state.notes.ui.saveNotePending,
})

const mapDispatchToProps = (dispatch) => ({
    noteOnChange: (note) => dispatch(notesActions.noteOnChange(note)),
    tabOnChange: (tabNumber) => dispatch(notesActions.setTabOnChange(tabNumber)),
    getNotes: () => dispatch(notesActions.getNotes.request()),
    saveNote: () => dispatch(notesActions.saveNote.request()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Notepad);