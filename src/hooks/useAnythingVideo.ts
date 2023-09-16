import axios from "axios";
import { useCallback, useState } from "react";

import type { Item } from "../components/type/api/Videos";
import { useNavigate } from "react-router-dom";

export const useAnythingVideo = () => {
  const [videos, setVideos] = useState<Array<Item>>([]);
  const navigate = useNavigate();

  const getAnythingVideo = useCallback(
    (searchWord: string) => {
      axios
        .get(
          `https://youtube.googleapis.com/youtube/v3/
          search?part=snippet&maxResults=10&order=viewCount
          &q=${searchWord}&relevanceLanguage=ja&type=video
          &key=${process.env.REACT_APP_API_KEY}`
        )
        .then((res) => {
          console.log(res.data.items);
          const fetchedVideos = res.data.items;
          setVideos(fetchedVideos);
        })
        .catch((error) => {
          console.log("失敗:", error);
        });

      navigate("/Anything/");
    },
    [navigate]
  );

  return { getAnythingVideo, videos };
};
