import { lessonAPI } from "../api/api"


const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'


let initialState = {

    users: [],

    lessonColom1: [
        { title: 'test', photo: 'https://i.ibb.co/txqCTkL/1.png', id: 1 },
        { title: 'testOne', photo: 'https://i.ibb.co/Q9gj31p/2.png', id: 2 },
        { title: 'testTwo', photo: 'https://i.ibb.co/m5vVtVN/3.png', id: 3 }
    ],

    lessonColom2: [
        { title: 'test', photo: 'https://i.ibb.co/WFpyTxh/4.png', id: 4 },
        { title: 'testOne', photo: 'https://i.ibb.co/7YXhyGK/6.png', id: 5 },
        { title: 'testTwo', photo: 'https://i.ibb.co/JySSszg/7.png', id: 6 }
    ],

}

const LessonsReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                // uders: [...state.users]
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }


        case UNFOLLOW:
            return {
                ...state,
                // uders: [...state.users]
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        default:
            return state
    }
}


export const followSuccess = (userId) => {
    return {
        type: 'FOLLOW', userId
    }
}

/*AC - action creator*/

export const unfollowSuccess = (userId) => {
    return {
        type: 'UNFOLLOW', userId
    }
}

/*AC - action creator*/



export const follow = (userId) => {
    return (dispatch) => {
    
        lessonAPI.follow(userId)

            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
    })
}
}

export const unfollow = (userId) => {
    return (dispatch) => {
    
        lessonAPI.unfollow(userId)

            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                }
    })
}
}

export default LessonsReducer