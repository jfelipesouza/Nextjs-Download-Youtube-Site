import React from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { Header, HomeContainer, Main } from '../styles/home'
import NavBar from '../components/navbar'
import HeroSection from '../components/herosection'

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Head>
        <title>Kraken</title>
        <meta
          name="description"
          content="Arraste os donwload de videos do youtube para o seu pc com o Kraken"
        />
      </Head>

      <Header>
        <NavBar />
      </Header>

      <Main>
        <HeroSection id={'principal'} />
      </Main>
    </HomeContainer>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {}
  }
}
