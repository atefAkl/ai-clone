import { createContext, useState } from "react";
import runChat from "../config/gemini";




export const Context = createContext();

const ContextProvider = (props)=> {
    
    // to take the question from user
    const [input, setInput]= useState('');

    // to save the latest questions come from user
    const [recentPrompt, setRecentPrompt]= useState('');

    // to store question history and display in the recent tab on the sidebar
    const [prevPrompts, setPrevPrompts]= useState([]);

    // it will be control to display the greeting text or not 
    const [showResult, setShowResult]= useState(false);
    
    // it will display loading animation till the response will be ready
    const [isLoading, setIsLoading] = useState(false);
    
    //display result on webpage
    const [resultData, setResultData]= useState("");

    const typingDelay = (i, nexti) => {
      setTimeout(() => {
        setResultData((prev) => prev + nexti);
      }, i * 75);
    };

    const onSent = async (prompt) => {
        if (prompt == '') return
        
        setResultData('')
        setIsLoading(true)
        setShowResult(true)
        setRecentPrompt(input);
        setPrevPrompts(prev=>[...prev, input])
        const response = await runChat(prompt);
        const resSplitArray = response.split(' ')
        
        for (let s = 0; s<resSplitArray.length; s++) {
            const newWord = resSplitArray[s];
            typingDelay(s,newWord+' ')
        }
        console.log(input);
        // setResultData(response);
        setInput('');
        setIsLoading(false)
    }

    
    const contextValue = {
      prevPrompts,
      setPrevPrompts,
      recentPrompt,
      setRecentPrompt,
      showResult,
      isLoading,
      resultData,
      onSent,
      input,
      setInput,
    };
    
    return <Context.Provider value={contextValue}>{props.children}</Context.Provider>;
}

export default ContextProvider