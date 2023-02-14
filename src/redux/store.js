import { renderEntireTree } from "..";
import dialogsReducer from "./Dialogs_reducer";
import profileReducer from "./Profile_reducer";
import SideBarReducer from "./SideBar_reducer";




let store = {

    _state: {
        ProfilePage: {
            PostData: [
                { id: 1, message: 'how are you', likecount: 4, dislikecount: 5 },
                { id: 2, message: "its my new post", likecount: 14, dislikecount: 15 }],
            NewPostText: 'text dda da ja'
        },

        DialogsPage: {
            DialogsData: [
                { name: 'Vitalia', id: 1 },
                { name: 'vIKA', id: 2 },
                { name: 'Vita', id: 3 }
            ],
            MessagesData: [
                { message: 'hi how are', id: 1 },
                { message: 'hoooo', id: 2 },
                { message: 'how are', id: 3 },
            ],
            NewMessageText: 'text message opravdu',
            
        },
        SideBar: {
            Bestfriends: [
                { name: 'Vitalia', avatarka: 'https://avatars.mds.yandex.net/get-pdb/2797034/89b15653-ddf3-4834-ad8a-74a9a8105256/s1200?webp=false', status: 'online', id: 1 },
                { name: 'Valeriya', avatarka: 'https://www.rb.ua/media/celebs/ray-ban-rb3025-019-9j-h7.jpg', status: 'ofline', id: 2 },
                { name: 'Vita', avatarka: 'https://www.nastol.com.ua/pic/201706/1920x1200/nastol.com.ua-232656.jpg', status: 'ofline', id: 3 }
            ]
        }
    },

    _callSubscriber() { }, // = renderEntireTree

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
        // observer = renderEntireTree
    },

    dispatch(action) {

        this._state.ProfilePage = profileReducer(this._state.ProfilePage, action);
        this._state.DialogsPage = dialogsReducer(this._state.DialogsPage, action);
        this._state.SideBar = SideBarReducer(this._state.SideBar, action);
        this._callSubscriber(this);

    }
}




window.store = store;
export default store;