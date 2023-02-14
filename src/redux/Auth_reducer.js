import { stopSubmit } from "redux-form";  // обработчик ошибки 
import { authAPI, securityAPI } from "../api/api";


const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';





let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: true,
    isAuth: false,
    captchaUrl: null,
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {


        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS: {
            return {
                ...state,
                ...action.payload,

            }
        }
       

        default: return state;
    }
}


export const setAuthUserData = (email, id, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: { email, id, login, isAuth },
   

})

export const getCaptchaUrlSuccess = (captchaUrl) => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: { captchaUrl }

})





export const getUsersAuth = () => async (dispatch) => {   // тут начинаеться функция thunk
    let response = await authAPI.getAuth()

    if (response.data.resultCode === 0) {
        let { email, id, login } = response.data.data
        dispatch(setAuthUserData(email, id, login, true))
    }
}


export const login = (email, password, rememberMe, captcha) => async (dispatch) => {   // тут начинаеться функция thunk
    let response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        dispatch(getUsersAuth())
    }



    else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        // обработчик ошибки  ишет по названию fielda formy (ниже email) _error - ошибка для всей формы, можно спощью нег осделать инвалидную форму
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "error main";
        dispatch(stopSubmit("login", { _error: message }))

    }
}



export const getCaptchaUrl = () => async (dispatch) => {   // тут начинаеться функция thunk
    const response = await securityAPI.getCaptchaUrl()

    const captchaUrl = response.data.url

    dispatch(getCaptchaUrlSuccess(captchaUrl))

}


export const logout = () => async (dispatch) => {
    let response = await authAPI.logout() //вместо then используем async await
    if (response.data.resultCode === 0) {  // тут начинаеться функция thunk
        dispatch(setAuthUserData(null, null, null, false))
    }

}



export default authReducer;