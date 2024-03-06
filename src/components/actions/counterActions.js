import * as actionTypes from actionTypes;

export function incCounter(){

    return {
        type: actionTypes.INCREMENT_COUNTER,
        
    }
}
export function decCounter(){
    return {
        type: actionTypes.DECREMENT_COUNTER,
        
    }
}