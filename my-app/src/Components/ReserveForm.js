import React, { useState } from 'react';

export default function ReserveForm({availableTimes, dispatch}) {
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        guests: '1',
        occasion: '',
    });


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        dispatch({type:'UPDATE_TIMES', payload:formData.date})
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData); // For debugging, you can log formData when the form is submitted
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='res-date'>Choose Date</label>
                <input type='date' id='res-date' name='date' value={formData.date} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor='res-time'>Choose Time</label>
                <select id='res-time' name='time' value={formData.time} onChange={handleChange}>
                    <option value=''>Select a time</option>
                    {availableTimes.map((time) => (
                        <option key={time} value={time}>
                            {time}
                        </option>
                    ))}
                </select>
                <p>Selected time: {formData.time}</p>
            </div>
            <div>
                <label htmlFor='guests'>Number of guests</label>
                <input type='number' id='guests' name='guests' min='1' max='10' placeholder='1' value={formData.guests} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor='occasion'>Occasion</label>
                <select id='occasion' name='occasion' value={formData.occasion} onChange={handleChange}>
                    <option value='Birthday'>Birthday</option>
                    <option value='Anniversary'>Anniversary</option>
                    <option value='Work Meeting'>Work Meeting</option>
                    <option value='Dinner'>Dinner</option>
                </select>
            </div>
            <div>
                <input type='submit' value='Make your reservation' />
            </div>
        </form>
    );
}
