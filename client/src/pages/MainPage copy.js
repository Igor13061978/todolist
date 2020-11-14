import React from 'react'
import {NavLink} from 'react-router-dom'
import './MainPage.css'
import logo from '../image/logo.png'
import list1 from '../image/list1.png'


export const MainPage = () => {
    return (
        <div className="flex">
            <div className="header">
                <div className="logo">
                    <div className="logo_img">
                        <img src={logo} alt="logo" />
                    </div>
                </div>
                <div className="nav">
                    <ul>
                        <li><NavLink to="/signup">Регистрация</NavLink></li>
                        <li><NavLink to="/login">Авторизация</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className="present">
                <div className="present-text">
                    <h1>сервис<br />"список дел"</h1>
                    <p>Благодаря тому, что список дел - очень гибкий инструмент, Вы можете использовать любые методы и элементы для создания своего собственного. Я надеюсь, что как Вы опробуете использования сервиса "списка дел" то увидите, насколько он может изменить вашу жизнь.</p>
                    <p>Чувство подавленности. Пропущенные сроки. Склонность забывать о важных вещах. Общий стресс или тревожность, отсутствие жизненных ориентиров.... Это только некоторые из распространенных симптомов, которые люди могут испытывать, не имея списка дел.</p>
                    <p>По своей сути список дел - это список приоритетов. Это также может быть список целей, которых вы хотите достичь в течение всей жизни или в течение дня или недели.</p>
                </div>
                <div className="present-img">
                    <img src={list1} alt="Фото списка дел" />
                </div>
            </div>
        </div>
    )
}