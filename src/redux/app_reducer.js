import React from 'react'
import { stopSubmit } from "redux-form";  // обработчик ошибки 
import { getAuth, getUsersAuth } from "./Auth_reducer";


const INITIALIZED_SUCCEED = ' INITIALIZED_SUCCEED';




let initialState = {
    initialized: false,
    globalError: null

}

const appReducer = (state = initialState, action) => {

    switch (action.type) {


        case INITIALIZED_SUCCEED: {
            return {
                ...state,
                initialized: true,

            }
        }


        default: return state;
    }
}


export const initializedSucceed = () => ({
    type: INITIALIZED_SUCCEED
})




export const initializeApp = () => { return (dispatch) => {   // тут начинаеться функция thunk
       let promise  = dispatch(getUsersAuth())

       Promise.all([promise]) // когда придут ответы по всем асинхронным запросам
       .then(() => {
           dispatch(initializedSucceed())
       } )

    }
}
export default  appReducer ;

