import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connection from './database.js'
import routerActas from './routers/acta.routes.js'



const app = express()
dotenv.config()


app.set('port',process.env.port || 3000)
app.use(cors())

app.use(express.json())
app.use('/api', routerActas)

app.get('/',(req,res)=>{
    res.send("Server on")
})

export default  app