// MyEditor.tsx
import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface MyEditorProps {
  content: string;
  onChange: (value: string) => void;
}

const MyEditor: React.FC<MyEditorProps> = ({ content, onChange }) => {
  
  const modules = {
    toolbar: [
      [{ header: 1 }, "bold", "italic", "image"],
      [{ list: "ordered" }, { list: "bullet" }, "link"],
      ["blockquote", "code-block"],
    ],
  };

  return (
    <div>
      <ReactQuill value={content} onChange={onChange} modules={modules} />
    </div>
  );
};

export default MyEditor;
