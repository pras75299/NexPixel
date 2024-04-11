"use client";
import React, { useState, useEffect } from "react";
import Imagecard from "@/lib/components/Imagecard";
import Imagesearch from "@/lib/components/Imagesearch";

import Navbar from "@/lib/components/navbar";
interface Image {
  id: number;
  userImageURL: string;
  webformatURL: string;
  largeImageURL: string;
  tags: string;
  user: string;
  views: number;
  downloads: number;
  likes: number;
  image: any;
  // Define other properties of the image here
}

interface PixabayResponse {
  hits: Image[];
  // Define other properties of the Pixabay response if needed
}

export default function Home() {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [term, setTerm] = useState<string>("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.NEXT_PUBLIC_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data: PixabayResponse) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  const handleSearch = (text: string) => {
    setTerm(text);
  };
  return (
    <>
      <Navbar />

      <div className="container mx-auto pt-9">
        <Imagesearch searchText={handleSearch} />

        {!isLoading && images.length === 0 && (
          <h1 className="text-5xl text-center mx-auto mt-32">
            No Images Found
          </h1>
        )}

        {isLoading ? (
          <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((image) => (
              <Imagecard key={image.id} image={image} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
