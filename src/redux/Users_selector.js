import { createSelector } from "reselect";



export const getUserSuper= createSelector( () => {
    state.usersPage.users.filter(u => true)
})

export const getUsers = (state) => {
   return state.usersPage.users;
}



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

