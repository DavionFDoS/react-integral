import {CALC, DELALL,DEL} from './actionTypes/actionTypes'

const initialState =
{
  answerList:[],
}

export const answerListReducer = (state1=initialState, action) => {
  switch (action.type) {
    case CALC:
        return {
            ...state1,
            answerList: action.payload.slice()
          }
    case DELALL:
      const answerListNew=[];
      return {
        ...state1,
        answerList:answerListNew      
      }
    case DEL:
      let answerList1 = state1.answerList;
      answerList1.splice(action.payload,1)
      return {
        ...state1,
        answerList:answerList1.slice()
      }
    default:
      return state1
  }   
}