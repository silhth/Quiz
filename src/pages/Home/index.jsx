import { Link } from 'react-router-dom'
import style from './Home.module.scss'
import QUIZ from './QUIZ.png'

export const Home = () => {


    return (
        <div className={style.home}>
            <div>
                <img src={QUIZ} alt='quiz' />
                <h2>Testa le tue nozioni base in HTML, CSS e JAVASCRIPT</h2>
                <p>8 domande, 30 secondi di tempo per ogni risposta, infiniti tentativi!</p>
                <Link to='quiz'>INIZIA</Link>
            </div>
        </div>
    )
}