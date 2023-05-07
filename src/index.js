import store from "./store.js";
import * as actions from "./actiontype.js";
import {bugAdded, bugResolved} from "./action";

console.log(store);

const unsubscribe= store.subscribe(()=>{
    console.log("Store changed!", store.getState());
});

//action content:-

// store.dispatch({
//     type: actions.BUG_ADDED,
//     payload:{
//         description:"Bug1"
//     }
// });

store.dispatch(bugAdded("Bug1"));


// console.log(store.getState());

// unsubscribe();


store.dispatch(bugResolved(1));


store.dispatch({
    type: actions.BUG_REMOVED,
    payload:{
        id:1
    }
})