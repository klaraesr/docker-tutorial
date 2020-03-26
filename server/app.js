const express = require('express')
var cors = require('cors');
const app = express()
const port = 9000

app.use(cors());

const triviaAnswers = {
    image: "https://axonstatic.se/items/420/7793.jpg",
    title: "You found the answers!", 
    description: "Good job! Both your frontend and backend are running in separate containers. Here are the answers to the questions!", 
    questionsAnswers: [
        {question: "How many companies use Docker?", answer: "Over 30 000! That's a lot of companies."},
        {question: "How many total repos are there on Docker Hub?", answer: "6 million!"},
        {question: "The company behind Docker is called Docker, Inc. But that hasn't always been their name. What was Docker, Inc. called before?", answer: "The were called dotCloud, Inc. Before Docker, dotCloud (a second generation PaaS platform) was their largest product!"},
        {question: "How many total pulls have been done on Docker Hub?", answer: "Astonishing 130 billion times..."}
      ],
    sources: ["https://enlyft.com/tech/products/docker", "en annan källa"]
}

app.get('/', (req, res) => res.send('Your backend is up and running!'))
app.get('/trivia', (req, res) => res.send(triviaAnswers))

app.listen(port, () => console.log(`Listening on port ${port}!`))