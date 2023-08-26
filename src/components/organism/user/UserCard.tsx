import { FC, memo } from "react";
import { Item } from "../../type/api/Item";

type Props = {
  item: Item;
};

export const UserCard: FC<Props> = memo((props) => {
  const { item } = props;
  const youtubeUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=viewCount&q=%E6%9F%B4%E7%8A%AC&relevanceLanguage=ja&type=video&key=${process.env.REACT_APP_API_KEY}`;

  return (
    <section className="items">
      <div className="item">
        <div className="thumbnail">
          <a href={youtubeUrl + item.id.videoId}>
            <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
          </a>
        </div>
        {/* <div className="right">
              <div className="title">
                <a href={youtubeUrl + item.id.videoId}>{item.snippet.title}</a>
              </div>
              <div className="description">{item.snippet.description}</div>
              <div className="channel">
                <a href={channelUrl + item.snippet.channelId}>
                  {item.snippet.channelTitle}
                </a>
              </div>
              <div className="time">{formatDate(item.snippet.publishedAt)}</div>
            </div> */}
      </div>
    </section>
  );
});
