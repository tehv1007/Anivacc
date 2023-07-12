import { Quill } from "react-quill";
// import BlotFormatter from "quill-blot-formatter";
// Quill.register("modules/blotFormatter", BlotFormatter);
import ImageResize from "quill-image-resize-module-react";

Quill.register("modules/imageResize", ImageResize);

const toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // toggled buttons
  ["blockquote", "code-block"],

  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: "ordered" }, { list: "bullet" }],
  [{ script: "sub" }, { script: "super" }], // superscript/subscript
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ direction: "rtl" }], // text direction

  [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],

  ["link", "image", "video"],

  ["clean"], // remove formatting button
];

export const modules = {
  imageResize: {
    parchment: Quill.import("parchment"),
    modules: ["Resize", "DisplaySize", "Toolbar"],
  },
  // blotFormatter: {},
  toolbar: toolbarOptions,
};

export const formats = [
  "background",
  "bold",
  "color",
  "font",
  "code",
  "italic",
  "link",
  "size",
  "strike",
  "script",
  "underline",
  "blockquote",
  "header",
  "indent",
  "list",
  "align",
  "direction",
  "code-block",
  "formula",
  "width",
  "height",
  "image",
  "video",
  "float",
];
