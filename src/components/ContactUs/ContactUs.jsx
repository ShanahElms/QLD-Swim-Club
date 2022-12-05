import React, {useState} from 'react';
import "./ContactUs.css";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.id] : e.target.value
        }))
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(formData);
    }

  return (
    <div className='contactus section-p'>
        <div className='container'>
            <div className='contactus-section'>
                <div className='section-title'>
                    <h3 className='text-celadon-blue'>Contact<span className='text-night-rider'>Us</span></h3>
                    <p className='text'>Interested in joining our club? Get in touch!</p>
                </div>
            </div>
            
            <form className='contactus-form mx-auto' onSubmit={handleSubmit}>
                <div className='form-elem'>
                    <input type = "text" value = {formData.name} className = "form-control" placeholder='Name' onChange={handleChange} id = "name" />
                </div>
                <div className='form-elem'>
                    <input type= "text" value= {formData.email} className= "form-control" placeholder= "Email" onChange= {handleChange} id= "email" />
                </div>
                <div className='form-elem'>
                    <textarea rows="2" value= {formData.message} className= "form-control" placeholder= "Message" onChange= {handleChange} id= "message"></textarea>
                </div>
                <button type='submit' className='bg-celadon-blue text-white submit-btn fw-3 fs-22'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default ContactUs