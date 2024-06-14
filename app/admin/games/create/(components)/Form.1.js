"use client";
import React, { useRef, useState } from "react";
import axios from "axios";
import styles from "../creategame.module.scss";

export const Form = () => {
  const [gameName, setGameName] = useState("");
  const [image, setImage] = useState(null);
  const url = "";

  const [previewPhoto, setPreviewPhoto] = useState(url);
  const [fileName, setFileName] = useState(null);
  const fileInputRef = useRef(null);

  const updatePreview = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      setPreviewPhoto(event.target.result);
      setFileName(file.name);
      handleImageChange(file);
    };
    reader.readAsDataURL(file);
  };

  const clearPreview = () => {
    fileInputRef.current.value = null;
    setPreviewPhoto(url);
    setFileName(null);
    setImage(null);
  };

  const handleImageChange = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result.replace(
        /^data:image\/(png|jpeg|jpg);base64,/,
        ""
      );
      setImage(base64String);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!gameName || !image) {
      alert("Please provide both a name and an image.");
      return;
    }

    const formData = {
      gameName: gameName,
      pictureBase64: image,
    };

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BETGAME_BASE_URL}games`,
        formData
      );

      if (response.status === 200) {
        setGameName("");
        setImage(null);
      }
    } catch (error) {
      console.error("Error uploading data:", error);
    }
  };

  return (
    <>
      <div className="w-full rounded-lg p-6 py-8 bg-[#fdfdfd] text-black relative">
        <form onSubmit={handleSubmit}>
          <div>
            <p className="text-[13px] font-semibold">Game Name</p>
            <input
              type="text"
              placeholder="Enter the game name"
              value={gameName}
              onChange={(e) => setGameName(e.target.value)}
              required
              className="p-3 rounded-md w-full my-1 bg-[#ebebeb] text-[14px] shadow-sm text-black font-semibold"
            />
          </div>
          <div className="flex flex-row gap-x-3 my-4">
            <div className="flex-1 font-semibold">
              <p className="text-[13px] font-semibold">Category</p>
              <input
                type="text"
                value={"Featured"}
                required
                className="p-3 rounded-md w-full my-1 bg-[#ebebeb] shadow-sm text-[14px] text-black"
              />
            </div>
            <div className="flex-1 font-semibold">
              <p className="block text-sm leading-5 text-white">
                Add Thumbnail
              </p>
              <div className="rounded-md shadow-sm">
                <input
                  type="file"
                  accept="image/*"
                  name="photo"
                  id="photo"
                  className={`${styles.custom}`}
                  ref={fileInputRef}
                  onChange={updatePreview}
                />
                <label
                  htmlFor="photo"
                  className="py-3 relative flex items-center px-3 text-[14px] my-1 bg-[#ebebeb] rounded-md text-black transition duration-150 ease-in-out"
                >
                  {fileName ||
                    (url ? (
                      "No new file chosen"
                    ) : (
                      <p className="text-[#8e8e8e]">Upload photo</p>
                    ))}
                  {fileName ? (
                    <div className="absolute right-2" onClick={clearPreview}>
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="x-circle w-4 h-4"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  ) : (
                    <div className="absolute right-2">
                      <svg
                        width="18"
                        height="15"
                        viewBox="0 0 18 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 8.82353H1.8V13.2353H16.2V8.82353H18V13.2353C18 14.2147 17.199 15 16.2 15H1.8C0.81 15 0 14.2147 0 13.2353V8.82353ZM9 0L4.014 4.81765L5.292 6.07059L8.1 3.30882V11.4706H9.9V3.30882L12.717 6.07059L13.995 4.80882L9 0Z"
                          fill="#404040"
                        />
                      </svg>
                    </div>
                  )}
                </label>
              </div>
            </div>
          </div>
          <div>
            <button className=" text-white p-2 w-full bg-[#5067EB] rounded-md font-semibold text-[14px]">
              Submit
            </button>
          </div>
        </form>
        <div>Loadingg</div>
      </div>
    </>
  );
};
