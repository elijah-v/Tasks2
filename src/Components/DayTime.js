import React from 'react'

const DayTime = () => {
    const { DateTime } = require("luxon");
    let date = DateTime.local();
    return (
        <div className='dayTime'>
            <p>{date.weekdayLong}</p>
            <p>{date.monthShort} {date.month}</p> 
            <p>{date.year}</p>
            <p>{date.hour}:{date.minute}</p>
        </div>
    )
}

export default DayTime
