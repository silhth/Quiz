import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import style from './Results.module.scss'
import { restartQuix } from "../../store/action"

export const Results = () => {

    const dispatch = useDispatch();
    const solution = useSelector(state => state.solution);
    const results = useSelector(state => state.results);
    const indexQuestion = useSelector(state => state.indexQuestion);
    const data = useSelector(state => state);
    const [numCorrectAnsw, setNumCorrectAnsw] = useState(null)
    const [rigthAnsw, setRigthAnsw] = useState([]);

    useEffect(() => {
        if (results.length === 8) {
            console.log(indexQuestion)
            setRigthAnsw(solution.map((arr, index) => arr === results[index] ? true : false))
        }
    }, [indexQuestion, results, solution])

    useEffect(() => {
        if (rigthAnsw.length === 8) {
            const answs = rigthAnsw.filter((arr) => arr === true).length
            setNumCorrectAnsw(answs * 100 / rigthAnsw.length)
        }
    }, [rigthAnsw])

    const handleStart = () => {
        dispatch(restartQuix(data))
    }

    return (
        <>
            {(results.length > 7) &&
                <div className={style.finalAnswer}>
                    <div className={style.finalResults}>
                    <div className={style.voto}>
                        <h2>{`Risposte corrette ${numCorrectAnsw}%`} </h2>
                        {numCorrectAnsw > 60 ?
                            <h3>Congratulazioni hai passato il test</h3> :
                            <h3>Mi dispiace non hai passato il test</h3>}
                            <button onClick={handleStart}>PROVA DI NUOVO</button>
                    </div>
                    <div className={style.listAnsw}>
                        {rigthAnsw.map((answ, index) => answ ?
                            <p key={index} className={style.rigth}>{`Risposta ${index + 1}: ✨ CORRETTA  ✨`}</p> :
                            <p key={index} className={style.wrong}>{`Risposta ${index + 1}: errata`}</p>)}
                        
                        </div>
                        </div>
                </div>}
        </>
    )
} 