import Form from "../../components/Form/Form"

const LoginPage = () => {
  return(
    <Form>
      <h1 className="login__title">로그인</h1>
      <Form.Text placeholder="아이디" type="text" value=""></Form.Text>
    </Form>
  )
}

export default LoginPage