import React, { useState } from 'react'
import './Form.css'
import TableUi from './TableUi'

const Form = () => {
  const [inputs, setInputs] = useState({});
  const [click, setClick] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs({ ...inputs, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setClick(true);
    console.log(inputs);
    alert(`Registration Successfully: ${inputs.name}`);
  }
  console.log('Name:', inputs.name)
  console.log('Age:', inputs.age)
  console.log('E-mail:', inputs.email)
  console.log('Username:', inputs.userName)
  console.log('Password:', inputs.passWord)
  console.log('Re-password:', inputs.rpswd)

  return (
    <>

      <div className="regi">
        <h1>Student's Registration Form</h1>

        <form>
          <label className='cname'>Enter your Name:
            <input
              type="text"
              name="name"
              value={inputs.name || ""}
              placeholder="Name"
              onChange={handleChange}
            />
          </label>
          <label className='cname'>Age:
            <input
              type="number"
              name="age"
              value={inputs.age || ""}
              placeholder="Age"
              onChange={handleChange}
            />
          </label>
          <label className='cname'>User Name:
            <input
              type="text"
              name="userName"
              value={inputs.userName || ""}
              placeholder="User Name"
              onChange={handleChange}
            />
          </label>
          <label className='cname'>E-mail:
            <input
              type="email"
              name="email"
              value={inputs.email || ""}
              placeholder="E-mail"
              onChange={handleChange}
            />
          </label>
          <label className='cname'>Password:
            <input
              type="password"
              name="passWord"
              value={inputs.passWord || ""}
              placeholder="Password"
              onChange={handleChange}
            />
          </label>
          <label className='cname'>Re-Password:
            <input
              type="password"
              name="rpswd"
              value={inputs.rpswd || ""}
              placeholder="Re-Password"
              onChange={handleChange}
            />
          </label>

          <button onClick={handleSubmit}>REGISTER</button>

        </form>
      </div>

      <TableUi data={inputs} ndata={click} />

    </>
  )
}

export default Form
