import React, { useCallback, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useHttp } from '../hooks/http.hook'
import { AuthContext } from '../context/AuthContext'
import { Loader } from '../components/Loader'
import { DetailGreennote } from '../components/DetailGreennote'

export const DetailGreenPage = () => {
    const { token } = useContext(AuthContext)
    const { request, loading } = useHttp()
    const [note, setNote] = useState(null)
    const noteId = useParams().id

    const getNote = useCallback(async () => {
        try {
            const fetched = await request(`/api/note/${noteId}`, 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setNote(fetched)
        } catch (e) { }
    }, [token, noteId, request])

    useEffect(() => {
        getNote()
    }, [getNote])

    if (loading) {
        return <Loader />
    }

    return (
        <>
            { !loading && note && <DetailGreennote note={note} />}
        </>
    )
}