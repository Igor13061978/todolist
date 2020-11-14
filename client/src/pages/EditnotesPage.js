import React, { useContext, useEffect, useState, useCallback } from 'react'
import { useHttp } from '../hooks/http.hook'
import { useHistory, useParams } from 'react-router-dom'
import { useMessage } from '../hooks/message.hook'
import { AuthContext } from '../context/AuthContext'
import { Detailnote } from '../components/Detailnote'
import { Loader } from '../components/Loader'


import './EditnotesPage.css'

export const EditnotesPage = () => {
    const history = useHistory()
    const { token } = useContext(AuthContext)
    const auth = useContext(AuthContext)
    const message = useMessage()
    const { loading, request, error, clearError } = useHttp()
    const noteId = useParams().id
    const [note, setNote] = useState([])
    const [dnote, setDnote] = useState(null)

    const getNote = useCallback(async () => {
        try {
            const fetched = await request(`/api/note/${noteId}`, 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setDnote(fetched)
        } catch (e) { }
    }, [token, noteId, request])


    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    useEffect(() => {
        window.M.updateTextFields()
        getNote()

    }, [getNote])
    const changeHandler = event => {
        setNote({ ...note, [event.target.name]: event.target.value })
    }

    const update = async () => {
        try {
            const data = await request(`/api/note/${noteId}`, 'PUT', note, {
                Authorization: `Bearer ${auth.token}`
            })
            message(data.message)
            history.push('/greennotes')
        } catch (e) { }
    }
    if (loading) {
        return <Loader />
    }

    return (
            <div className="row">
                {!loading && dnote && <Detailnote dnote={dnote} />}
                <div className="col xl6 l12 m12 s12 offset-xl3 ">
                        <div className="card large ">
                            
                            <div className="card-content white-text">
                                <span className="card-title">Сделать отметку выполненной задачи</span>
                                <div className="input-field col s12 ">
                                    <textarea
                                        rows="10"
                                        cols="20"
                                        className="materialize-textarea"
                                        type="text"
                                        name="work"
                                        value={note.task}
                                        onChange={changeHandler}
                                    >
                                    </textarea>
                                    <label htmlFor="textarea1">Введите выполненные работы</label>
                                </div>
                                <div class="but-active col s12 ">
                                    <button
                                        className="btn green darken-3 white-text"
                                        onClick={update}
                                        disabled={loading}
                                    >
                                        Внести изменения
                                    </button>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}


