import React from 'react'
import styled from 'styled-components';

const Videos = () => {
  return (
    <YoutubeVideo>
      <iframe width="1256" height="616" src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1">
    </iframe>
    </YoutubeVideo>
  );
}

const YoutubeVideo = styled.div`
display: flex;
justify-content: space-around;
margin: 20px;
border: none;
`

export default Videos;
