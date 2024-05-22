"use client";
import Image from "next/image";
import React, { useState } from "react";
import "./style.scss";
import placeholder from "../../../../public/images/placeholder.png";
import LoaderInner from "../../../../public/images/loaderInner.png";
import { Spinner } from "react-bootstrap";
export default function Uploadart(props: any) {
  const [file, setFile]: any = useState();
  const [uploadStatus, setUploadStatus] = useState("");
  const [loading, setLoading] = useState(false);
  function handleChange(e: any) {
    setLoading(true);
    setUploadStatus("File Uploading...");
    setTimeout(() => {
      setUploadStatus("File Saving in Blockchain...");
    }, 2000);

    setTimeout(() => {
      setLoading(false);
      setUploadStatus("File uploaded.");
      props.uploadResponse(e.target.files[0]);
    }, 4000);

    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <section className="uploadArtSection">
      <h2>Upload Art Block</h2>
      <div className="imagePreview">
        <Image
          src={file?.length > 0 ? file : placeholder}
          alt="previewImage"
          height={200}
          width={200}
        />
      </div>
      <span className="btnWrap">
        <label>Upload Artblock</label>
        <input type="file" onChange={handleChange} />
      </span>
      
      {loading && (
        <div className="loaderWrapper">
            <div className="loaderOuterWrapper">
                <div className="loaderInnerWrapper">
                    <Spinner animation="border" variant="light" />
                    <Image
                    className="loaderInner zoom-in-zoom-out"
                    src={LoaderInner}
                    alt="LoaderInner"
                    />
                    <div className="uploadStatus">
                      {uploadStatus && <p>{uploadStatus}</p>}
                    </div>
                </div> 
            </div>
        </div>
      )}
    </section>
  );
}
