import React from 'react'
import { useContext, useState, useEffect } from 'react'
import {AuthContext} from '../context/AuthContext'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'
import { Link } from 'react-router-dom'
import logo from '../image/logo.png'
import './RegisterPage.css'


export const RegisterPage = () => {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const { loading, request, error, clearError } = useHttp()
    const [form, setForm] = useState({
        email: '', password: ''
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

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', { ...form })
            message(data.message)
        } catch (e) { }
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', { ...form })
            auth.login(data.token, data.userId)
        } catch (e) { }
    }



    return (
        <div className="container-fluid">
            <nav>
                <div className="nav-wrapper">
                    <Link to="/" class="brand-logo center"><img src={logo} alt="logo" /></Link>
                </div>
            </nav>
            <main>
                <div className="row">
                    <div className="col 12 m6">
                        <div className="card large blue darken-3">
                            <div className="card-content white-text">
                                <span className="card-title" style={{ color: 'white' }}>список дел</span>
                                <p>Благодаря тому, что список дел - очень гибкий инструмент, Вы можете использовать любые методы и элементы для создания своего собственного. Я надеюсь, что как Вы опробуете использования сервиса "списка дел" то увидите, насколько
                            он может изменить вашу жизнь.</p>
                                <p>Чувство подавленности. Пропущенные сроки. Склонность забывать о важных вещах. Общий стресс или тревожность, отсутствие жизненных ориентиров.... Это только некоторые из распространенных симптомов, которые люди могут испытывать,
                            не имея списка дел.</p>
                                <p>По своей сути список дел - это список приоритетов. Это также может быть список целей, которых вы хотите достичь в течение всей жизни или в течение дня или недели.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m6">
                        <div className="card large blue darken-3">
                            <div className="card-content white-text">
                                <span className="card-title"style={{ color: 'white' }}>регистрация | авторизация</span>
                                <div className="input-field col s12 ">
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        className="yellow-input"
                                        onChange={changeHandler}
                                    />
                                    <label htmlFor="email">Email</label>
                                </div>
                                <div className="input-field col s12 ">
                                    <input
                                        id="password"
                                        type="password"
                                        name="password"
                                        className="yellow-input"
                                        onChange={changeHandler}
                                    />
                                    <label htmlFor="password">Пароль</label>
                                </div>
                                <div class="but-active col s12 ">
                                    <button
                                        className="btn waves-effect green darken-4"
                                        onClick={loginHandler}
                                        disabled={loading}
                                    >
                                        авторизироваться
                                    </button>
                                    <button
                                        className="btn waves-effect orange"
                                        onClick={registerHandler}
                                        disabled={loading}
                                    >
                                        Зарегистрироваться
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <footer className="page-footer">
                    <div className="footer-copyright">
                        <p>2020</p>
                    </div>
                </footer>
            </footer>
        </div>

    )
}

