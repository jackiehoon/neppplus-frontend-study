import { useRef } from "react";

const Ref = () => {
  const fileEl = useRef(null);

  const handleUpload = () => {
    fileEl.current.click();
  };

  return (
    <div>
      <input type="file" style={{ display: "none" }} ref={fileEl} />
      <button onClick={handleUpload}>파일 업로드</button>
    </div>
  );
};

export default Ref;
