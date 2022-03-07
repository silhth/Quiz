
export const increaseIndex = (index)=>{
    return {
        type:'addIndex', 
        payload: index +1
    }
}

export const selectedAnswer =(index)=>{
    return{
        type: 'selectedAnswer',
        payload: parseInt(index)
    }
}

export const countDown = (time) =>{
    return {
        type: 'countDown',
        payload: time - 1
    }
}

export const setTime = () =>{
    return {
        type: 'countDown',
        payload: 30
    }
}

export const restartQuix = (state) =>{
    return {
        type: 'restartQuix',
        payload: {
            ...state, 
            time: 30,
            indexQuestion: 0,
            results: []
        }
    }
}

