import axios from "axios";

const instance = axios.create({

    withCredentials: true,
    headers: { 'API-KEY': '4bc9fccd-c230-4647-b96b-814e1ebd02fb' },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const lessonAPI = {
follow(userId) {
    return instance.post(`follow/${userId}`)
},
unfollow(userId) {
    return instance.delete(`follow/${userId}`)
},
}