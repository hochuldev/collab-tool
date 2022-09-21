import './FormText.css'

interface FormTextProps {
  placeholder: string
  type: "text" | "password"
  value: string
}

const FormText = ({placeholder, type, value}: FormTextProps) => {
  return(
    <input className="form__text" type={type} placeholder={placeholder} value={value}></input>
  )
}

export default FormText