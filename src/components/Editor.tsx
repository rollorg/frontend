// MyEditor.tsx
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const MyEditor: React.FC = () => {
  const [content, setContent] = useState<string>("");

  const handleChange = (value: string) => {
    setContent(value);
  };

  const modules = {
    toolbar: [
      [{ header: 1 }, "bold", "italic", "image"],
      [{ list: "ordered" }, { list: "bullet" }, "link"],
      ["blockquote", "code-block"],
    ],
  };

  return (
    <div>
      <ReactQuill value={content} onChange={handleChange} modules={modules} />
    </div>
  );
};

export default MyEditor;
