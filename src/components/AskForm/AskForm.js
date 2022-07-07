export const AskForm = ( {handleChange, questions, newQuestion, setQuestions} ) => {

    let randomNumber = ( Math.random() * (10 - 1 + 1)) + 1 
    
    // Creation of a new question
    
    const makeQuestion = (e) =>{
        e.preventDefault()
        newQuestion = 
        {
            text: newQuestion,
            id: randomNumber,
        }
        setQuestions([newQuestion, ...questions])
    }

    const writeQuestion = (e) =>{
        handleChange(e.target.value)
    }   

    return (
        <div className='ask-section'>
            <h5>Preguntale al vendedor</h5>
            <form onSubmit={makeQuestion}>
                <input onChange={writeQuestion} className='ask-input' type='text' placeholder='Escribi tu pregunta...' />
                <button type='submit' className='btn-azul btn-ask'>Preguntar</button>
            </form>
        </div>
    )
}
