import React from 'react'
import Head from 'next/head'
import { Box } from '@chakra-ui/react'
import Project from '../components/PortfolioPage'


const portfolio = () => {

   
  return (
    <div>
      <Head>
        <title>
          Dinma's Portfolio
        </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <Project ></Project>
      </Box>

    </div>
  )
}



export default portfolio
