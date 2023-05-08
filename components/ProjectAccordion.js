import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box, Text, Flex, HStack,Img
  } from '@chakra-ui/react'
import Link from 'next/link'
import {BsFillEyeFill, BsGithub} from "react-icons/bs"

const ProjectAccordion = ({repo}) => {
   console.log(repo,"repo")

   const proj = {
      "Prembly-Hack-AmNiD-App":"images/amnid-website.JPG",
    "KanBan-App-API":"images/Kanban-app.JPG",
    "CharCord-":"images/chatchord.JPG",
    "Showcase_API":"images/event.jpg",
    "movie-website":"images/movie-website.JPG",
    "space-tourist-project":"images/space-tourism-website.JPG"
  }
    
  
  return (
    <div>
     
  <AccordionItem p="20px 0">
    <h2>
      <AccordionButton>
        <Box color="#5a60ea" as="span" flex='1' textAlign='left'>
           {repo.name}
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <Flex justifyContent="space-between" flexDirection={["column","row"]} align="center">
          <Text fontSize={["12px","14px","16px"]} mb="10px">{repo.description}</Text>
         <Img w="70%" bg="teal"  objectFit="contain" src={proj[repo.name]} alt="image"/>
      </Flex>
      <Flex justifyContent="space-between">
         
            <HStack justify="space-between" w="100%" 
                 margin="30px auto 0 auto" bottom={2} >
                    <a rel="noreferrer" href={repo.homepage} target="_blank">
                      <HStack color="#5a60ea" transition="all 0.8s linear" _hover={{paddingLeft: "20px", }} align="center" ><Text fontSize={[10,12, 16]}>live link</Text><BsFillEyeFill/>
                      </HStack>
                    </a>

                    <a rel="noreferrer" href={repo.url} target="_blank">
                      <HStack color="#5a60ea" transition="all 0.8s linear" _hover={{paddingRight: "20px"}} align="center"><Text fontSize={[10,12, 16]}>Code</Text><BsGithub/>
                      </HStack>
                    </a>
            </HStack>
      </Flex>
    </AccordionPanel>
  </AccordionItem>

  

    </div>
  )
}

export default ProjectAccordion
