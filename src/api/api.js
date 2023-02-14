
import axios from "axios";




const instance = axios.create(
    {
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        withCredentials: true,
        headers: {
            "API-KEY": "c87995a9-0a76-40ea-974d-a2655c3b9312"
        }
    }
);

//В instance по дефолту всег да запрост будет с базовым урлом и данными которые мы передаем  с ним 

export const usersAPI = {

    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => { return response.data })
    },

    deleteFollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => { return response.data })
    },
    postFollow(id) {
        return instance.post(`follow/${id}`, {})
            .then(response => { return response.data })

    },
    // getUsers(currentPage = 1, pageSize = 5) {
    //     return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    //         .then(response => { return response.data })
    // },


}


export const profileAPI = {

    getProfile(id) { // запрос на переход и запрос данных о профиле по картинке
        return instance.get(`profile/${id}`)

    },

    getStatus(userId) {
        return instance.get('profile/status/' + userId)
    },

    updateStatus(status) {
        return instance.put('profile/status', { status: status })
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append('image', photoFile)
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }

}

export const authAPI = {

    getAuth() {  //запрос на логин
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false, captcha=null) {
        return instance.post(`auth/login`, { email, password, rememberMe })
    },
    logout() {
        return instance.delete(`auth/login`)
    },


}


export const securityAPI ={
    getCaptchaUrl () {
        return instance.get(`security//get-captcha-url`)
 }}





