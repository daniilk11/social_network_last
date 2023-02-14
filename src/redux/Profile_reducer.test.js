import profileReducer, { addPostActionCreator } from "./Profile_reducer";
import ReactDom from 'react-dom';
import React from 'react'




let state = {
    PostData: [
        { id: 1, message: 'how are you', likecount: 4, dislikecount: 5 },
        { id: 2, message: "its my new post", likecount: 14, dislikecount: 15 }],
};


it('length of post should be incremented', () => {
    //1 test data
    let action = addPostActionCreator('test')

    //2 action 
    let newState = profileReducer(state, action)

    //3 expectation
    expect(newState.PostData.length).toBe(3)
}
)

