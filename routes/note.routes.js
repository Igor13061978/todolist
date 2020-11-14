const { Router } = require('express')
const Note = require('../models/Note')
const auth = require('../middleware/auth.middleware')
const { check, validationResult } = require('express-validator')
const router = Router()

router.post(
    '/generate', auth,
    [
        check('title', 'Все поля должны быть заполнены').isLength({ min: 1 }),
        check('location', 'Все поля должны быть заполнены').isLength({ min: 1 }),
        check('task', 'Все поля должны быть заполнены').isLength({ min: 1 }),
    ],
    auth, async (req, res) => {
        try {
            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некорректный данные при вводе'
                })
            }

            const
                { title, location, task, work } = req.body



            const note = new Note({ title, location, task, work, createNo: new Date(), color: '#c2185b', owner: req.user.userId })

            await note.save()

            res.status(201).json({ note, message: "Запись успешно внесена" })

        } catch (e) {
            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
        }
    })

router.get('/rednotes', auth, async (req, res) => {
    try {
        const notes = await Note.find({ owner: req.user.userId, color: '#c2185b' })
        res.json(notes)
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})

router.get('/greennotes', auth, async (req, res) => {
    try {
        const notes = await Note.find({ owner: req.user.userId, color: 'green' })
        res.json(notes)
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})

router.put('/:id', auth, async (req, res) => {
    try {
        const note = await Note.findOneAndUpdate({ _id: req.params.id }, req.body)
        const color = await Note.findOneAndUpdate({ _id: req.params.id }, { color: 'green' })
        return res.status(200).json({ note, color, message: ' Запись отредактирована' })
    } catch (e) {
        return res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
});

router.get('/:id', auth, async (req, res) => {
    try {
        const detnote = await Note.findById(req.params.id)
        res.json(detnote)
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})

router.delete('/:id', auth, async (req, res) => {
    try {
        const note = await Note.findOneAndDelete({ _id: req.params.id }, req.body)
        return res.status(200).json({ note, message: ' Запись удалена' })
    } catch (e) {
        return res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
});



// router.delete('/:id', auth, async (req, res) => {
//     try {
//         const item = await Item.findById(req.params.id, { owner: req.user.userId });
//         if (!item) throw Error('No item found');

//         const removed = await item.remove();
//         if (!removed)
//             throw Error('Something went wrong while trying to delete the item');

//         res.status(200).json({ success: true });
//     } catch (e) {
//         res.status(400).json({ msg: e.message, success: false });
//     }

// })

// router.delete ('/:id', auth, async (req, res) => {

//     try {
//         const id = req.params.id
//         const result = await Note.findByIdAndDelete(id)
//         res.status(200).json({result,
//             message: 'Удалено'
//         })

//     } catch (e) {
//         res.status(400).json({ msg: e.message})
//     }
// })



module.exports = router
