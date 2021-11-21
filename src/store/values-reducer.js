// import { CHANGEA, CHANGEB, CHANGEN, CHANGEIE } from "./actionTypes/actionTypes"
// const initialState ={
//     a: 0,
//     b: 2,
//     N: 100,
//     aValid: true,
//     bValid: true,
//     NValid: true,
//     integralExpresion: "x*x"
// }

// export const valuesReducer = (state = initialState, action) => {
//     switch(action.type){
//         case CHANGEA:{
//             return {...state, a: state.a = action.payload}
//         }           
//         case CHANGEB:{
//             return {...state, b: state.b = action.payload}
//         }           
//         case CHANGEN:{
//             return {...state, N: state.N = action.payload}
//         }            
//         case CHANGEIE:{
//             return {...state, integralExpresion: state.integralExpresion = action.payload}
//         }
//         default:
//             return state;
//     }
// }