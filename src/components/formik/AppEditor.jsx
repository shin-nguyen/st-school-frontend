import React from 'react'
import { Editor } from "@tinymce/tinymce-react";

export const AppEditor = (props) => {
  return (
      <Editor
        apiKey="cmlltcvw2ydrtenwdgwdwqqrvsje6foe8t5xtyaq6lo2ufki"
        language='vi'
        onInit={(evt,editor) => props.onInit(editor)}
        initialValue={props.initialValue}
        init={{
          menubar: "file edit view insert format tools table tc help",
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | " +
            "bold italic backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          height: props.height? props.height : 300,
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
  )
}