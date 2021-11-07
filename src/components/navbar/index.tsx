import React from 'react'
import {
  NavBarContainer,
  NavBarLogo,
  NavBarButtonsContainer,
  NavList,
  NavItem,
  Link
} from './styled'

const NavBar: React.FC = () => {
  return (
    <NavBarContainer>
      <NavBarLogo>Kraken</NavBarLogo>
      <NavBarButtonsContainer>
        <NavList>
          <NavItem>
            <Link to={'motivation'} activeClass="active" smooth={true}>
              Motivação
            </Link>
          </NavItem>
          <NavItem>
            <Link to={'help'} activeClass="active" smooth={true}>
              Como Fazer
            </Link>
          </NavItem>
          <NavItem>
            <Link to={'donate'} activeClass="active" smooth={true}>
              Contribua
            </Link>
          </NavItem>
        </NavList>
      </NavBarButtonsContainer>
    </NavBarContainer>
  )
}

export default NavBar
