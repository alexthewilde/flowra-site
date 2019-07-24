import React from 'react';
import plyr from 'plyr';

import styles from 'plyr/dist/plyr.css';
import './video-player.scss';

class VideoPlayer extends React.Component {
  constructor() {
    super();
    this.videoRef = null;
  }

  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    // See https://github.com/sampotts/plyr/issues/254
    this.player = plyr.setup(this.videoRef, {
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
          poster={this.props.startFrame}
          className="video-player"
          ref={ref => this.videoRef = ref}
          controls
        >
          <source src={this.props.videoWebm} type="video/webm" />
          <source src={this.props.videoMp4} type="video/mp4" />
          <a href={this.props.videoMp4} download>
            Download
          </a>
        </video>
      </div>
    );
  }
}

export default VideoPlayer;
