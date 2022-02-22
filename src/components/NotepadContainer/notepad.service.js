import { db } from '../../firebase/firebase';
import { collection, getDocs, updateDoc, query, where, doc, setDoc, addDoc } from 'firebase/firestore/lite';

const services = {
    getDocByTabNumber: (tabNumber) => {
        const notesCol = collection(db, 'notepads');
        const q = query(notesCol, where("tabNumber", "==", tabNumber));
        return getDocs(q);
    },
    saveDoc: (tabNumber, text, id) => {
        if (id.length > 0) {
            const docRef = doc(db, 'notepads', id);
            return updateDoc(docRef, {
                text,
            });
        } else {
            return addDoc(collection(db, "notepads"), {
                text, tabNumber
            })
        }
    }
}

export default services;