const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.use(express.static('build'))

morgan.token('body',function(req, res) {
    return JSON.stringify(req.body)
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
const count = persons.length; 
const info = `Phonebook has info for ${count} 
people 
${now.toString()} `
const max = 100000

app.get('/build/index.html', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (req,res,) => {
    res.json(persons)
})

app.get('/api/info', (req, res,) => {
   res.send('Phonebook has \n info for' + count +  'people ' )
  
})



app.get('/api/persons/:id', (req, res) => {
   const id = Number(req.params.id)
   const person = persons.find(person => person.id === id)
   if(person){
    res.json(person)
   } else {
    res.status(404).end()
   }
  
 })

 app.delete('/api/persons/:id' , (req, res) => {
     const id = Number(req.params.id)
     persons = persons.filter(person => person.id !== id)
 })

 app.post('/api/persons', (req, res) => {
     const body = req.body
     
     if(!body.name) {
         return res.status(400).json({
             error: 'name is missing'
         })
     }
     if(!body.number) {
        return res.status(400).json({
            error: 'number is missing'
        })
    }

    const found = persons.some(person => person.name === body.name)
    if(found) {
        return res.status(400).json({
            error: 'name must be unique'
        })
    }
     const person = {
        name: body.name,
        number: body.number,
        id: generateId(max),
     }

     persons = persons.concat(person)
     res.json(person)
 })



const PORT = process.env.PORT || 3001
app.listen(PORT,() => {
    console.log(`Server running on port ${PORT}`)
})
