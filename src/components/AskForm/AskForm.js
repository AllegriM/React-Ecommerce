import { useId } from "react"

export const AskForm = ( {handleChange, questions, newQuestion, setQuestions} ) => {

    const id = useId()
    
    // Creation of a new question
    
    const makeQuestion = (e) =>{
        e.preventDefault()
        newQuestion = 
        {
            text: newQuestion,
            id: id,
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
