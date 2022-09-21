import { ReactChildrenProp } from "../../typeDeclaration"
import FormButton from "./FormButton"
import FormCheckBox from "./FormCheckBox"
import FormLink from "./FormLink"
import FormText from "./FormText"

const Form = ({children}: ReactChildrenProp) => {
  return(
    <div>
      {children}
    </div>
  )
}

const toBeExported = Object.assign(Form,{
  Button: FormButton,
  CheckBox: FormCheckBox,
  Link: FormLink,
  Text: FormText
})

export default toBeExported