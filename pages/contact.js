import React from 'react'
import Head from 'next/head'
import { Box } from '@chakra-ui/react'
import ContactPage from '../components/ContactPage'

const contact = () => {
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
        <ContactPage></ContactPage>
      </Box>

    </div>
  )
}

export default contact
