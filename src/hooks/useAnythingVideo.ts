import axios from "axios";
import { useCallback, useState } from "react";

import type { Video } from "../components/type/api/Video";

export const useAnythingVideo = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [videos, setVideos] = useState<Array<Video>>([]);

  const getAnythingVideo = useCallback((searchWord: string) => {
    setLoading(true);
    console.log("getAnythingVideo");
    console.log(searchWord);

    const URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=viewCount&q=${searchWord}&relevanceLanguage=ja&type=video&key=${process.env.REACT_APP_API_KEY}`;

    const encoded = encodeURI(URL);

    axios
      .get(encoded)
      .then((res) => {
        setVideos(res.data.items);
      })
      .catch((error) => {
        console.log("失敗:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  return { getAnythingVideo, videos, loading };
};
