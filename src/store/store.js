import { createStore } from "redux";

const initialState = {
    quiz: [
        {
            question: `Che cos'e' l'HTML?`,
            answers: [
                'Un linguaggio di markup',
                'Un linguaggio di programmazione',
                'Un linguaggio per programmare macchine virtuali',
                'Un software per visualizzare siti web']
        },
        {
            question: 'Quale dei seguenti <tag> non appartiente al linguaggio HTML?',
            answers: [
                '<div>',
                '<ul>',
                '<answer>',
                '<img>']
        },
        {
            question: 'Quale dei seguenti non è un attributo appartiente al linguaggio HTML?',
            answers: [
                'name',
                'type',
                'value',
                'span']
        },

        {
            question: 'Quali elementi possono essere usati in CSS come selettori?',
            answers: [
                `il valore dell'attributo id`,
                'La posizione del tag rispetto al body',
                `Tutti gli elementi presenti nell'head'`,
                'Nessuna delle precedenti']
        },
        {
            question: 'In quale dei seguenti casi il margin-bottom equivale a 50px?',
            answers: ['margin: 10px 50px 10px 30px',
            'margin: 50px 50px 10px 30px',
            'margin: 10px 50px 10px 50px',
            'margin: 10px 30px 50px 30px']
        },
        {
            question: 'Come si scrive una funzione in Javascript?',
            answers: [
                'function myFunction()',
                'function:myFunction()',
                'function = myFunction()',
                'function => myFunction()']
        },
        {
            question: 'Quale dei seguenti non è un metodo per modificare array?',
            answers: [
                '.push',
                '.splice',
                '.divide',
                '.pop']
        },
        {
            question: 'Quale dei seguenti hook non è nativo di React?',
            answers: [
                'useState',
                'useSelect',
                'useEffect',
                'useReducer']
        },

    ],

    solution: [0, 2, 3, 0, 2, 0, 2, 1],
    time: 30,
    indexQuestion: 0,
    results: []
}

const reducer = (state, action) => {
    switch (action.type) {

        case 'addIndex': 
            return {
                ...state, indexQuestion: action.payload
            }
        
        case 'selectedAnswer': 
            return {
                ...state, results:[...state.results, action.payload]
            }

        case 'countDown': 
            return {
                ...state, time: action.payload
            }
        case 'setTime': 
            return {
                ...state, time: action.payload
            }
        case 'restartQuix': 
            return action.payload

        default:
            return state;
    }

}

export const store = createStore(reducer, initialState)