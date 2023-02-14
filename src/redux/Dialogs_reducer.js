
import Iconb from '../assets/images/icons small/Iconb.svg';
import Iconc from '../assets/images/icons small/Iconc.svg';
import Icond from '../assets/images/icons small/Icond.svg';
import Icone from '../assets/images/icons small/Icone.svg';
import Iconf from '../assets/images/icons small/Iconf.svg';
import Icong from '../assets/images/icons small/Icong.svg';


let Icona = 'C:\Users\da\Desktop\file from notebook\my-app\moz-todo-react\src\assets\images\icons small\Icona.svg'


const ADD_MESSAGE = 'ADD-MESSAGE';


let initialState = {
    DialogsData: [
        { id: 1, name: 'Maisy Humphrey', avatar: { Icona }, isOnline: true },
        { id: 2, name: 'Martha Craig', avatar: { Iconb }, isOnline: true },
        { id: 3, name: 'Jamie Franco', avatar: { Iconc }, isOnline: false },
        { id: 4, name: 'Karen Castillo', avatar: { Icond }, isOnline: true },
        { id: 5, name: 'Kieron Dotson', avatar: { Icone }, isOnline: false },
        { id: 6, name: 'Zack John', avatar: { Iconf }, isOnline: true },
        { id: 7, name: 'Martin Randolph', avatar: { Icong }, isOnline: false },
    ],
    MessagesData: [
        { message: 'hi, how are you?', id: 1, time: "11:40" },
       
        { message: 'I am good, do you know what time is it?', id: 2, time: "11:42", isNotMine: true },
        { message: 'It’s morning in Tokyo 😎', id: 3, time: "11:45" },
        { message: 'What is the most popular meal in Japan?', id: 4, time: "11:46", isNotMine: true },
        { message: 'Do you like it?', id: 5, time: "11:46", isNotMine: true },
        { message: 'I think it is sushi', id: 6, time: "11:50" },
        { message: 'It is sounds good', id: 7, time: "11:52", isNotMine: true },
        { message: 'When you come back?', id: 8, time: "11:52", isNotMine: true },
    ],

}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {

            let newMessage = {
                id: 4,
                message: action.newMessageBody,
            }
            return {
                ...state,
                MessagesData: [...state.MessagesData, newMessage],
            }
        }


        default:
            return state;
    }
}

export const addMessageActionCreator = (newMessageBody) => ({

    type: ADD_MESSAGE,
    newMessageBody
})


export default dialogsReducer;