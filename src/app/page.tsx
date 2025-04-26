'use client';
import { useState, useEffect } from "react";
import simpleFetch from "./common/SimpleFetch";

export default function Home() {

  const [files, setFiles] = useState([]);

  useEffect(() => {
    (async () => {
        const res = await simpleFetch('files');
        const files = res?.data?.data || [];
      setFiles(files);
      console.log(files)
    })();
  }, []);


  return (
    <div className="item-container centercontent fillparent">
      {files.map((file: any) => <div key={file._id}>{file.name}</div>)}
    </div>
  );
}