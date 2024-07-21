import React from 'react';
import {useFormik} from 'formik'
import { schema } from './schema';

const initialValues={
    date: '',
    time: '',
    guests: '1',
    occasion: '',
}

export default function ReserveForm({availableTimes, dispatch, submitForm}) {
    const {values, handleBlur,touched,errors, handleChange, handleSubmit, setFieldValue, validateForm, isSubmitting}=useFormik({
        initialValues:initialValues,
        validationSchema:schema,
        onSubmit:async (values, actions)=>{
            await validateForm()
            console.log(values);
            submitForm(values);
            actions.resetForm()
        }
    })

    function customHandleChange(e){
        const {name, value}=e.target;
        setFieldValue(name,value);
        if (name === 'date') {
            dispatch({ type: 'UPDATE_TIMES', payload: value });
    }}

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='res-date'>Choose Date</label>
                <input type='date' id='res-date' name='date' onBlur={handleBlur} value={values.date} onChange={customHandleChange} />
                {errors.date && touched.date && <p>errors.date</p>}
            </div>
            <div>
                <label htmlFor='res-time'>Choose Time</label>
                <select id='res-time' name='time' onBlur={handleBlur} value={values.time} onChange={(e)=>handleChange(e)}>
                    <option value=''>Select a time</option>
                    {availableTimes.map((time) => (
                        <option key={time} value={time}>
                            {time}
                        </option>
                    ))}
                </select>
                <p>Selected time: {values.time}</p>
            </div>
            <div>
                <label htmlFor='guests'>Number of guests</label>
                <input type='number' id='guests' name='guests' min='1' max='10' placeholder='1' onBlur={handleBlur} value={values.guests} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor='occasion'>Occasion</label>
                <select id='occasion' name='occasion' onBlur={handleBlur} value={values.occasion} onChange={handleChange}>
                    <option value='Birthday'>Birthday</option>
                    <option value='Anniversary'>Anniversary</option>
                    <option value='Work Meeting'>Work Meeting</option>
                    <option value='Dinner'>Dinner</option>
                </select>
            </div>
            <div>
                <button type='submit' disabled={isSubmitting}>Make your reservation</button>
            </div>
        </form>
    );
}