import React, { useState, useEffect } from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { Box, Img, VStack , HStack} from '@chakra-ui/react'
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"
import styles from '../styles/Home.module.css' 
import {BsTwitter, BsGithub, BsLinkedin} from "react-icons/bs"
import Link from 'next/link'
import Typingtext from './Typingtext'
const HomePage = () => {

  
    

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
        <Box p={["40px 10px 10px 10px","40px 20px 10px 20px","50px 30px 10px 30px"]} w={["100%","100%","40%"]} >
        <Flex>  
            <Box onClick={open} fontSize="20px"><AiOutlineMenu/></Box> 
        
          </Flex>
           <Text className={styles.name} fontSize={["40px","50px","70px"]}>DINMA.</Text>
           <VStack align="space-between" spacing={5}>
              <Text fontSize={["14px","16px"]} fontWeight="600">
                Hello  👋  thanks for stopping by.
               </Text>
               <Text fontSize={["14px","16px"]}>My name is Chidinma Nwatu, fondly called Dinma :)
              </Text>
                <Text fontSize={["14px","16px"]} fontFamily="Poppins">I'm a backend developer but I can create magic at either the backend or the frontend.
               </Text>
               <Text fontSize={["14px","16px"]}>
                  I'm a woman in tech advocate who loves giving back to the community
                </Text>
           </VStack>
           <HStack   m={[10, 20]} spacing={10} fontSize={[20,30]} justify="center" color="#7775fff4">
                <a target="_blank" rel="noreferrer" href="https://twitter.com/chidinmaCode"><BsTwitter/></a>
                <a target="_blank" rel="noreferrer" href="https://github.com/Simplystina"><BsGithub/></a>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/chidinma-nwatu-7ba6051a2/"><BsLinkedin/></a>
            </HStack>
        </Box>
        <Box display={["none","none","block"]}   h="100%" pos="fixed" right="0" bottom="0" w={["50vw","50vw","50vw","60vw"]} >
            <Img src="images/pic.JPG" objectFit="cover" w="100%" h="100%"  pos="absolute" top="0" right="0" alt="cover-photo"/>
        </Box>
    </Flex>
    <Flex >
        <Box className={toggle ?  styles.page2show: styles.page2} p="50px 30px 10px 30px" >
           <Box onClick={close} fontWeight="800" fontSize="20px"><AiOutlineClose/></Box>
           <VStack w="100%" align="end">
             <Text onClick={close} fontSize={["17px","20px","30px"]}><Link href="/">Home</Link></Text>
                <Text fontSize={["17px","20px","30px"]}><Link href="/about">About</Link></Text>
                
                <Text fontSize={["17px","20px","30px"]}><Link href="/portfolio">Portfolio Works</Link></Text>
                <Text fontSize={["17px","20px","30px"]}><Link href="/contact">Contact</Link></Text>
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
//
export default HomePage
