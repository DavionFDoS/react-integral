import {CALC, DEL, DELALL} from './actionTypes'

// export function changeA(value)
// {
//     return{
//         type:CHANGEA,
//         payload:value
//     }
// }

// export function changeB(value)
// {
//     return{
//         type:CHANGEB,
//         payload:value
//     }
// }

// export function changeN(value)
// {
//     return{
//         type:CHANGEN,
//         payload:value
//     }
// }

// export function changeIE(value)
// {
//     return{
//         type:CHANGEIE,
//         payload:value
//     }
// }

export function Calculate(curList){
    return{
      type:CALC,
      payload:curList
    }
}
  export function DeleteAll(){
      return{
          type:DELALL
    }
}
  export function Delete(index){
    return{
        type:DEL,
        payload:index
    }
}