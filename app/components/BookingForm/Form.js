import React from 'react'

// import Form 1
import Form1 from './Form1'

function Form() {
  let form = 0

  form = (
    <Form1>
      <input placeholder="Name" type="text" />
      <input placeholder="Address" type="text" />
      <input placeholder="Cellphone" type="number" />
      <input placeholder="Homephone" type="number" />
      <input placeholder="E-mail" type="email" />
      <input placeholder="Emergency Contact Name" type="text" />
      <input placeholder="Emergency Contact #" type="number" />
    </Form1>
  )

  return <div>{form}</div>
}

export default Form
