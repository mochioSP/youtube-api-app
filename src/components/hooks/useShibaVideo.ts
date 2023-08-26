import axios from "axios";
import { useCallback, useState } from "react";
import { Item } from "../type/api/Item";

export const useShibaVideo = () => {
  const [loading, setLoadeing] = useState<boolean>(false);
  const [videos, setVideos] = useState<Array<Item>>([]);

  const getShibaVideo = useCallback(() => {
    setLoadeing(true);

    axios
      .get("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=viewCount&q=%E6%9F%B4%E7%8A%AC&relevanceLanguage=ja&type=video&key=AIzaSyBILTzhda9i2ItJ_npOZmGvtJr98yIZ-oE")
      .then((res) => {
        console.log(res);
        setVideos(res.data.items);
      })
      .catch((error) => {
        console.log("失敗");
        console.log(error);
      })
      .finally(() => setLoadeing(false));
  }, []);

  return { getShibaVideo, videos, loading };
};
