import React from 'react'
import styled from 'styled-components';

const Videos = () => {
  return (
    <YoutubeVideo>
      {/* <iframe width="1080" height="480" src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1">
    </iframe> */}
    <iframe width="760" height="415" src="https://www.youtube.com/embed/t9UfkNDC_0c?si=f_ARjG2ecQqamJKY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
