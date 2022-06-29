import { useEffect, useState } from 'react';
import getQuestionsYAnswers from '../../helpers/getProductQuestions'
import { Box } from '@chakra-ui/react'
import { AskForm } from '../AskForm/AskForm';


export const ProductQuestions = ({ prodId }) => {

    const [questions, setQuestions] = useState([])

    const [newQuestion, setNewQuestion] = useState("")

    useEffect(() => {
        getQuestionsYAnswers(prodId, setQuestions)
    }, [newQuestion])

    return (
        <>
            <div className='productQuestions product-section'>
                <h3>Preguntas y respuestas</h3>

                <AskForm handleChange={setNewQuestion} questions={questions} newQuestion={newQuestion}/>
                {
                    questions?.length === undefined ?
                        <p className='no-questions'>Nadie hizo preguntas todavía. ¡Hacé la primera!</p>
                        :
                        questions && !undefined ?
                            <Box>
                                <h5>Ultimas realizadas</h5>
                                <Box>
                                    {questions?.map((el, index) => {
                                        return (
                                            <Box my key={index}>
                                                <p className='customer-question'>{el.text}</p>
                                                {el.status === "ANSWERED" ?
                                                    <div className='answer-container'>
                                                        <svg xlink="http://www.w3.org/1999/xlink" className="ui-pdp-icon ui-pdp-qadb__questions-list__question__answer-container__icon" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><defs><symbol id="response"><path fill="#000" fillOpacity=".25" fillRule="evenodd" d="M0 0h1v11h11v1H0z"></path></symbol></defs><g fill="#000000" fillOpacity="0.25"><path fill="#000" fillOpacity=".25" fillRule="evenodd" d="M0 0h1v11h11v1H0z"></path></g></svg>
                                                        <p className='seller-answer'>{el.answer.text}<span>{(el.answer.date_created).slice(0, 10).replaceAll("-", "/")}</span></p>
                                                    </div>
                                                    :
                                                    undefined}
                                            </Box>
                                        )
                                    }
                                    )}
                                </Box>
                            </Box>
                            :
                            <div>
                                <h5>Ultimas realizadas</h5>
                                {questions?.map((el) => {
                                    return (
                                        <div key={el.id}>
                                            <p className='customer-question'>{el.text}</p>
                                            {el.status === "ANSWERED" ?
                                                <div className='answer-container'>
                                                    <svg xlink="http://www.w3.org/1999/xlink" className="ui-pdp-icon ui-pdp-qadb__questions-list__question__answer-container__icon" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><defs><symbol id="response"><path fill="#000" fillOpacity=".25" fillRule="evenodd" d="M0 0h1v11h11v1H0z"></path></symbol></defs><g fill="#000000" fillOpacity="0.25"><path fill="#000" fillOpacity=".25" fillRule="evenodd" d="M0 0h1v11h11v1H0z"></path></g></svg>
                                                    <p className='seller-answer'>{el.answer.text}<span>{(el.answer.date_created).slice(0, 10).replaceAll("-", "/")}</span></p>
                                                </div>
                                                :
                                                undefined}
                                        </div>
                                    )
                                }
                                )}
                            </div>
                }
            </div>

        </>
    )
}