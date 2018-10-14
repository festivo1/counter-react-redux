import {INCREMENT, DECREMENT } from "./actionsTypes";
export const incrementCounter=()=>({
 type:INCREMENT,
});

export const decrementCounter=()=>({
    type:DECREMENT,
})