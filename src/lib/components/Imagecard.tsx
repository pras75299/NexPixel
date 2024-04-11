import React from "react";
import { FaDownload } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
}

interface ImageCardProps {
  image: Image;
}

const Imagecard: React.FC<ImageCardProps> = ({ image }) => {
  const tags = image.tags.split(",");
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>
            Photo by {image.user} <br />
            <span className="flex items-center justify-start">
              <img
                src={image?.userImageURL || "null"}
                alt={`image by ${image?.user || "no user"}`}
                className="w-10 h-10 ml-2 rounded-full"
              />
            </span>
          </CardTitle>
          <CardDescription>
            <span>
              <strong className="text-blue-800">Views: </strong>
              {image.views}
            </span>
            <span>
              <strong className="text-blue-800">Downloads: </strong>
              {image.downloads}
            </span>
            <span>
              <strong className="text-blue-800">Likes: </strong>
              {image.likes}
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent className="group ">
          {/* <span className="absolute top-3 right-5 cursor-pointer z-10 opacity-0 group-hover:opacity-100">
            <a href={`${image?.largeImageURL}`} download>
              <FaDownload className="dark:text-white text-blue-500" />
            </a>
          </span> */}
          <a
            href={image?.largeImageURL || image.webformatURL}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={image.webformatURL}
              alt=""
              className="w-full h-3/6 customclass-heightimg rounded-xl"
            />
          </a>
        </CardContent>
        <CardFooter>
          <p>
            {tags.map((tag, index) => (
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
    </>
  );
};

export default Imagecard;
