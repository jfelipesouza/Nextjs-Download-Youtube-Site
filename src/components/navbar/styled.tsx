import styled from 'styled-components'
import { Link as LinkScroll } from 'react-scroll'

export const NavBarContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 1.5rem;
  height: 55px;
`

export const NavBarLogo = styled.div`
  color: ${props => props.theme.colors.primary};
  font-weight: 700;
  font-size: 3rem;
  cursor: pointer;
`

export const NavBarButtonsContainer = styled.div`
  display: flex;
  height: auto;
`
export const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NavItem = styled.li`
  margin: 0 1rem;
  background-color: ${props => props.theme.colors.button};
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  transition: background-color 0.4s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.colors.primary};
  }
`

export const Link = styled(LinkScroll)`
  color: ${props => props.theme.colors.white};
  font-size: 1rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.colors.black};
    font-size: 1.1rem;
  }
`
