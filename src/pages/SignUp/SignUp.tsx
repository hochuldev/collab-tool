import React, { useState, useEffect } from "react"
import axios from "axios"
import Button from "../../components/Button/Button"
import "../LoginPage/LoginPage.css"

const SignUp = () => {
  const [autoLogin, setAutoLogin] = useState(false)
  const [autoLogin2, setAutoLogin2] = useState(false)
  const toggleAutoLogin = (e:React.MouseEvent) => {
    autoLogin ? setAutoLogin(false) : setAutoLogin(true)
  }
  const toggleAutoLogin2 = (e:React.MouseEvent) => {
    autoLogin2 ? setAutoLogin2(false) : setAutoLogin2(true)
  }

  useEffect( () => {
    const url = "myflow.ml/dj-rest-auth/registration/"
    axios.post(url, {
      username: "test1234",
      email: "blahblah@gmail.com",
      password1: "test12345!",
      password2: "test12345!",
    })
  },[])
  return(
    <div className="login">
      <h1 className="login__title">새 계정 만들기</h1>
      <input className="login__input login__input_id" type="text" placeholder="이메일"></input>
      <input className="login__input login__input_email" type="text" placeholder="이름"></input>
      <input className="login__input login__input_password" type="password" placeholder="비밀번호"></input>
      <input className="login__input login__input_password" type="password" placeholder="비밀번호 확인"></input>
      <Button className="login__button login__button_auto-login" width="fit-content" onClick={toggleAutoLogin}>
        <div className={"login__icon_auto-login " + (autoLogin ? "login__icon_auto-login_true" : "login__icon_auto-login_false")}>
          <div className={"login__icon_check " + (autoLogin ? "login__icon_check_true" : "login__icon_check_false")}></div>
        </div>
        (필수) 서비스 이용약관, 개인정보처리방침을 확인하였고, 이에 동의합니다</Button>
      <Button className="login__button login__button_auto-login" width="fit-content" onClick={toggleAutoLogin2}>
        <div className={"login__icon_auto-login " + (autoLogin2 ? "login__icon_auto-login_true" : "login__icon_auto-login_false")}>
          <div className={"login__icon_check " + (autoLogin2 ? "login__icon_check_true" : "login__icon_check_false")}></div>
        </div>
      (선택) 워크플로우 혜택 알림 수신에 동의합니다.</Button>
      <Button className="login__button login__button_login" width="100%">회원가입</Button>
    </div>
  )
}

export default SignUp