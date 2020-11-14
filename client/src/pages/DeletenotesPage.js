import React, { useCallback, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { useHttp } from '../hooks/http.hook'
import { AuthContext } from '../context/AuthContext'
import { Loader } from '../components/Loader'

export const DeletenotesPage = () => {
    const { token } = useContext(AuthContext)
    const history = useHistory()
    const { request, loading } = useHttp()
    const [notes, setNotes] = useState(null)
    const noteId = useParams().id

    const delNotes = useCallback(async () => {
        try {
            const fetched = await request(`/api/note/${noteId}`, 'DELETE', null, {
                Authorization: `Bearer ${token}`
            })
            setNotes(fetched)
        } catch (e) { }
    }, [token, noteId, request])

    useEffect(() => {
        delNotes()
    }, [delNotes, notes])

    if (loading) {
        return <Loader />
    }
    history.push('/rednotes')


    return (
        <>
            {/* /* !loading && notes && <Rednotes notes={notes} /> */ }
        </>
    )
}