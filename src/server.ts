import express from 'express'
import cors from 'cors'

import { createCategory, readCategories, updateCategory, deleteCategory, loadCategories } from './categories'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/categories', createCategory)
app.get('/categories', readCategories)
app.put('/categories/:id', updateCategory)
app.delete('/categories/:id', deleteCategory)

app.listen(8080, () => {

    loadCategories()

    console.log(`Server is running on http://localhost:8080`);
})