import { FC, memo } from "react";
import { Video } from "../type/api/Video";
import styled from "styled-components";

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
    <SVideoAreaContainer>
      <SVideoCardBg>
        <SThumbnailBox>
          <SLink href={youtubeUrl + video.id.videoId}>
            <SThumbnail
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
            />
          </SLink>
        </SThumbnailBox>
        <SExplanationBox>
          <STitle>
            <SLink href={youtubeUrl + video.id.videoId}>{video.snippet.title}</SLink>
          </STitle>
          <div className="description">{video.snippet.description}</div>
          <div className="channel">
            <SLink href={channelUrl + video.snippet.channelId}>
              {video.snippet.channelTitle}
            </SLink>
          </div>
          <div className="time">{formatDate(video.snippet.publishedAt)}</div>
        </SExplanationBox>
      </SVideoCardBg>
    </SVideoAreaContainer>
  );
});

const SLink = styled.a`
  color: #5c5c5c;
  text-decoration: none;
    &:hover{
      text-decoration: underline;
    }
`

const SVideoAreaContainer = styled.section`
  display: flex;
  justify-content: center;
  margin: 30px 0 60px 0;
`
const SVideoCardBg = styled.div`
  width: 50%;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background-color: #fff;
  color: #666;
  box-shadow: 0 0 15px rgba(100, 100, 100, 0.5);
`

const SThumbnailBox = styled.div`
  margin: auto;
  
`
const SThumbnail = styled.img`
  width: 450px;
`

const SExplanationBox = styled.div`
  margin: auto;
  margin-top: 25px;
  
`
const STitle = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
`
