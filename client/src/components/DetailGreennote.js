import React from 'react'
import './DetailGreennote.css'

export const DetailGreennote = ({ note }) => {
    return (
        <div className="row">
            <div className="col xl6 l12 m12 s12 offset-xl3 ">
                <div className="card large ">
                    <div className="card-content white-text">
                        <span className="card-title">просмотр выполненной задачи</span>
                        <div className="card-fields">
                            <h3>заголовок</h3>
                            <p>{note.title}</p>
                        </div>
                        <div className="card-fields">
                            <h3>адресат</h3>
                            <p>{note.location}</p>
                        </div>
                        <div className="card-fields">
                            <h3>описание задачи</h3>
                            <p>{note.task}</p>
                        </div>
                        <div className="card-fields">
                            <h3>выполнение задачи</h3>
                            <p>{note.work}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

