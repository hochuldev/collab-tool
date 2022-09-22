import { ReactChildrenProp } from "../../typeDeclaration"
import FormButton from "./FormButton"
import FormCheckBox from "./FormCheckBox"
import FormLink from "./FormLink"
import FormTextInput from "./FormTextInput"
import FormSeparator from "./FormSeparator"
import "./Form.css"

interface FormInterface extends ReactChildrenProp{
  className?: string
}

const Form = ({className, children}: FormInterface) => {
  return(
    <div className={className || "form"}>
      {children}
    </div>
  )
}

const toBeExported = Object.assign(Form,{
  Button: FormButton,
  CheckBox: FormCheckBox,
  Link: FormLink,
  TextInput: FormTextInput,
  Separator: FormSeparator
})

export default toBeExported