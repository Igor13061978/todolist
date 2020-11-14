import React, { useContext, useEffect, useState } from 'react'
import { useHttp } from '../hooks/http.hook'
import { useHistory } from 'react-router-dom'
import { useMessage } from '../hooks/message.hook'
import { AuthContext } from '../context/AuthContext'

import  './CreatenotesPage.css'

export const CreatenotesPage = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)
    const message = useMessage()
    const { loading, request, error, clearError } = useHttp()
    const [form, setForm] = useState({
        title: '', location: '', task: ''
    })

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    useEffect(() => {
        window.M.updateTextFields()
    }, [])

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const vvod = async () => {
        try {
            const data = await request('/api/note/generate', 'POST', { ...form }, {
                Authorization: `Bearer ${auth.token}`
            })
            message(data.message)
            history.push('/rednotes')
        } catch (e) { }
    }

    return (
        <div className="greate-note">
            <div className="row">
                <div className="col xl6 l12 m12 s12 offset-xl3 ">
                        <div className="card large ">
                            <div className="card-content white-text">
                                <span className="card-title">добавить новую запись</span>
                                <div className="input-field col s12 ">
                                    <input
                                        type="text"
                                        name="title"
                                        className="input"
                                        value={form.title}
                                        onChange={changeHandler}
                                    />
                                    <label htmlFor="name">Введите заголовок</label>
                                </div>
                                <div className="input-field col s12 ">
                                    <input
                                        type="text"
                                        name="location"
                                        className="input"
                                        value={form.location}
                                        onChange={changeHandler}
                                    />
                                    <label htmlFor="name">Введите адресата</label>
                                </div>
                                <div className="input-field col s12 ">
                                    <textarea
                                        rows="10"
                                        cols="20"
                                        className="materialize-textarea"
                                        type="text"
                                        name="task"
                                        value={form.task}
                                        onChange={changeHandler}
                                    >
                                    </textarea>
                                <label htmlFor="textarea1">Введите описание</label>
                                </div>
                                <div class="but-active col s12 ">
                                    <button
                                        className="btn waves-effect green darken-4"
                                        onClick={vvod}
                                        disabled={loading}
                                        >
                                            Добавить запись
                                    </button>
                                    
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

