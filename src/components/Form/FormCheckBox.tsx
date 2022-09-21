import Button from "../Button/Button"

interface FormCheckBoxProps {
  onClick: React.MouseEventHandler
  checked: boolean
  value: string
}

const FormCheckBox = ({onClick, checked, value}: FormCheckBoxProps) => {
  
  return(
    <Button width="fit-content" onClick={onClick}>
    <div className={"form__checkbox" + (checked ? "form__checkbox_checked_true" : "form__checkbox_checked_false")}>
      <div className={"form__check-icon " + (checked ? "form__check-icon__checked_true" : "form__check-icon__checked_false")}></div>
    </div>
    {value}</Button>
  )
}

export default FormCheckBox
/*

<Button className="login__button login__button_auto-login" width="fit-content" onClick={toggleAutoLogin}>
<div className={"login__icon_auto-login " + (autoLogin ? "login__icon_auto-login_true" : "login__icon_auto-login_false")}>
  <div className={"login__icon_check " + (autoLogin ? "login__icon_check_true" : "login__icon_check_false")}></div>
</div>
자동 로그인</Button>

*/