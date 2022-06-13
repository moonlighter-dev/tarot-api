const express = require('express')
const app = express()
const cors = require('cors')
const { request } = require('express')
const { response } = require('express')
const PORT = 8000

app.use(cors())

const deck = {
    'majorArcana': {
        'theFool': {
            'number': 00
        },
        'theMagician': {
            'number': 01
        },
        'theHighPriestess': {
            'number': 02
        },
        'theEmpress': {
            'number': 03
        },
        'theEmperor': {
            'number': 04
        },
        'theHeirophant': {},
        'theLovers': {},
        'theChariot': {},
        'strength': {},
        'theHermit': {},
        'wheelOfFortune': {},
        'justice': {},
        'theHangedMan': {},
        'death': {}
    },
    'minorArcana': {}
}

app.get('/', (req, res) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:card', (req, res) => {
    const card = request.params.card
    if (deck[card]) {
        res.json()
    } else {
        response.json(deck['fool'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log('Server is running...')
})