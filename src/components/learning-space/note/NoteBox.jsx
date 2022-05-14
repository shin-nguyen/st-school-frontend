import React from 'react'

const NoteBox = (props) => {
    const editorRef = useRef(null);
    const [isShow, setIsSchow] = useState(false);

    const onSave = () => {
        setIsSchow(!isShow)
        props.onSave(String(editorRef.current.getContent()))
    }

    const onCancel = () => {
        setIsSchow(!isShow)
        props.onCancel()
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
                                <div className="cancel-note-btn note-input-btn" onClick={() => onCancel()} >Cancel</div>
                                <div className="save-note-btn note-input-btn" onClick={() => onSave()}>Save Note</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function isPropsAreEqual(prevNote, nextNote) {
    prevNote.time === nextNote.time;
}

export default React.memo(NoteBox, isPropsAreEqual)
