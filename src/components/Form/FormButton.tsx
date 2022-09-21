import Button from "../Button/Button"
import './FormButton.css'

interface FormButtonProps {
  value: string
}

const FormButton = ({value}: FormButtonProps) => {
  <Button className="login__button" width="100%">{value}</Button>
}

export default FormButton