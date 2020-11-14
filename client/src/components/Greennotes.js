import React from 'react'
import { Link} from 'react-router-dom'

import './Greennotes.css'

export const Greennotes = ({ notes }) => {
    

    return (
        <div className="row">
            <div className="greennotes">
                {notes.map((note, index) => {
                    return (
                        <div className="col s12 m3">
                            <div className="greennote" key={note._id}>
                                <div className="greennote-card" style={{ background: note.color }}>
                                    <div className="greennote-card-text">
                                        <div className="greennote-card-title" style={{ color: 'white' }}>
                                            <p>{index + 1}. {note.title}</p>
                                        </div>
                                        <div className="greennote-card-location">
                                            <p>{note.location}</p>
                                        </div>
                                        <div className="greennote-card-task">
                                            <p>{note.task}</p>
                                        </div>
                                        <div className="greennote-card-work">
                                            <p>{note.work}</p>
                                        </div>
                                    </div>
                                    <div className="greennote-card-action">
                                        <Link style={{ background: '#ef6c00' }} className="waves-effect waves-light btn-small" to={`/greendetailnote/${note._id}`}>Просмотреть</Link>
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


