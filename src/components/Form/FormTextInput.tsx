import './FormTextInput.css'

interface FormTextProps {
  placeholder: string
  type: "text" | "password"
  onChange: React.ChangeEventHandler
}

const FormTextInput = ({placeholder, type, onChange}: FormTextProps) => {
  return(
    <input className="form__text" type={type} placeholder={placeholder} onChange={onChange}></input>
  )
}

export default FormTextInput