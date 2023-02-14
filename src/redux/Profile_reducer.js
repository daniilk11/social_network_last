import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";
const SET_PHOTO_SUCCESS = " SET_PHOTO_SUCCESS";

let initialState = {
  PostData: [
    {
      id: 1,
      username: "Anna",
      avatar:
        "https://avatars.mds.yandex.net/get-pdb/2797034/89b15653-ddf3-4834-ad8a-74a9a8105256/s1200?webp=false",
      message: "How are you?",
      post_img:
        "https://filed6-18.my.mail.ru/pic?url=https%3A%2F%2Fcontent-7.foto.my.mail.ru%2Fvk%2F78341544%2F_musicplaylistcover%2Fi-3.jpg&mw=&mh=&sig=b9c3b970fe92f403a9961a44e8d9bddf",
      likecount: 4,
      time: "36",
    },
    {
      id: 2,
      username: "Valeriya",
      avatar: "https://www.rb.ua/media/celebs/ray-ban-rb3025-019-9j-h7.jpg",
      message: "Its my new post",
      post_img: "",
      likecount: 6,
      time: "30",
    },
  ],
  NewPostText: "",
  profile: null,
  status: "",
  Bestfriends: [
    {
      name: "Vitalia",
      avatarka:
        "https://avatars.mds.yandex.net/get-pdb/2797034/89b15653-ddf3-4834-ad8a-74a9a8105256/s1200?webp=false",
      status: "online",
      id: 1,
    },
    {
      name: "Valeriya",
      avatarka: "https://www.rb.ua/media/celebs/ray-ban-rb3025-019-9j-h7.jpg",
      status: "ofline",
      id: 2,
    },
    {
      name: "Vita",
      avatarka:
        "https://www.nastol.com.ua/pic/201706/1920x1200/nastol.com.ua-232656.jpg",
      status: "ofline",
      id: 3,
    },
  ],
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 3,
        username: "Daniil",
        avatar:
          "https://sun1-15.userapi.com/s/v1/ig2/NOOdemj1tVs-8Nfq8KaWtfZjD2M7bevFZpA0brtlbAGhfqQqIYFuaLH7BYy1aU1sWZ_ol2s5I5PPXEGkg3J4CLDZ.jpg?size=50x0&quality=96&crop=119,328,490,490&ava=1",
        message: action.text,
        likecount: 12,
        post_img: action.post_img,
        time: "22"
      };

      return {
        ...state,
        PostData: [...state.PostData, newPost],
      };
    }

    // case UPDATE_NEW_POST_TEXT: {

    //     return {
    //         ...state,
    //         NewPostText: action.text
    //     }
    // }

    case DELETE_POST: {
      return {
        ...state,
        postData: state.postData.filter((p) => p.id !== action.postId),
      };
    }

    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profileData,
      };
    }

    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }

    case SET_PHOTO_SUCCESS: {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };
    }

    default:
      return state;
  }
};

export const addPostActionCreator = (text, post_img) => ({
  type: ADD_POST,
  text,
  post_img,
});

// export const updateNewPostTextActionCreator = (textPost) => ({
//     type: UPDATE_NEW_POST_TEXT,
//     textPost
// })

export const setUserProfile = (profileData) => ({
  type: SET_USER_PROFILE,
  profileData,
});

export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});

export const deletePost = (postId) => ({
  type: DELETE_POST,
  postId,
});
export const setPhotoSuccess = (photos) => ({
  type: SET_PHOTO_SUCCESS,
  photos,
});

export const getUserProfile = (id) => async (dispatch) => {
  // тут начинаеться функция thunk
  let response = await profileAPI.getProfile(id);
  dispatch(setUserProfile(response.data));
};

export const savePhoto = (file) => async (dispatch) => {
  // тут начинаеться функция thunk

  let response = await profileAPI.savePhoto(file);

  if (!response.data.resultCode) {
    dispatch(setPhotoSuccess(response.data.data.photos));
  }
};

export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
  try {
    let response = await profileAPI.updateStatus(status);
    if (!response.data.resultCode) {
      dispatch(setStatus(status));
    }
  } catch (error) {
    // обработчик ошиби выводит алерт
    alert(error.response.message);
  }
};

export default profileReducer;
