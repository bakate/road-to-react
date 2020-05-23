import { useState } from 'react'

const useForm = (initial = {}) => {
  const [inputs, setInputs] = useState(initial)

  const handleChange = e => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    })
  }
  const handleShowPassword = () => {
    setInputs({ ...inputs, showPassword: !inputs.showPassword })
  }
  const resetForm = () => {
    return setInputs(initial)
  }
  return { handleChange, resetForm, inputs, handleShowPassword }
}

export default useForm
