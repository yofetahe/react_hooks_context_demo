import {useReducer} from "react";
import _ from "lodash";
import createUseContext from "constate";

const initialState = {
    contacts: [
        {
            id: "098",
            name: "Diana Princes",
            email: "diana@gmail.com"
        },
        {
            id: "099",
            name: "Leah Yof",
            email: "leah@gmail.com"
        },
        {
            id: "100",
            name: "Aida Yof",
            email: "aida@gmail.com"
        }
    ],
    loading: false,
    error: null
}

const reducer = (state, action) => {
    switch(action.type){
        case "ADD_CONTACT":
            return {
                contacts: [...state.contacts, action.payload]
            };
        case "DEL_CONTACT":
            return {
                contacts: state.contacts.filter(c => c.id !== action.payload)
            };
        case "START":
            return {
                loading: true
            };
        case "COMPLETE":
            return {
                loading: false
            };
        default:
            throw new Error();
    }
}

////// Custom hooks - contains State, Dispatcher, Action
const useContacts = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { contacts, loading } = state;
    const addContact = (name, email) => {
        dispatch({
            type: "ADD_CONTACT",
            payload: { id: _.uniqueId(10), name, email }
        })
    };
    const delContact = id => {
        dispatch({
            type: "DEL_CONTACT",
            payload: id
        })
    };
    return { contacts, loading, addContact, delContact };
}

export const useContactsContext = createUseContext(useContacts);