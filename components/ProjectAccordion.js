import React from 'react'
import {
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box, Text, Flex, HStack,Img
  } from '@chakra-ui/react'
import {BsFillEyeFill, BsGithub} from "react-icons/bs"

const ProjectAccordion = ({project}) => {
   
  
  return (
    <div>
     
  <AccordionItem p="20px 0">
    <h2>
      <AccordionButton>
        <Box color="#5a60ea" as="span" flex='1' textAlign='left'>
           {project.title}
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <Flex justifyContent="space-between" flexDirection={["column","row"]} align="center">
          <Text fontSize={["12px","14px","16px"]} mb="10px">{project.content}</Text>
         <Img w="70%" bg="teal"  objectFit="contain" src={project.img} alt="image"/>
      </Flex>
      <Flex justifyContent="space-between">
            {/* {
              id: "15",
            title: "LinkURL",
            img: linkurl,
            content: `LinkURL is a webapp that shortens url, generates url code of shortened urls and shows the analysis of the the generated urls`,
            github: "https://github.com/Simplystina/url-shortener/tree/master",
            live: "https://linkurl.netlify.app/",
            tools: `Nodejs + Nodemailer + Mongodb + QrCodeGenerator`
     }, */}
            <HStack justify="space-between" w="100%" 
                 margin="30px auto 0 auto" bottom={2} >
                    <a rel="noreferrer" href={project.live} target="_blank">
                      <HStack color="#5a60ea" transition="all 0.8s linear" _hover={{paddingLeft: "20px", }} align="center" ><Text fontSize={[10,12, 16]}>live link</Text><BsFillEyeFill/>
                      </HStack>
                    </a>

                    <a rel="noreferrer" href={project.github} target="_blank">
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
