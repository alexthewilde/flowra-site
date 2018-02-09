import React from 'react';
import plyr from 'plyr';

import styles from 'plyr/dist/plyr.css';
import './video-player.scss';

import startFrame from '../images/video_start_frame.jpg';
import videoMp4 from '../videos/intro.mp4';
import videoWebm from '../videos/intro.webm';

class VideoPlayer extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    // See https://github.com/sampotts/plyr/issues/254
    this.player = plyr.setup(this.refs.videoPlayer, {
      autoplay: false,
      showPosterOnEnd: true,
      // TODO video-overlay in fullscreen mode is hidden below player. Check
      // the :fullscreen CSS property in dev console
      fullscreen: { enabled: true }
    })[0];
  }

  componentWillUnmount() {
    this.player.destroy();
  }

  render() {
    return (
      <div className="intro-video">
        <video
          poster={startFrame}
          className="video-player"
          ref="video-player"
          controls
        >
          <source src={videoWebm} type="video/webm" />
          <source src={videoMp4} type="video/mp4" />
          <a href={videoMp4} download>
            Download
          </a>
        </video>
      </div>
    );
  }
}

export default VideoPlayer;
