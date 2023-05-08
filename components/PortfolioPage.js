import React,{useState} from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { Box, Img, VStack , HStack, Center, Button, Accordion} from '@chakra-ui/react'
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"
import styles from '../styles/Home.module.css' 
import {BsTwitter, BsGithub, BsLinkedin, BsWhatsapp} from "react-icons/bs"
import {MdLocationOn} from "react-icons/md"
import Link from 'next/link'
import Typingtext from './Typingtext'
import ProjectAccordion from './ProjectAccordion'
import { getRepositories } from '../utils/services'

const PortfolioPage = ({repositories}) => {

  
  
  console.log(repositories, "repos")
    const [toggle, setToggle] = useState(false)

    const open = ()=>{
        setToggle(true)
    }
    const close = ()=>{
        setToggle(false)
    }
    const openMail = ()=>{
        window.location.href = 'mailto:stinachinma@gmail.com'
    }

  return (
    <>
       <Flex className={toggle ? styles.page1hide : styles.page1} justifyContent="space-between" h="100%">
        <Box p={["40px 10px 10px 10px","40px 20px 10px 20px","50px 30px 10px 30px"]} w="100%" >
          <Flex>  
            <Box onClick={open} fontSize="20px"><AiOutlineMenu/></Box> 
            <Text color="#5a60ea" ml="10px">Portfolio</Text>
          </Flex>
          <Text m="20px auto" w="90%" fontSize={["12px","16px"]}>I added this section to display projects that I've actively collaborated in and built. They're my top best projects and the github API was used to pull the informations</Text>
              <Box mt="60px">
                  <Accordion allowToggle="true">
                    {
                      repositories.map((item )=>(
                        <ProjectAccordion repo={item}/>
                      ))
                    }
                  </Accordion>
             </Box>
        </Box>
        
    </Flex>
    <Flex >
        <Box className={toggle ?  styles.page2show: styles.page2} p="50px 30px 10px 30px" >
           <Box onClick={close} fontWeight="800" fontSize="20px"><AiOutlineClose/></Box>
           <VStack w="100%" align="end">
                <Text fontSize={["17px","20px","30px"]}><Link href="/">Home</Link></Text>
                <Text fontSize={["17px","20px","30px"]}><Link href="/about">About</Link></Text>
                
                <Text onClick={close}  fontSize={["17px","20px","30px"]}><Link href="/portfolio">Portfolio Works</Link></Text>
                <Text fontSize={["17px","20px","30px"]}><Link href="/contact">Contact</Link></Text>
           </VStack>
           
        
           <Box pos="fixed" bottom={10} w="100%">
               <Box className={styles.gradientext}>
                  <Typingtext></Typingtext>
               </Box>
              <Box w="100%" h="1px" bg="#827c7c"></Box>
              <HStack  spacing={10} m="10px 0" fontSize={[20,30]} color="#5a60ea">
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

export default PortfolioPage



