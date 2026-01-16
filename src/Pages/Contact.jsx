import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div className='form-section'>
        <form action="https://formsubmit.co/akshatm466@gmail.com" method='POST'>
             <h1>Contact/Feedback</h1>
            <input type="text" placeholder='Enter your Name' />
            <input type="email" placeholder='Enter your Email' />
            <input type="number" placeholder='Enter your Mobile Number' />
            <textarea name="Text" id="" cols={10} rows={8} placeholder='Text'></textarea>
            <button>Submit</button>
        </form>
           
    </div>
  )
}

export default Contact