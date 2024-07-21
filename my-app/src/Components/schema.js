import React from 'react'
import * as yup from 'yup';

export const schema = yup.object({
    date: yup.date().required("Please pick a date"),
    time: yup.string().required("please pick a time"),
    guests: yup.number().positive().integer().min(1).max(10).required("please choose the number of guests"),
    occasion: yup.string().required("please pick an occasion").oneOf(['Birthday','Anniversary','Work Meeting', 'Dinner']),
})