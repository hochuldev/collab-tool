import React, { useState } from "react"
import Button from "../../components/Button/Button"
import { Link } from "react-router-dom"
import "./LoginPage.css"

const LoginPage = () => {
  const [autoLogin, setAutoLogin] = useState(false)
  const toggleAutoLogin = (e:React.MouseEvent) => {
    autoLogin ? setAutoLogin(false) : setAutoLogin(true)
  }
  return(
    <div className="login">
      <h1 className="login__title">로그인</h1>
      <input className="login__input login__input_id" type="text" placeholder="아이디"></input>
      <input className="login__input login__input_password" type="password" placeholder="비밀번호"></input>
      <Link to="find-password" className="login__button login__button_find-password">비밀번호 찾기</Link>
      <Button className="login__button login__button_login" width="100%">로그인</Button>
      <Link to="signup" className="login__button login__button_register"><div className="login__register-text">회원가입</div></Link>
      <Button width="fit-content" onClick={toggleAutoLogin}>
        <div className={"login__icon_auto-login " + (autoLogin ? "login__icon_auto-login_true" : "login__icon_auto-login_false")}>
          <div className={"login__icon_check " + (autoLogin ? "login__icon_check_true" : "login__icon_check_false")}></div>
        </div>
        자동 로그인</Button>
      <div className="login__separator">
        <div className="login__separator-text">또는</div>
      </div>
      <Button className="login__button login__button_google-login" width="100%">Google 계정으로 로그인</Button>
    </div>
  )
}

export default LoginPage
