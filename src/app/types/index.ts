export interface VideoAPIResponse {
  total: number;
  totalHits: number;
  hits: VideoHit[];
}

export interface VideoHit {
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

export interface VideoSizes {
  large: VideoDetails;
  medium: VideoDetails;
  small: VideoDetails;
  tiny: VideoDetails;
}

export interface VideoDetails {
  url: string;
  width: number;
  height: number;
  size: number;
  thumbnail: string;
}


export interface Image {
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

export interface PixabayResponse {
  hits: Image[];
  // Define other properties of the Pixabay response if needed
}