const express = require('express')
const app = express()
require('dotenv').config()
const Person = require('./models/person')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')






app.use(express.json())
app.use(cors())
app.use(bodyParser.json())
app.use(express.static('build'))

morgan.token('body',function(request, response) {
    return JSON.stringify(request.body)
})

//app.use(morgan('posti'))

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body '));




let persons = [
    {
     name: 'Miles Davis',
     number: '752-956-3431',
     id: 1
    },
    {
        name: 'Norman Borlaug',
        number: '732-926-3422',
        id: 2
    },
    {
        name: 'Jacques Cousteau',
        number: '732-326-1422',
        id:3
    },
    { 
        name: 'Nikolai Tesla',
        number: '732-216-1492',
        id:4
    },

    { 
        name: 'Elon Tesla',
        number: '7838-216-1492',
        id:5
    }
    

]


const generateId = (max) =>  {
    return Math.floor(Math.random() * Math.floor(max)); 
}



const now = new Date()
 

const max = 100000

app.get('/build/index.html', (request, response) => {
    response.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (request, response, next) => {
    Person.find({}).then(persons => {
      response.json(persons.map(person => person.toJSON()))
    })
    .catch(error => next(error))
  })


//response.json(persons)
app.get('/api/info', (request, response, next) => {
    Person.estimatedDocumentCount()
    .then(count => {
        response.send(`Phonebook has info for ${count} people ${now.toString()}`)
    })
    .catch(error => next(error))
  
})



app.get('/api/persons/:id', (request, response, next) => {
    Person.findById(request.params.id)
    .then(person => {
       
            response.json(person.toJSON())    
    })
    .catch(error => next(error))

 })

 app.delete('/api/persons/:id' , (request, response, next) => {
     Person.findByIdAndRemove(request.params.id)
     .then(result => {
         response.status(204).end()
     })
     .catch(error => next(error))
     
 })

 app.post('/api/persons', (request, response, next) => {
     const body = request.body
     
     if(!body.name) {
         return response.status(400).json({
             error: 'name is missing'
         })
     }
     if(!body.number) {
        return response.status(400).json({
            error: 'number is missing'
        })
    }

    // const found = persons.some(person => person.name === body.name)
    // if(found) {
    //     return res.status(400).json({
    //         error: 'name must be unique'
    //     })
    // }
     const person = new Person({
        name: body.name,
        number: body.number,
        id: generateId(max),
     })

     person.save().then(savedPerson => {
         response.json(savedPerson.toJSON()); 
     })
     .catch( error => next(error))

    //  persons = persons.concat(person)
    //  res.json(person)
 })




 app.put('/api/persons/:id', (request, response, next) => {
     console.log('called put method');
     const body = request.body
     const person = {
         name: body.name,
         number: body.number
     }

     Person.findByIdAndUpdate(request.params.id, person, {new: true})
     .then(updatedPerson => {
         response.json(updatedPerson.toJSON())
     })
     .catch(error => next(error))
 })

 const unknownEndPoint = (request, response) => {
     response.status(404).send({ error: 'unknown endpoint' })
 }
 
 app.use(unknownEndPoint)




 const errorHandler = (error, request, response, next) => {
     console.error(error.message)

     if(error.name === 'CastError' && error.kind === 'ObjectId') {
         return response.status(400).send({error: 'malformatted id'})
     } else if (error.name === 'ValidationError') {
         return response.status(400).json({error: error.message})
     }
     next(error)
 }

 app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT,() => {
    console.log(`Server running on port ${PORT}`)
})
