import React from 'react'
import './Detailnote.css'

export const Detailnote = ({ dnote }) => {
    return (
        <div className="row">
            <div className="col xl6 l12 m12 s12 offset-xl3 ">
                <div className="card large ">
                    <div className="card-content white-text">
                        <span className="card-title">просмотр невыполненной задачи</span>
                        <div className="card-fields">
                            <h3>заголовок</h3>
                            <p>{dnote.title}</p>
                        </div>
                        <div className="card-fields">
                            <h3>адресат</h3>
                            <p>{dnote.location}</p>
                        </div>
                        <div className="card-fields">
                            <h3>описание задачи</h3>
                            <p>{dnote.task}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

