import React from 'react';

const Days = ({day, setDay}) => {
    return (
        <ul className='days'>
            <li className={`days__option ${day === 'Monday' ? 'clicked': ''}`} onClick={()=>setDay('Monday')}><strong>Mon</strong></li>
            <li className={`days__option ${day === 'Tusday' ? 'clicked': ''}`} onClick={()=>setDay('Tusday')}><strong>Tus</strong></li>
            <li className={`days__option ${day === 'Wednsday' ? 'clicked': ''}`} onClick={()=>setDay('Wednsday')}><strong>Wed</strong></li>
            <li className={`days__option ${day === 'Thursday' ? 'clicked': ''}`} onClick={()=>setDay('Thursday')}><strong>Thu</strong></li>
            <li className={`days__option ${day === 'Friday' ? 'clicked': ''}`} onClick={()=>setDay('Friday')}><strong>Fri</strong></li>
            <li className={`days__option ${day === 'Saturday' ? 'clicked': ''}`} onClick={()=>setDay('Saturday')}><strong>Sat</strong></li>
            <li className={`days__option ${day === 'Sunday' ? 'clicked': ''}`} onClick={()=>setDay('Sunday')}><strong>Sun</strong></li>
        </ul>
    )
}

export default Days
