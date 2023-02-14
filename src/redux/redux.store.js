import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import authReducer from "./Auth_reducer";
import dialogsReducer from "./Dialogs_reducer";
import profileReducer from "./Profile_reducer";
import SideBarReducer from "./SideBar_reducer";
import UsersReducer from "./Users_reducer";
import thunkMiddleware from "redux-thunk"; // middle layer который мы внедряем из библиотеки 
import { reducer as formReducer } from "redux-form";
import appReducer from "./app_reducer";



let reducers = combineReducers({
    profilePage: profileReducer,
    DialogsPage: dialogsReducer,
    SideBar: SideBarReducer,
    usersPage: UsersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,

});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddleware)
    ));

window.__store__ = store;
export default store;