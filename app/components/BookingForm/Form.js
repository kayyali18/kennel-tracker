import React from 'react'

function Form() {
  let form = 0

  form = (
    <form>
      <input placeholder="Name" type="text" />
      <input placeholder="Address" type="text" />
      <input placeholder="Cellphone" type="number" />
      <input placeholder="Homephone" type="number" />
      <input placeholder="E-mail" type="email" />
      <input placeholder="Emergency Contact Name" type="text" />
      <input placeholder="Emergency Contact #" type="number" />
    </form>
  )

  return <div>{form}</div>
}

export default Form
