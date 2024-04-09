import './style.css'
import Logo from '../Logo'
import OpcoesHeader from '../OpcoesHeader/index'
import IconesHeader from '../IconesHeader/index'


function Header () {
  return (
    <header className='App-header'>
        <Logo></Logo>
        <OpcoesHeader></OpcoesHeader>
        <IconesHeader></IconesHeader>
  </header>
  )
}

export default Header