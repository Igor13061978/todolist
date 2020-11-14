import React, { useContext } from 'react'
import { useState, useEffect } from 'react'
import './AuthPage.css'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'
import { AuthContext } from '../context/AuthContext'
import { Link } from 'react-router-dom'
import list2 from '../image/list2.png'
import logBig from '../image/logBig.png'
import list from '../image/list.png'

export const AuthPage = () => {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const { loading, request, error, clearError } = useHttp()
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    useEffect(() => {
        window.M.updateTextFields()
    }, [])

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value })
    }

    const loginHandler = async() => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form })
            auth.login(data.token, data.userId)
        } catch (e) {}
    }


    return ( <
        div >
        <
        nav >
        <
        div className = "nav-wrapper" >
        <
        a href = "#"
        className = "brand-logo center" > < img src = "./img/logo.png"
        alt = "" / > < /a> <
        /div> <
        /nav> <
        main >
        <
        div className = "row" >
        <
        div className = "col 12 m6" >
        <
        div className = "card large blue-grey darken-1" >
        <
        div className = "card-content white-text" >
        <
        span className = "card-title" > список дел < /span> <
        p > Благодаря тому, что список дел - очень гибкий инструмент, Вы можете использовать любые методы и элементы для создания своего собственного.Я надеюсь, что как Вы опробуете использования сервиса "списка дел"
        то увидите, насколько он может изменить вашу жизнь. < /p> <
        p > Чувство подавленности.Пропущенные сроки.Склонность забывать о важных вещах.Общий стресс или тревожность, отсутствие жизненных ориентиров....Это только некоторые из распространенных симптомов, которые люди могут испытывать,
        не имея списка дел. < /p> <
        p > По своей сути список дел - это список приоритетов.Это также может быть список целей, которых вы хотите достичь в течение всей жизни или в течение дня или недели. < /p> <
        /div> <
        /div> <
        /div> <
        div className = "col s12 m6" >
        <
        div className = "card large blue-grey darken-1" >
        <
        div className = "card-content white-text" >
        <
        span className = "card-title" > регистрация | авторизация < /span> <
        div className = "input-field" >
        <
        input id = "email"
        type = "email"
        name = "email"
        className = "yellow-input"
        onChange = { changeHandler }
        /> <
        label htmlFor = "email" > Email < /label> <
        /div> <
        div className = "input-field" >
        <
        input id = "password"
        type = "password"
        name = "password"
        className = "yellow-input"
        onChange = { changeHandler }
        /> <
        label htmlFor = "password" > Пароль < /label> <
        /div> <
        div class = "but-active col s8 offset-s2" >
        <
        button className = "btn waves-effect orange"
        onClick = { registerHandler }
        disabled = { loading } >
        Зарегистрироваться <
        /button> <
        button className = "btn waves-effect orange"
        onClick = { loginHandler }
        disabled = { loading } >
        авторизироваться <
        /button> <
        /div>

        <
        /div> <
        /div> <
        /div> <
        /div> <
        /main> <
        footer >
        <
        footer className = "page-footer" >
        <
        div className = "footer-copyright" >
        <
        p > 2020 < /p> <
        /div> <
        /footer> <
        /footer> <
        /div>


    )
}