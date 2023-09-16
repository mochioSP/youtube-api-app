import { FC, memo } from "react";
import { Video } from "../type/api/Video";
import "../../style/Items.css";

type Props = {
  video: Video;
};

export const VideoCard: FC<Props> = memo((props) => {
  const { video } = props;

  const youtubeUrl = "https://www.youtube.com/watch?v=";
  const channelUrl = "https://www.youtube.com/channel/";

  const formatDate = (publishedAt: string) => {
    const date = new Date(publishedAt);
    return date.toLocaleString("ja-JP");
  };

  return (
    <section className="items">
      <div className="item">
        <div className="thumbnail">
          <a href={youtubeUrl + video.id.videoId}>
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
            />
          </a>
        </div>
        <div className="right">
          <div className="title">
            <a href={youtubeUrl + video.id.videoId}>{video.snippet.title}</a>
          </div>
          <div className="description">{video.snippet.description}</div>
          <div className="channel">
            <a href={channelUrl + video.snippet.channelId}>
              {video.snippet.channelTitle}
            </a>
          </div>
          <div className="time">{formatDate(video.snippet.publishedAt)}</div>
        </div>
      </div>
    </section>
  );
});
