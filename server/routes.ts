import * as express from 'express'

import db from './db'

const router = express.Router()
router.get('/api/hello', (req, res, next) => {
    res.json('World')
})

router.get('/api/blogs', async (req, res) => {
    try{
        res.json(await db.blogs.all())
    } catch(e){
        console.log(e)
        res.sendStatus(500)
    }
})

export default router