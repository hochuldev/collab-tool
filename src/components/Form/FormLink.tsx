import {Link} from 'react-router-dom'

interface FormLinkProps {
  to: string
  value: string
}

const FormLink = ({to, value}: FormLinkProps) => {
  <Link to={to} className="form__link">{value}</Link>
}

export default FormLink