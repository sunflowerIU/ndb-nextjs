"use client";
import Image from "next/image";
import { useState } from "react";

function ProfileImage({ data }) {
  const [currentImage, setCurrentImage] = useState(data.image);
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative h-32 w-32">
        <Image
          src={currentImage}
          alt="Profile"
          fill
          className="rounded-full border border-gray-300 object-cover"
        />
      </div>

      <label className="text-text cursor-pointer rounded-lg bg-gray-100 px-3 py-1.5 text-sm font-medium transition hover:bg-gray-200">
        Change Photo
        <input
          type="file"
          accept="image/jpeg,image/png"
          className="hidden"
          name="image"
          onChange={(event) =>
            setCurrentImage(URL.createObjectURL(event.target.files[0]))
          }
        />
      </label>
    </div>
  );
}

export default ProfileImage;
