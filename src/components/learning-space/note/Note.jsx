import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Editor } from "@tinymce/tinymce-react";
import { getNotes, addNote, deleteNote } from "../../../services/note-service"
import { generateTimeToString } from "../../../utils/utils"
import './note.css'

const Note = (props) => {
    const index = props?.index
    const video = props?.video
    const course = props?.course
    const time = props?.time;
    const listNote = useSelector(state => state.note.listNote);
    const listNoteShow = listNote?.sort((a, b) => b.id - a.id);
    const editorRef = useRef(null);
    const dispatch = useDispatch();
    const [isShow, setIsSchow] = useState(false);

    useEffect(() => {
        dispatch(getNotes(course?.id));
        console.log(listNoteShow)
    }, [dispatch, props]);

    const handleInputNote = () => {
        setIsSchow(!isShow)
        // props.onPause()
    }

    const handleCancel = () => {

    }

    const handleSave = () => {
        const content = String(editorRef.current.getContent());
        const data = course ? { course: course, atTime: generateTimeToString(time), atVideo: "Lesson " + index + 1 + "." + video?.name, content: content } : null
        if (data && editorRef.length != 0) {
            dispatch(addNote(data));
        }
        setIsSchow(!isShow)

    }

    const handleDelete = (id) => {
        dispatch(deleteNote(id))
    }

    return (
        <div>
            <div className="col can-click">
                <div className={'show-' + !isShow} onClick={() => handleInputNote()}>
                    <div className='new-note-btn'>
                        <div className="col col-sm-11">
                            <div className='new-note-btn-content'>
                                Create note at {generateTimeToString(time)}
                            </div>
                        </div>
                        <div className="col col-sm-1">
                            <div className='new-note-btn-icon'>
                                <i class='bx bx-sm bxs-plus-circle' ></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'show-' + isShow}>
                    <div className={'row mb-20'}>
                        <div className="col col-sm-1 can-click">
                            <div className="at-time">
                                {generateTimeToString(time)}
                            </div>
                        </div>
                        <div className="col col-sm-11">
                            <div className="note-input">
                                <Editor
                                    apiKey="cmlltcvw2ydrtenwdgwdwqqrvsje6foe8t5xtyaq6lo2ufki"
                                    language='vi'
                                    onInit={(evt, editor) => (editorRef.current = editor)}
                                    init={{
                                        height: 200,
                                        content_style:
                                            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                                    }}
                                />
                            </div>
                            <div className="note-input-btn-container">
                                <div className="cancel-note-btn note-input-btn" onClick={() => handleInputNote()} >Cancel</div>
                                <div className="save-note-btn note-input-btn" onClick={() => handleSave()}>Save Note</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="list-note">
                {
                    listNoteShow.map((item) => (
                        <>
                            <div className="list-note-item col">
                                <div className="note-header row">
                                    <div className="col col-sm-1 can-click">
                                        <div className="at-time can-click">
                                            {item.atTime}
                                        </div>
                                    </div>
                                    <div className="col col-sm-9 can-click" >
                                        <div style={{ fontSize: 'medium', fontWeight: 'bolder' }}>
                                            {item.atVideo}
                                        </div>
                                    </div>
                                    <div className="note-action col col-sm-2">
                                        <i class='bx bx-sm bxs-pencil mr-20 can-click' ></i>
                                        <i class='bx bx-sm bxs-trash-alt mr-20 can-click' onClick={() => handleDelete(item.id)}></i>
                                    </div>
                                </div>
                                <div className="note-content-container row">
                                    <div className="col col-sm-1"></div>
                                    <div className="col col-sm-11">
                                        <div className="note-content" dangerouslySetInnerHTML={{ __html: item.content }}></div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))
                }
            </div>
        </div>
    )
}

export default Note