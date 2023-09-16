import { FC, memo } from "react";
import { Videos } from "../type/api/Videos";
import "../../style/Items.css";

type Props = {
  ShibaVideo: Videos;
};

export const VideoCard: FC<Props> = memo((props) => {
  const { ShibaVideo } = props;

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
          <a href={youtubeUrl + ShibaVideo.id.videoId}>
            <img
              src={ShibaVideo.snippet.thumbnails.medium.url}
              alt={ShibaVideo.snippet.title}
            />
          </a>
        </div>
        <div className="right">
          <div className="title">
            <a href={youtubeUrl + ShibaVideo.id.videoId}>
              {ShibaVideo.snippet.title}
            </a>
          </div>
          <div className="description">{ShibaVideo.snippet.description}</div>
          <div className="channel">
            <a href={channelUrl + ShibaVideo.snippet.channelId}>
              {ShibaVideo.snippet.channelTitle}
            </a>
          </div>
          <div className="time">
            {formatDate(ShibaVideo.snippet.publishedAt)}
          </div>
        </div>
      </div>
    </section>
  );
});
