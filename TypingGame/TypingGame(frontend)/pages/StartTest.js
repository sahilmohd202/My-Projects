import {SERVER_ADDRESS,WORD_LIMIT} from '../GlobalVariables.js';
import axios from 'axios';
import {useState,useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import TextField from '../components/TextField.js';
import Screen from '../components/Screen.js';
import Timer from '../components/Timer.js';
function StartTest(){
  const [wordlimit,setWordLimit]=useState(2);     
  const [isAllWordsTyped,setAllWordsTyped]=useState(false);    // 'isAllWordsTyped' carries information about whether user typed all the words or not.
  const {minute,level}=useParams();
  const navigateTo=useNavigate(); 
  const [correct,setCorrectCount]=useState(0);
  const [wrong,setWrongCount]=useState(0);
  const [wordstypedinentiregame,setEntireCount]=useState("");
  const [totalwordsTyped,setTypedCount]=useState(0);
  const [untypedtext,setUnTypedText]=useState("");   
  const [wrongtext,setWrongText]=useState("");
  const [correcttext,setCorrectText]=useState("");
  const whenTestCompleted=()=>{   
   
    const gwpm=Math.floor((wordstypedinentiregame.length/5));
    navigateTo(`/result/${correct}@${wrong}@${wordstypedinentiregame.split(' ').length}@${gwpm}`);
  };

  const fetchText=async()=>{
   
    return await axios.get(`${SERVER_ADDRESS}?difficulty=${level}`)  // fetch text from the server based on the difficulty level.
    .then(response=>{
       console.log(response.data);
       const text=response.data+" "; // note: put 1 extra whitespace at the end of the text.
       setWordLimit(text.trim().split(' ').length);    // words limit is dependent on the server.
        return text;
      },error=>{
       // when text is failed to load.
      });
  };
    
     useEffect(()=>{
      fetchText()
      .then(text=>{
        setUnTypedText(text);
        setWrongText("");
        setCorrectText("");
      });
     },[]); //call this function once when the component is mounted.





     useEffect(()=>{ 
      if(isAllWordsTyped)
      {    // this is invoked whenever all words are typed. 
        
          fetchText()
          .then(text=>{
            setUnTypedText(text);
            setWrongText("");
            setCorrectText("");
           
          });
          setEntireCount(ewc=>ewc+correcttext);   
          setTypedCount(0);
         setAllWordsTyped(false);
      } 
      
     },[isAllWordsTyped]);    
     
     
     
     
 

  
  
  
  
   
  

   const onInput=(word)=>{
    
      word=word.trim();  // remove extra whitespaces .
      const wrd=untypedtext.slice(0,untypedtext.indexOf(' '));   // get the first word from pending text.
      if(wrd==word)   // check whether entered word matches with pending word or not
      {  // when user entered correct word.
          setCorrectCount(correct+1);  // register correct count.
          setCorrectText(prevct=>prevct+wrd+" ");  //  add to correcttext with space.
          setUnTypedText(prevt=>prevt.slice(prevt.indexOf(' ')+1,prevt.length));  // remove wrd from pendingtext
          setTypedCount(totalwordsTyped+1);  // register total words count.
      
          if(totalwordsTyped+1==wordlimit)  
            setAllWordsTyped(true); 
          
        
          
        }  
      else
      {  // when user entered wrong word
            if(word==wrongtext.trim())  // user retyped to recorrect the word.
            {  // when user recorrected.
                   setCorrectText(prevct=>prevct+word+" ");  // now add recorrected word to correct text .
                   setWrongText("");              // remove wrong text.
                   setTypedCount(total=>total+1);  //register total words count.
                   if(totalwordsTyped+1==wordlimit)
                    setAllWordsTyped(true);
                   
                   
            }
            if(wrongtext=="")   // when user first time entered wrong word.
            {
             setWrongCount(wrong+1);   //register wrong count.
             setWrongText(wrd+" ");   // add to wrongtext.
             setUnTypedText(prevt=>prevt.slice(prevt.indexOf(' ')+1,prevt.length));  // remove wrd from pendingtext.
            }
      }

   




       
   }

    return <div id="starttest">
        <center><Screen enteredcorrecttext={correcttext} wrongenteredtext={wrongtext} pendingtext={untypedtext}  width={window.innerWidth/2} height={window.innerHeight/2.3} /></center>
        <center><Timer time={minute} fire={whenTestCompleted}/></center>
        <center><TextField width={window.innerWidth/2} height={window.innerHeight/13} onInput={onInput}/></center>
    </div>;
}
export default StartTest;