import { useSelector } from "react-redux"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { increaseIndex, selectedAnswer, setTime } from "../../store/action"
import { Timer } from "../../components/Timer"
import { Results } from "../../components/Results"
import style from "./QuizList.module.scss"


export const QuizList = () => {
    const dispatch = useDispatch()
    const indexQuestion = useSelector((store) => store.indexQuestion)
    const question = useSelector((store) => store.quiz[indexQuestion])
    const [selectedAnswerindex, setSelectedAnsewerIndex] = useState(null)
    

    const handleQuestion = (e) => {
        e.preventDefault();
        dispatch(increaseIndex(indexQuestion))
        dispatch(selectedAnswer(selectedAnswerindex))
        dispatch(setTime())
    }

    const handleFinalResults = (e) => {
        e.preventDefault();
        dispatch(selectedAnswer(selectedAnswerindex))
    }

    return (
        <div className={style.main}>
            <Results />
            <div className={style.wrapper}>

                <div className={style.questions}>
                    <Timer />
                    <form onClick={(e) => setSelectedAnsewerIndex(e.target.value)}>
                        <div className={style.question}>
                            <h2>{`Domanda ${indexQuestion + 1}`}</h2>
                            <p>{question.question}</p>
                        </div>
                        <div className={style.wrapperAnsw}>
                            {question.answers.map((answer, index) =>
                                <label key={index} htmlFor={`answer ${index}`}>
                                    <input type='radio' id={`answer ${index}`} value={index} name='answer' />{answer}
                                </label>)}
                            {indexQuestion < 7 ?
                                <button onClick={(e) => handleQuestion(e)}>AVANTI</button> :
                                <button onClick={(e) => handleFinalResults(e)}>FINE</button>}
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )

}