import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { countDown, increaseIndex, selectedAnswer, setTime } from '../../store/action'
import style from './Timer.module.scss'

export const Timer = () => {
    const dispatch = useDispatch();
    const time = useSelector(state => state.time)
    const indexQuestion = useSelector(state => state.indexQuestion)

    const [Animation, setAnimation] = useState(false)

    useEffect(() => {
        if (time > 0) {
            const timeOut = setInterval(() => dispatch(countDown(time)), 1000)
            return () => clearInterval(timeOut)
        }
        else if (time === 0 && indexQuestion<7) {
            dispatch(increaseIndex(indexQuestion))
            dispatch(selectedAnswer(null))
            dispatch(setTime())
        }
        else {
            dispatch(selectedAnswer(null))
            console.log(indexQuestion)
        }
    },[time, dispatch, indexQuestion])

    useEffect(()=>{
        if (time < 6) {setAnimation(true)}
        else{setAnimation(false)};
    }, [time])

    return (
        <>
            <div className={Animation ? `${style.timer} ${style.animation}` : style.timer }>
                <p className={style.timeNum}>{time}</p>
             </div>
           
        </>
    )
}