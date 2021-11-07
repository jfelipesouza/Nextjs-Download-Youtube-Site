import styled from 'styled-components'
import { AiOutlineDownload } from 'react-icons/ai'

export const Container = styled.section`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const ImageContainer = styled.div`
  position: relative;
  max-width: 200px;
  width: 80%;
`
export const SearchZone = styled.div`
  margin-top: 1.5rem;
  position: relative;
  max-width: 600px;
  width: 90vw;
`
export const Title = styled.p`
  width: 100%;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.125rem;
  font-weight: 400;
`
export const Input = styled.input`
  position: absolute;
  width: 100%;
  height: 3rem;
  padding-left: 1rem;
  padding-right: 5rem;
  padding-top: 0;
  padding-bottom: 0;
  border-radius: 0.75rem;
  border-width: 2px;
  border-style: solid;
  border-color: ${props => props.theme.colors.black};
  font-size: 1.125rem;
`
export const SearchButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: -1.5rem;
  height: 3rem;
  padding: 0 2rem;
  background-color: ${props => props.theme.colors.primary};
  cursor: pointer;
  border-radius: 0.75rem;
  border-width: 1px;
  border-style: solid;
`
export const SearchIcon = styled(AiOutlineDownload)`
  color: ${props => props.theme.colors.white};
  font-size: 2rem;
`
