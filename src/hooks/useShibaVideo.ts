import axios from "axios";
import "../style/Items.css";
import { useCallback, useState } from "react";

import { Item } from "../components/type/api/Item";

export const useShibaVideo = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [videos, setVideos] = useState<Array<Item>>([]);

  const getShibaVideo = useCallback(() => {
    setLoading(true);

    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=viewCount&q=%E6%9F%B4%E7%8A%AC&relevanceLanguage=ja&type=video&key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        setVideos(res.data.items);
      })
      .catch((error) => {
        console.log("失敗:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  return { getShibaVideo, videos, loading };
};
