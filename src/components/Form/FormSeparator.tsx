import { ReactChildrenProp } from "../../typeDeclaration"
import "./FormSeparator.css"

const FormSeparator = ({children}: ReactChildrenProp) => {
  return(
    <div className="form__separator">
          <div className="form__separator-text">또는</div>
    </div>
  )
}

export default FormSeparator