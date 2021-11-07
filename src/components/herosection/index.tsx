import React, { useState } from 'react'
import Image from 'next/image'
import {
  Container,
  ImageContainer,
  SearchZone,
  Input,
  SearchButton,
  SearchIcon,
  Title
} from './styled'
import Logo from '../../assets/img/kraken.svg'
interface HeroProps {
  id?: string | null
}

const HeroSection: React.FC<HeroProps> = ({ id }) => {
  const [value, setValue] = useState('')

  const Click = async value => {
    await fetch(`http://localhost:3000/api/dl/?q=${value}`)
    alert(value)
  }

  return (
    <Container id={id}>
      <ImageContainer>
        <Image src={Logo} layout="intrinsic" />
      </ImageContainer>
      <SearchZone>
        <Title>
          Baixe vídeos do Youtube para ficheiros <b>MP4</b> de forma gratuita.
        </Title>
        <Input
          value={value}
          onChange={e => {
            setValue(e.target.value)
          }}
        />
        <SearchButton onClick={() => Click(value)}>
          <SearchIcon />
        </SearchButton>
      </SearchZone>
    </Container>
  )
}

export default HeroSection
