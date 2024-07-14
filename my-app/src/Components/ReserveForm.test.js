import {screen, render, FireEvent} from  '@testing-library/react'
import '@testing-library/jest-dom'
import ReserveForm from './ReserveForm'
import Reserve  from '../Pages/Reserve'
import { updateTimes } from '../Pages/Reserve'

test('checks if a text is available', ()=>{
    const dispatch=jest.fn()
    const availableTimes=[]
    render(<ReserveForm availableTimes={availableTimes} dispatch={dispatch}/>)
    const inputEl=screen.getByText('Work Meeting')
    expect(inputEl).toBeInTheDocument();
})
test('checks if updateTimes works', ()=>{
    const availableTimes=["17:00","18:00","19:00", "20:00", "21:00","22:00"]
    const ini=["17:00","18:00"]
    render(<Reserve/>)
    const results=updateTimes(availableTimes,{ type: 'UPDATE_TIMES', payload: ini })
    expect(results).toEqual(ini);
})