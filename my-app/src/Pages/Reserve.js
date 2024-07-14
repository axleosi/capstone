import {useReducer} from "react"
import ReserveForm from "../Components/ReserveForm"
import {fetchAPI} from "../api"


function initializeTimes(){
    const date=new Date()
    return fetchAPI(date)
}
function updateTimes(availableTimes, action){
    switch(action.type){
        case 'UPDATE_TIMES': return fetchAPI(action.payload)
        default: return availableTimes
    }
}
export default function Reserve(){
    const [availableTimes, dispatch]=useReducer(updateTimes,[], initializeTimes)
    
    return(
        <>
        <ReserveForm availableTimes={availableTimes} dispatch={dispatch}/>
        </>
    )
}