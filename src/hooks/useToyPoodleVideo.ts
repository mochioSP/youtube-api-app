import axios from "axios";
import { useCallback, useState } from "react";
import type { Item } from "../components/type/api/Item";

export const useToyPoodleVideo = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [videos, setVideos] = useState<Array<Item>>([]);

  const getToyPoodleVideo = useCallback(() => {
    setLoading(true);

    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=viewCount&q=%E3%83%88%E3%82%A4%E3%83%97%E3%83%BC%E3%83%89%E3%83%AB&relevanceLanguage=ja&type=video&key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        //console.log(res);
        setVideos(res.data.items);
      })
      .catch((error) => {
        console.log("失敗:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  return { getToyPoodleVideo, videos, loading };
};
