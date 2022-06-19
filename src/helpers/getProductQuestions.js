

export default function getQuestionsYAnswers ( {prodId}, setQuestions ){
    fetch(`https://api.mercadolibre.com/questions/search?item=${prodId}`)
        .then( ( resp ) => resp.json() )
        .then( ( data ) => setQuestions(data.questions) )
}