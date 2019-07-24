import React from 'react';
import Plyr from 'plyr';

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
    const player = new Plyr(this.videoRef, {
      autoplay: false,
      showPosterOnEnd: true,
      // TODO video-overlay in fullscreen mode is hidden below player. Check
      // the :fullscreen CSS property in dev console
      captions: { active: true, language: 'auto' },
      controls: [ 'play-large', 'play', 'progress', 'current-time', 'fullscreen' ],
      volume: 1
    })

    player.on('play', () => {
      // Make sure captions are visible and the video is audible on play
      player.toggleCaptions(true);
      player.volume = 1;
    })
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
          {this.props.captions ? <track kind="captions" label="English" srcLang="en" src={this.props.captions} default></track> : null}
          <a href={this.props.videoMp4} download>
            Download
          </a>
        </video>
      </div>
    );
  }
}

export default VideoPlayer;
