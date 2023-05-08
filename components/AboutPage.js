import React, { useState, useEffect } from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { Box, Img, VStack , HStack} from '@chakra-ui/react'
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"
import styles from '../styles/Home.module.css' 
import {BsTwitter, BsGithub, BsLinkedin} from "react-icons/bs"
import Link from 'next/link'
import Typingtext from './Typingtext'


const AboutPage = () => {

    const [toggle, setToggle] = useState(false)
    const open = ()=>{
        setToggle(true)
    }
    const close = ()=>{
        setToggle(false)
    }

  return (
    <>
       <Flex className={toggle ? styles.page1hide : styles.page1} justifyContent="space-between" h="100%">
        <Box p={["40px 10px 10px 10px","40px 20px 10px 20px","50px 30px 10px 30px"]} w="100%" >
        <Flex>  
            <Box onClick={open} fontSize="20px"><AiOutlineMenu/></Box> 
            <Text color="#5a60ea" ml="10px">About</Text>
          </Flex>
              <Flex flexDirection={["column-reverse","column-reverse","column-reverse","row"]}>
                 <Box>
                    <Text className={styles.name} textAlign="center"> Hey, DINMA here</Text>
                    <Box  >
                   <Text data-aos="fade-left" data-aos-duration="2000" lineHeight="25px" fontSize={["14px","16px"]} >
                    I am a passionate and enthusiastic software developer who enjoys creating things that live on the web. 
                   I'm a web developer with experience focused on crafting great web experiences with pixel 
                   perfect design and also building the server side of applications. I enjoy taking complex problem and turning them into amazing products that helps to solve users problems.
                  I enjoy the process of creation and constantly learning better ways of doing things everyday.
                   </Text>
                    <Text data-aos="fade-right" fontSize={["14px","16px"]} m="20px 0">
                        I'm a woman in tech Advocate. 
                        I love volunteering so I spend alot of my time volunteering with organisations as a lead and as an active contributor. I believe so much in giving back to the
                         community so I'm constantly using my technical knowledge to   do that.
                     </Text>
                     <Text data-aos="fade-up" fontSize={["14px","16px"]}>
                     Currently I'm on the journey to learning more technologies so I can contribute in more projects and compete globally.
                     </Text>
                   </Box>
                 </Box>
                 <Img bg="teal" h={["300px","400px","500px"]} m="0 auto" w={["300px","400px","500px"]} borderRadius="50%" src="images/dinma.JPG"  objectFit="cover"   alt="cover-photo"/>
              </Flex>
        </Box>
        
    </Flex>
    <Flex >
        <Box className={toggle ?  styles.page2show: styles.page2} p="50px 30px 10px 30px" >
           <Box onClick={close} fontWeight="800" fontSize="20px"><AiOutlineClose/></Box>
           <VStack w="100%" align="end">
                <Text className={styles.link} fontSize={["17px","20px","30px"]}><Link href="/">Home</Link></Text>
                <Text className={styles.link} onClick={close}  fontSize={["17px","20px","30px"]}><Link href="/about">About</Link></Text>
                
                <Text className={styles.link} fontSize={["17px","20px","30px"]}><Link href="/portfolio">Portfolio Works</Link></Text>
                <Text  className={styles.link} fontSize={["17px","20px","30px"]}><Link href="/contact">Contact</Link></Text>
           </VStack>
           
        
           <Box pos="fixed" bottom={10} w="100%">
               <Box className={styles.gradientext}>
                  <Typingtext></Typingtext>
               </Box>
              <Box w="100%" h="1px" bg="#827c7c"></Box>
              <HStack  spacing={10} m="10px 0" fontSize={[20,30]} color="#7775ffdd">
                <a target="_blank" rel="noreferrer" href="https://twitter.com/chidinmaCode"><BsTwitter/></a>
                <a target="_blank" rel="noreferrer" href="https://github.com/Simplystina"><BsGithub/></a>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/chidinma-nwatu-7ba6051a2/"><BsLinkedin/></a>
            </HStack>
           </Box>
           
        </Box>
    </Flex>
    </>
  )
}

export default AboutPage
