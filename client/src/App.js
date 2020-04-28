import React, { useEffect, useState } from 'react';
import './App.css';

const trivia = {
  image: "https://www.partyhallen.se/cache/0e/799x799-b_paskagg-jumbo-40cm-1.jpg",
  title: "Hmm.. I wonder what the answers to these questions are?",
  questions: [
    "How many companies use Docker?",
    "How many total repos are there on Docker Hub?",
    "The company behind Docker is called Docker, Inc. But that hasn't always been their name. What was Docker, Inc. called before?",
    "How many total pulls have been done on Docker Hub?"
  ]
}

function App() {
  let [apiResponse, setApiResponse] = useState({title: "", description: "", question1: "", answer1: ""})
  useEffect(() => {
    callAPI()
  },[])

  const callAPI = () => {
    fetch("/trivia")
        .then(res => res.json())
        .then(res => setApiResponse(res))
        .catch(() => setApiResponse(trivia))
  }

  return (
    <div className="App">
        <img className="easter-eggs" src={apiResponse.image} alt="Easter egg"/>
        <h2>{apiResponse.title}</h2>
        <h3>{apiResponse.description}</h3>
        {apiResponse.questions && apiResponse.questions.map(question => (
          <div className="question">{question}</div>
        ))}
        {apiResponse.questionsAnswers && apiResponse.questionsAnswers.map(obj => (
          <div>
            <div className="question">{obj.question}</div>
            <div className="answer">{obj.answer}</div>
          </div>
        ))}
    </div>
  );
}

export default App;
