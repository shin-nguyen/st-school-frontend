import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Editor } from "@tinymce/tinymce-react";
import {
  getNotes,
  deleteNote,
  updateNote,
} from "../../../services/note-service";
import { generateTimeToNumber } from "../../../utils/utils";
import "./note.css";

const NoteList = (props) => {
  const defaultSize = 10;
  const defaultValueIncreased = 10;

  const course = props?.course;
  const editorRef = useRef("");
  const dispatch = useDispatch();
  const [isShowUpdate, setIsShowUpdate] = useState({ key: -1, status: false });
  const listNote = useSelector((state) => state.note.listNote);
  const [listSize, setListSize] = useState(defaultSize);
  const listNoteShow = listNote?.sort((a, b) => b.id - a.id).slice(0, listSize);

  const updateList = () => {
    listSize + defaultValueIncreased < listNote?.length
      ? setListSize(listSize + defaultValueIncreased)
      : setListSize(listNote.length);
  };

  const handleCancel = (id) => {
    setIsShowUpdate({ key: id, status: !isShowUpdate.status });
    // props.onPlay()
  };

  const handleInputNote = (item) => {
    setIsShowUpdate({ key: item.id, status: !isShowUpdate.status });

    // props.onPause()
  };

  const handleSave = (id) => {
    const content = String(editorRef.current.getContent());
    const data = course ? { id: id, content: content } : null;
    if (data && editorRef.length != 0) {
      dispatch(updateNote(data));
    }
    setIsShowUpdate({ key: id, status: !isShowUpdate.status });
    // props.onPlay()
  };

  useEffect(() => {
    dispatch(getNotes(course?.id));
  }, [dispatch, props]);

  const handleDelete = (id) => {
    dispatch(deleteNote(id));
  };

  const onSeek = (time, video) => {
    props.onSeek(generateTimeToNumber(time), video);
  };

  return (
    <div>
      <div className="list-note">
        {listNoteShow.map((item) => (
          <>
            <div className="list-note-item col">
              <div className="note-header row">
                <div
                  className="col col-sm-1 can-click"
                  onClick={() => onSeek(item.atTime, item.video)}
                >
                  <div className="at-time can-click">{item.atTime}</div>
                </div>
                <div
                  className="col col-sm-9 can-click"
                  onClick={() => onSeek(item.atTime, item.video)}
                >
                  <div style={{ fontSize: "medium", fontWeight: "bolder" }}>
                    {item.video?.name}
                  </div>
                </div>
                <div className="note-action col col-sm-2">
                  <i
                    class="bx bx-sm bxs-pencil mr-20 can-click"
                    onClick={() => handleInputNote(item)}
                  ></i>
                  <i
                    class="bx bx-sm bxs-trash-alt mr-20 can-click"
                    onClick={() => handleDelete(item.id)}
                  ></i>
                </div>
              </div>
              <div className="note-content-container row">
                <div className="col col-sm-1"></div>
                {isShowUpdate.status === true &&
                isShowUpdate.key === item.id ? (
                  <div className={"col col-sm-11"}>
                    <div className={"row mb-20"}>
                      <div className="col col-sm-11">
                        <div className="note-input">
                          <Editor
                            apiKey="cmlltcvw2ydrtenwdgwdwqqrvsje6foe8t5xtyaq6lo2ufki"
                            language="vi"
                            onInit={(evt, editor) =>
                              (editorRef.current = editor)
                            }
                            initialValue={item.content}
                            init={{
                              height: 200,
                              content_style:
                                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                            }}
                          />
                        </div>
                        <div className="note-input-btn-container">
                          <div
                            className="cancel-note-btn note-input-btn can-click"
                            onClick={() => handleCancel()}
                          >
                            Cancel
                          </div>
                          <div
                            className="save-note-btn note-input-btn can-click"
                            onClick={() => handleSave(item.id)}
                          >
                            Save Note
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className={"col col-sm-11"}>
                    <div
                      className="note-content"
                      dangerouslySetInnerHTML={{ __html: item.content }}
                    ></div>
                  </div>
                )}
              </div>
            </div>
          </>
        ))}
      </div>
      <div className="loadmore-container">
        {listSize < listNote?.length ? (
          <div className="loadmore-btn can-click" onClick={() => updateList()}>
            Load more
          </div>
        ) : listSize >= defaultSize && defaultSize < listNote.length ? (
          <div
            className="loadmore-btn can-click"
            onClick={() => setListSize(defaultSize)}
          >
            Hide
          </div>
        ) : null}
      </div>
    </div>
  );
};

function isPropsAreEqual(prevNote, nextNote) {
  return prevNote.course === nextNote.course;
}

export default React.memo(NoteList, isPropsAreEqual);
