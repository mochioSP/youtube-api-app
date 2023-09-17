import axios from "axios";
import { useCallback, useState } from "react";

import type { Video } from "../components/type/api/Video";

export const useAnythingVideo = () => {
  const [videos, setVideos] = useState<Array<Video>>([]);

  const getAnythingVideo = useCallback((searchWord: string) => {
    console.log(searchWord);
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/
          search?part=snippet&maxResults=10&order=viewCount
          &q=${searchWord}&relevanceLanguage=ja&type=video
          &key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        setVideos(res.data.items);
      })
      .catch((error) => {
        console.log("失敗:", error);
      });
  }, []);

  return { getAnythingVideo, videos };
};
