import axios from "axios";
import "../../style/Items.css";
import { useCallback, useState } from "react";
import { Item } from "../type/api/Item";

export const useSiberianHuskyVideo = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [videos, setVideos] = useState<Array<Item>>([]);

  const getSiberianHuskyVideo = useCallback(() => {
    setLoading(true);

    axios
      .get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=viewCount&q=%E3%82%B7%E3%83%99%E3%83%AA%E3%82%A2%E3%83%B3%E3%83%8F%E3%82%B9%E3%82%AD%E3%83%BC&relevanceLanguage=ja&type=video&key=${process.env.REACT_APP_API_KEY}`)
      .then((res) => {
        //console.log(res);
        setVideos(res.data.items);
      })
      .catch((error) => {
        console.log("失敗:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  return { getSiberianHuskyVideo, videos, loading };
};
