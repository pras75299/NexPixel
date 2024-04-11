import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
interface Image {
  id: number;
  webformatURL: string;
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
          <CardTitle>Photo by {image.user}</CardTitle>
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
        <CardContent>
          <a href={image.webformatURL} target="_blank" rel="noreferrer">
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
                className="inline-block bg-blue-300 rounded-full px-3 py-1 text-sm font-semibold text-blue-900 mr-2 mb-2"
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
