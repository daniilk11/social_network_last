import { usersAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';



let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingProgress: [],
}

const UsersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }

                    return u;
                })
            }
        }


        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        }

        case SET_USERS: {
            return {
                ...state, users: [...action.users]
                // обнавляет скопированный стейт новыми данными
            }
        }

        case SET_CURRENT_PAGE: {
            return {
                ...state, currentPage: action.pageNumber
            }
        }

        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state, totalUsersCount: action.totalCount

            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state, isFetching: action.isFetching

            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingProgress: action.isFetching
                    ? [...state.followingProgress, action.userId]
                    : state.followingProgress.filter(id => id !== action.userId)

            }
        }



        default:
            return state;
    }
}

export const followSuccess = (userId) => ({
    type: FOLLOW,
    userId
})
export const unfollowSuccess = (userId) => ({
    type: UNFOLLOW,
    userId
})


export const setUsers = (users) => ({
    type: SET_USERS,
    users
})

export const setCurrentPage = (pageNumber) => (
    {
        type: SET_CURRENT_PAGE,
        pageNumber
    }
)

export const setTotalUsersCounts = (totalCount) => (
    {
        type: SET_TOTAL_USERS_COUNT,
        totalCount
    }
)
export const toggleIsFetching = (isFetching) => (
    {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
)

export const toggleFollowingProgress = (followingProgress, isFetching, userId) => (
    {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        followingProgress, isFetching, userId
    }
)


export const getUsers = (currentPage, pageSize) => async (dispatch) => {   // тут начинаеться функция thunk
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(currentPage))
    let data = await usersAPI.getUsers(currentPage, pageSize)

    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCounts(data.totalCount));

}


const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId))

    let response = await apiMethod(userId)

    if (response.resultCode === 0) {
        dispatch(actionCreator(userId))

    }

    dispatch(toggleFollowingProgress(false, userId))

}



export const unfollow = (userId) => async (dispatch) => {   // тут начинаеться функция thunk
   
    followUnfollowFlow(dispatch, userId, usersAPI.deleteFollow.bind(usersAPI), unfollowSuccess)
    
}

export const follow = (userId) => async (dispatch) => {   // тут начинаеться функция thunk  нужно для синъронных операциях, для аякс запросов

    followUnfollowFlow(dispatch, userId, usersAPI.postFollow.bind(usersAPI), followSuccess)
   
}





export default UsersReducer;