import logo from '../../assets/logo.svg'
import { HeaderContainer, HeaderContent } from './styles'

export function Header(){
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="dt money" />
        <button type="button">
          Nova transação
        </button>
      </HeaderContent>
    </HeaderContainer>
  )
}