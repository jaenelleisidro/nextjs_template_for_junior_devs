'use client';
import { useState, useEffect } from "react";
import api from "./common/Api";

export default function Home() {

  const [files, setFiles] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await api.get('files');
      const files = res?.data?.data || [];
      setFiles(files);
      console.log(files)
    })();
  }, []);

  return (
    <div className="item-container centercontent fillparent">
      {files.map((file: any) => <div>{file.name}</div>)}
    </div>
  );
}