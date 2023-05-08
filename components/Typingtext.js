import React,{useState, useEffect} from 'react'
import { Text } from '@chakra-ui/react';
import styles from "../styles/Home.module.css"


const Typingtext = () => {

    const [lines, setLines] = useState([
        'I am not your regular backend developer',
         'I build server side applications',
        'I am a software developer'
      ]);

    const [currentLine, setCurrentLine] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const line = lines[currentLine];
    if (isTyping) {
      const intervalId = setInterval(() => {
        setCurrentText((prevText) => prevText + line.charAt(prevText.length));
        if (currentText === line) {
          setIsTyping(false);
          clearInterval(intervalId);
          setTimeout(() => {
            setCurrentText('');
            setCurrentLine((prevLine) => (prevLine + 1) % lines.length);
            setIsTyping(true);
          }, 2000);
        }
      }, 50);

      return () => clearInterval(intervalId);
    }
  }, [currentLine, currentText, isTyping, lines])
  return (
    <div>
       <Text className={styles.gradientext} mb="10px" fontSize={["18px","20px","25px"]} >{currentText}</Text>
    </div>
  )
}

export default Typingtext
