"use client";
import Imagecard from "@/lib/components/Imagecard";
import Imagesearch from "@/lib/components/Imagesearch";
import { useEffect, useState } from "react";
interface VideoAPIResponse {
  total: number;
  totalHits: number;
  hits: VideoHit[];
}

interface VideoHit {
  id: number;
  pageURL: string;
  type: string;
  tags: string;
  duration: number;
  videos: VideoSizes;
  views: number;
  downloads: number;
  likes: number;
  comments: number;
  user_id: number;
  user: string;
  userImageURL: string;
}

interface VideoSizes {
  large: VideoDetails;
  medium: VideoDetails;
  small: VideoDetails;
  tiny: VideoDetails;
}

interface VideoDetails {
  url: string;
  width: number;
  height: number;
  size: number;
  thumbnail: string;
}

export default function VideoPage() {
  const [videos, setVideos] = useState<VideoHit[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [term, setTerm] = useState<string>("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/videos/?key=${process.env.NEXT_PUBLIC_API_KEY}&q=${term}`
    )
      .then((res) => res.json())
      .then((data: VideoAPIResponse) => {
        console.log(data.hits);
        setVideos(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  const handleSearch = (text: string) => {
    setTerm(text);
  };
  return (
    <div className="mt-20 text-blue-500">
      VideoPage
      <div className="container mx-auto pt-9">
        <Imagesearch searchText={handleSearch} />

        {!isLoading && videos.length === 0 && (
          <h1 className="text-5xl text-center mx-auto mt-32">
            No Images Found
          </h1>
        )}

        {isLoading ? (
          <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
            {videos.map((vid) => (
              <div key={vid.id}>{vid.views}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
