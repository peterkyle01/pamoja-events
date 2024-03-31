"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { createClient } from "@/lib/supabase/client";
import { cn } from "@/lib/utils";
import { Skeleton } from "../ui/skeleton";
import { Input } from "../ui/input";

export default function ImagePicker({
  uid,
  url,
  className,
  onUpload,
}: {
  uid: string;
  url: string;
  className: string;
  onUpload: (filePath: string) => void;
}) {
  const supabase = createClient();
  const [avatarUrl, setAvatarUrl] = useState(url);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    async function downloadImage(path: string) {
      try {
        const { data, error } = await supabase.storage
          .from("events")
          .download(path);
        if (error) {
          throw error;
        }

        const url = URL.createObjectURL(data);
        setAvatarUrl(url);
      } catch (error) {
        console.log("Error downloading image: ", error);
      }
    }

    if (url) downloadImage(url);
  }, [url, supabase]);

  const uploadAvatar = async (event: any) => {
    try {
      setUploading(true);

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("You must select an image to upload.");
      }

      const file = event.target.files[0];
      const fileExt = file.name.split(".").pop();
      const filePath = `${uid}-${Math.random()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from("events")
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      onUpload(filePath);
    } catch (error) {
      alert("Error uploading avatar!");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      {avatarUrl ? (
        <div className={cn([className, "relative"])}>
          <Image fill src={avatarUrl} alt="Avatar" className="object-cover" />
        </div>
      ) : (
        <>
          {uploading ? (
            <Skeleton onClick={uploadAvatar} className={cn([className, ""])} />
          ) : (
            <Input type="file" onChange={uploadAvatar} />
          )}
        </>
      )}
    </div>
  );
}
