import {screen, render} from  '@testing-library/react'
import '@testing-library/jest-dom'
import ReserveForm from './ReserveForm'
import Reserve  from '../Pages/Reserve'
import { initializeTimes, updateTimes } from '../Pages/Reserve'
import { fetchAPI } from './Api'

jest.mock('./Api', ()=>({
    fetchAPI: jest.fn()
}))
test('checks if a text is available', ()=>{
    const dispatch=jest.fn()
    const submitForm= jest.fn()
    const availableTimes=[]
    render(<ReserveForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>)
    const inputEl=screen.getByText('Work Meeting')
    expect(inputEl).toBeInTheDocument();
})
test('checks if updateTimes works', ()=>{
  const mockDate=new Date(2023,6,17)
  const mockTimes=["12:00","13:00","14:00"]
  fetchAPI.mockReturnValue(mockTimes)
  const dispatch=jest.fn()
  const result=updateTimes(mockDate, dispatch)
  expect(dispatch).toHaveBeenCalledWith({type:'UPDATE_TIMES', payload:mockTimes})
  expect(fetchAPI).toHaveBeenCalledWith(mockDate)
})
test('checks if initializeTimes works', ()=>{
    const mockTimes = ["17:00", "18:00"];
    fetchAPI.mockReturnValue(mockTimes)
    const result=initializeTimes()
    expect(result).toEqual(mockTimes)
    
})