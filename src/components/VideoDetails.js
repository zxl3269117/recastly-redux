import React from 'react';

var VideoDetails = ({video}) => (
  !video
    ? <div className="video-details">Please wait...</div>
    : <div className="video-details">
      <div className="embed-comments">
        <div className="all-comments">{video.snippet.authorDisplayName}</div>
      </div>
    </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoDetails.propTypes = {
  video: PropTypes.object.isRequired
};

export default VideoDetails;