import express from 'express'
import cors from 'cors'
import fs from 'fs'
import path from 'path'

const app = express()
const PORT = process.env.PORT || 3000

// Commented out MySQL connection
// import mysql from 'mysql2'
// const conn = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'procesos'
// })

app.use(cors({ origin: '*' }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

// Function to read JSON file
const readJSONFile = (callback) => {
  const filePath = path.join('./backend', 'contrataciones.json')
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading JSON file:', err)
      callback(err, null)
      return
    }
    try {
      const jsonData = JSON.parse(data)
      callback(null, jsonData)
    } catch (parseErr) {
      console.error('Error parsing JSON file:', parseErr)
      callback(parseErr, null)
    }
  })
}

app.get('/contrataciones', (req, res) => {
  readJSONFile((err, data) => {
    if (err) {
      res.status(500).send('Internal Server Error')
      return
    }
    res.json(data)
  })
})

app.get('/contrataciones/:table/:value', (req, res) => {
  const { table, value } = req.params
  readJSONFile((err, data) => {
    if (err) {
      res.status(500).send('Internal Server Error')
      return
    }
    const filteredData = data.filter(item => item[table] === value)
    res.json(filteredData)
  })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
