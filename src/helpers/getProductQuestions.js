export default function getQuestionsYAnswers ( {prodId}, setQuestions ){
    fetch(`https://api.mercadolibre.com/questions/search?item=${prodId}`)
        .then( ( resp ) => resp.json() )
        .then( ( data ) => {
            if (data.questions.length > 10) {
                setQuestions((data.questions).slice(0, 10))
            }else{
                setQuestions(data.questions)
            }
        })
}