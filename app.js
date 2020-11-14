const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const path = require('path')

const app = express()

//для того, чтобы определялось body
app.use(express.json({extended: true}))

app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/note', require('./routes/note.routes'))

if (process.env.NODE_ENV === 'production') {
    app.use( express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT =  process.env.PORT || 5000

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify:false
        })
        app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`))

    } catch (e) {
        console.log('Ошибка сервера', e.message)
        process.exit(1)
    }
}

start()

