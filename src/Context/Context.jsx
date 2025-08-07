import { createContext,useEffect, useState,useRef} from "react";
export const Context=createContext()
import { askGemini } from "../config/gemini";
const ContextProvider=(props)=>{
  const timeoutsRef = useRef([]);
  const sessionIdRef=useRef(0);
  const [input,setInput]=useState("");
  const [prompt,setPrompt]=useState("");
  const [prevPrompt,setPrevPrompt]=useState([]);
  
  const [showResult,setShowResult]=useState(false);
  const [loading,setLoading]=useState(false);
  const [resultData,setResultData]=useState("");

  const delayPara = (index, nextWord, session) => {
  const timeoutId = setTimeout(() => {
    if (session === sessionIdRef.current) {
      setResultData((p) => p + nextWord);
    }
  }, index * 75);
  timeoutsRef.current.push(timeoutId);
};
  const clearAllTimeouts = () => {
  timeoutsRef.current.forEach(clearTimeout);
  timeoutsRef.current = [];
};

  const newChat=()=>{
    clearAllTimeouts();
    setLoading(false);
    setShowResult(false);
  }

  const onSent= async (prompt)=>{
    clearAllTimeouts();
    sessionIdRef.current += 1; // bump session ID
    const currentSession = sessionIdRef.current;
    setResultData("")
    setLoading(true)
    setShowResult(true)
    let response;
    if(prompt!==undefined){
       response=await askGemini(prompt);
       setPrompt(prompt)
    }
    else{
      setPrevPrompt((p)=>[...p,input])
      setPrompt(input)
      response=await askGemini(input)
    }
    let responseArray =response.split("**")
    let newResponse="";
    for(let i=0;i<responseArray.length;i++){
      newResponse+=(i%2==0)?responseArray[i]:"<b>"+responseArray[i]+"</b>";
    }
    let newResponse2=newResponse.split("*").join("</br>")
    let newResponseArray=newResponse2.split(" ")
    for(let i=0;i<newResponseArray.length;i++)
    {
      delayPara(i,newResponseArray[i]+" ",currentSession)
    }
    setLoading(false)
    setInput("")
  }
 
//   useEffect(() => {
//   askGemini("Hi how are you");
// }, []);


   const contextValue={
    prevPrompt,
    setPrevPrompt,
    onSent,
    setPrompt,
    prompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    newChat
   }
   return <Context.Provider value={contextValue}>{props.children}</Context.Provider>
}
export default ContextProvider