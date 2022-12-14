import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

var mapStateToProps = function (state) {
  return {
    videos: state.videoList,
  };
};

var mapDispatchToProps = function (dispatch) {
  return {
    handleVideoListEntryTitleClick: function (event) {
      dispatch(changeVideo(event));
    }
  };
};

var VideoListContainer = connect(mapStateToProps, mapDispatchToProps)(VideoList);

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

export default VideoListContainer;
