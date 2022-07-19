// console.log("You think I am an old dog, I will show them just how many tricks I know.")

import store from "./store";
import { bugAdded, bugRemoved, bugResolved } from "./actions";

//state = reducer(state,action);

// const unsubscribe =  store.subscribe( () => {
//     console.log("Store Changed!", store.getState());
// })

store.dispatch(bugAdded("Bug 1"));

// unsubscribe();

// store.dispatch(bugRemoved(1));
store.dispatch(bugResolved(1));


console.log(store.getState());