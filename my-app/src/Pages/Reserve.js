import {useReducer} from "react"
import ReserveForm from "../Components/ReserveForm"
import { fetchAPI, submitAPI } from "../Components/Api"
import { useNavigate } from "react-router-dom"


export function initializeTimes(){
    const today=new Date()
    return fetchAPI(today)
}

export function updateTimes(availableTimes, action){
    switch(action.type){
        case 'UPDATE_TIMES': let dayOfTheMonth=new Date(action.payload)
        return fetchAPI(dayOfTheMonth)
        default: return availableTimes
    }
}

export default function Reserve(){
    const [availableTimes, dispatch]=useReducer(updateTimes,[], initializeTimes)
    const nav= useNavigate()
    function submitForm(formData){
        const dataSubmit=submitAPI(formData)
        if(dataSubmit){
            nav('/comfirmbooking')
        }else{console.log('submission failed')}
    }
    return(
        <>
        <ReserveForm   availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>
        </>
    )
}