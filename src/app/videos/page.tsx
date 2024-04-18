"use client";
import Imagesearch from "@/lib/components/Imagesearch";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { VideoAPIResponse, VideoHit, VideoSizes, VideoDetails } from "../types";

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
        setVideos(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  const handleSearch = (text: string) => {
    setTerm(text);
  };
  return (
    <div className="container mx-auto pt-9">
      <Imagesearch searchText={handleSearch} />

      {!isLoading && videos.length === 0 && (
        <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1>
      )}

      {isLoading ? (
        <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
          {videos.map((vid) => (
            <Card key={vid.id}>
              <CardHeader>
                <CardTitle>
                  Video by {vid.user} <br />
                  <span className="flex items-center justify-start">
                    <img
                      src={vid.videos?.large?.thumbnail || "null"}
                      alt={`image by ${vid?.user || "no user"}`}
                      className="w-10 h-10 ml-2 rounded-full"
                    />
                  </span>
                </CardTitle>
                <CardDescription>
                  <span>
                    <strong className="text-blue-800">Views: </strong>
                    {vid.views}
                  </span>
                  <span>
                    <strong className="text-blue-800">Downloads: </strong>
                    {vid.downloads}
                  </span>
                  <span>
                    <strong className="text-blue-800">Likes: </strong>
                    {vid.likes}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent className="group ">
                <video
                  controls
                  autoPlay
                  className="w-full h-3/6 customclass-heightimg rounded-xl"
                >
                  <source src={vid.videos?.large?.url} type="video/mp4" />
                </video>
              </CardContent>
              <CardFooter>
                <p>
                  {vid.tags.split(",").map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-blue-200 rounded-full px-2 py-1 text-sm font-normal text-blue-900 mr-2 mb-2"
                    >
                      #{tag}
                    </span>
                  ))}
                </p>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
