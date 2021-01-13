import {useState,useEffect,useRef} from 'react'


function useWordGame(startingTIme=15) {

  const [text, setText]  = useState("")
  const [timeRemaining,setTimeRemaining] = useState(startingTIme)
  const [isTimeRunning,setIsTimeRunning] = useState(false)
  const [wordCount, setWordCount] = useState(0)
  const textBoxRef = useRef(null)

  function handleChange(e) {
    const {value} = e.target
    setText(value)
  }

  function calculateWordCount(text) {
    const wordsArr = text.trim().split(" ")
    return wordsArr.filter(word => word !=="").length
  }

  function startGame() {
    setIsTimeRunning(true)
    setTimeRemaining(startingTIme)
    setText("")
    textBoxRef.current.disabled = false;
    textBoxRef.current.focus()
  }

  function endGame() {
    setIsTimeRunning(false)
    setWordCount(calculateWordCount(text))
  }





  /*

  1.useEffect hook takes 2 parameter first one is the function
  an the second parameter is a variable that useEffect hook watch for
  if that second parameter changes useEffect hook will trigger the funtion
  as first parameter
  2. useEffect will also run when the component first mount, than it will run anytime variable changes

  */

  useEffect(() => {
    if(isTimeRunning && timeRemaining > 0){
      setTimeout(() => {
        setTimeRemaining(time=> time - 1)
      },1000)
    } else if(timeRemaining === 0){
        endGame()
    }
  },[timeRemaining,isTimeRunning])
  return {text,handleChange,wordCount,textBoxRef,
    calculateWordCount,startGame,endGame,timeRemaining,isTimeRunning}

}

export default useWordGame;
