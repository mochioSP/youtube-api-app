import { FC, memo } from "react";
import { Item } from "../../type/api/Item";

type Props = {
  item: Item;
};

export const VideoCard: FC<Props> = memo((props) => {
  const { item } = props;

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
          <a href={youtubeUrl + item.id.videoId}>
            <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
          </a>
        </div>
        <div className="right">
          <div className="title">
            <a href={youtubeUrl + item.id.videoId}>{item.snippet.title}</a>
          </div>
          <div className="description">{item.snippet.description}</div>
          <div className="channel">
            <a href={channelUrl + item.snippet.channelId}>{item.snippet.channelTitle}</a>
          </div>
          <div className="time">{formatDate(item.snippet.publishedAt)}</div>
        </div>
      </div>
    </section>
  );
});
