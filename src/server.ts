import express from 'express'
import { connect } from 'mongoose'
import { personRouter } from './app/routes/person-routes'
import { feedbackRouter } from './app/routes/feedback-routes'
import { sectorRouter } from './app/routes/sector-routes'

const app = express()

connect("mongodb://localhost/feedback-sys")

app.use(express.json())
app.use("/api/feedback", feedbackRouter)
app.use("/api/person", personRouter)
app.use("/api/sector", sectorRouter)

app.listen(8080, function () {
    console.log('on em localhost')
})