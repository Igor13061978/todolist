import React, { useCallback, useContext, useEffect, useState } from 'react'
import { useHttp } from '../hooks/http.hook'
import { AuthContext } from '../context/AuthContext'
import { Loader } from '../components/Loader'
import { Greennotes } from '../components/Greennotes'

export const GreennotesPage = () => {
    const [notes, setNotes] = useState([])
    const { request, loading } = useHttp()
    const { token } = useContext(AuthContext)

    const fetchNotes = useCallback(async () => {
        try {
            const fetched = await request('/api/note/greennotes', 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setNotes(fetched)
        } catch (e) { }
    }, [token, request])

    


    useEffect(() => {
        fetchNotes()
    }, [fetchNotes])

    if (loading) {
        return <Loader />
    }


    return (
        <>
            {!loading && <Greennotes notes={notes} />}
        </>
    )
}