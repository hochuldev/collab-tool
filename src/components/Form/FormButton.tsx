import { ReactChildrenProp } from '../../typeDeclaration'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import './FormButton.css'

interface FormButtonProps extends ReactChildrenProp {
  onClick?: React.MouseEventHandler
  to?: string
  id?: string
}

const FormButton = ({ onClick, to, id, children }: FormButtonProps) => {
  if (to === undefined) {
    if (onClick === undefined)
      throw new Error(
        'to props를 전달하지 않으면, onClick props를 전달하여, 클릭 이벤트를 처리해야 합니다.'
      )
    return (
      <Button id={id} className="form__button" width="100%" onClick={onClick}>
        {children}
      </Button>
    )
  } else {
    return (
      <Link
        id={id}
        to={to}
        className="form__button form__button_is-link"
        onClick={onClick}
      >
        <div>{children}</div>
      </Link>
    )
  }
}

export default FormButton
