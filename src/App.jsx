
import { useState } from 'react'
import './App.css'
import logo from '../src/image/logo.png'

function App() {
  const [inputs,setInputs] = useState({
    firstname:"",
    lastname:"",
    address:"",
    phon:"",
    email:"",
    gender:"",
    dob:"",
    course:"",
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({...inputs,[name]:value
    })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const { firstname, lastname, address, phon, email, gender, dob, course } = inputs;
    const output = `First Name: ${firstname}\nLast Name: ${lastname}\nAddress: ${address}\nPhone: ${phon}\nEmail: ${email}\nGender: ${gender}\nDOB: ${dob}\nCourse: ${course}`;
    alert(output);
    console.log(output);
  }
  
  const handleReset = () => {
    setInputs({
      firstname:"",
      lastname:"",
      address:"",
      phon:"",
      email:"",
      gender:"",
      dob:"",
      course:"",
  });
  };

  return (
    <>
      <div className='main'>
      <img style={{width:'160px',paddingTop:'30px',paddingLeft:'20px'}} src={logo} alt="" />
        <h1>Student Registration Form</h1>
        <form onSubmit={handleSubmit}>
        <div className='name'>
            <input type="text" name='firstname' value={inputs.firstname} onChange={handleChange} placeholder='First name' className='form-control' required  />
            <input type="text" name='lastname' value={inputs.lastname} onChange={handleChange} placeholder='Last name' className='form-control' required />
        </div>
        <div>
          <input type="text" name='address' value={inputs.address} onChange={handleChange} placeholder='address' className='form-control' required />
          <input type="tel" name='phon' value={inputs.phon} onChange={handleChange} placeholder='phon number' className='form-control mt-2' required />
          <input type="email" name='email' value={inputs.email} onChange={handleChange} placeholder='E-mail' className='form-control mt-2' required />
        </div>
        <div className="gender">
          <select id="gender" name="gender" value={inputs.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <div className="DOB">
          <label>Date Of Birth</label>
          <input type="date" id="dob" name="dob" value={inputs.dob} onChange={handleChange}  required/>
        </div>
        </div>
        <div className="course mb-5">
          <select id="course" name="course" value={inputs.course} onChange={handleChange} required>
            <option value="">Select Course</option>
            <option value="biology">Biology</option>
            <option value="computer-science">Computer Science</option>
            <option value="commerce">Commerce</option>
            <option value="humanities">Humanities</option>
          </select>
          <div className='bton'>
          <button className='btn' type='submit'>Submit</button>
          <button className='btn' onClick={handleReset}>Cancel</button>
        </div>
        </div>
        
        </form> 
      </div>
    </>
  )
}

export default App
