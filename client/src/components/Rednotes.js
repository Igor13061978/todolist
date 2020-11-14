import React from 'react'
import { Link } from 'react-router-dom'

import './Rednotes.css'

export const Rednotes = ({ notes }) => {



    return (
        <div className="row">
            <div className="rednotes">
                {notes.map((note, index) => {
                    return (
                        <div className="col s12 m3">
                            <div className="rednote" key={note._id}>
                                <div className="rednote-card" style={{ background: note.color }}>
                                    <div className="rednote-card-text">
                                        <div className="rednote-card-title" style={{ color: 'white' }}>
                                            <p>{index + 1}. {note.title}</p>
                                        </div>
                                        <div className="rednote-card-location">
                                            <p>{note.location}</p>
                                        </div>
                                        <div className="rednote-card-task">
                                            <p>{note.task}</p>
                                        </div>
                                    </div>
                                    <div className="rednote-card-action">
                                        <Link style={{ background: '#004d40' }} className="waves-effect waves-light btn-small" to={`/editnotes/${note._id}`}>Обработать</Link>
                                        <Link style={{ background: '#ef6c00' }} className="waves-effect waves-light btn-small" to={`/reddetailnote/${note._id}`}>Просмотреть</Link>
                                        <Link style={{ background: '#f50057' }} className="waves-effect waves-light btn-small" to={`/deletenote/${note._id}`}>Удалить</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}


