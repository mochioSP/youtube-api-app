import axios from "axios";
import "../style/Items.css";
import { useCallback, useState } from "react";

import { Item } from "../components/type/api/Item";
import { useNavigate } from "react-router-dom";

export const useAnythingVideo = () => {
  const [loading, setLoading] = useState(false);
  const [videos, setVideos] = useState<Array<Item>>([]);
  console.log(videos);
  const navigate = useNavigate();

  const getAnythingVideo = useCallback((searchWord: string) => {
    axios
      .get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=viewCount&q=${searchWord}&relevanceLanguage=ja&type=video&key=${process.env.REACT_APP_API_KEY}`)
      .then((res) => {
        console.log(res.data.items);
        setVideos(res.data.items);
        navigate("/Anything/");
      })
      .catch((error) => {
        console.log("失敗:", error);
      });
  }, []);

  return { getAnythingVideo, videos, loading };
};
