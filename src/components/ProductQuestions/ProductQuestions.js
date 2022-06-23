import { useEffect, useState } from 'react';
import getQuestionsYAnswers from '../../helpers/getProductQuestions'


export const ProductQuestions = ( {prodId} ) => {
    const [questions, setQuestions] = useState([])
    
    useEffect(()=>{
        getQuestionsYAnswers(prodId, setQuestions)
    }, [])
    
    return (
        <div className='productQuestions product-section'>
            <h3>Preguntas y respuestas</h3>

            <div className='ask-section'>
                <h5>Preguntale al vendedor</h5>
                <form>
                    <input className='ask-input' type='text' placeholder='Escribi tu pregunta...' />
                    <button className='btn-azul btn-ask'>Preguntar</button>                
                </form>
            </div>
            
            {   
                questions?.length === undefined ? 
                <p className='no-questions'>Nadie hizo preguntas todavía. ¡Hacé la primera!</p> 
                :
                questions?.length > 10 && !undefined ? 
                <div>
                    <h5>Ultimas realizadas</h5>
                    {questions?.slice(0,10).map( (el)=>{
                        return(
                            <div key={el.id}>   
                                <p className='customer-question'>{el.text}</p>
                                {el.status === "ANSWERED" ? 
                                <div className='answer-container'>
                                    <svg xlink="http://www.w3.org/1999/xlink" className="ui-pdp-icon ui-pdp-qadb__questions-list__question__answer-container__icon" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><defs><symbol id="response"><path fill="#000" fillOpacity=".25" fillRule="evenodd" d="M0 0h1v11h11v1H0z"></path></symbol></defs><g fill="#000000" fillOpacity="0.25"><path fill="#000" fillOpacity=".25" fillRule="evenodd" d="M0 0h1v11h11v1H0z"></path></g></svg>
                                    <p className='seller-answer'>{el.answer.text}<span>{(el.answer.date_created).slice(0,10).replaceAll("-","/")}</span></p>
                                </div>  
                                : 
                                undefined}
                                
                            </div>
                        )}
                    )}
                </div>
                :
                <div>
                    <h5>Ultimas realizadas</h5>
                    {questions?.map( (el)=>{
                        return(
                            <div key={el.id}>  
                                <p className='customer-question'>{el.text}</p>
                                {el.status === "ANSWERED" ?  
                                <div className='answer-container'>
                                    <svg xlink="http://www.w3.org/1999/xlink" className="ui-pdp-icon ui-pdp-qadb__questions-list__question__answer-container__icon" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><defs><symbol id="response"><path fill="#000" fillOpacity=".25" fillRule="evenodd" d="M0 0h1v11h11v1H0z"></path></symbol></defs><g fill="#000000" fillOpacity="0.25"><path fill="#000" fillOpacity=".25" fillRule="evenodd" d="M0 0h1v11h11v1H0z"></path></g></svg>
                                    <p className='seller-answer'>{el.answer.text}<span>{(el.answer.date_created).slice(0,10).replaceAll("-","/")}</span></p>
                                </div>  
                                :
                                undefined}
                            </div>
                        )}
                    )}
                </div>
            }
        </div>
    )
}

