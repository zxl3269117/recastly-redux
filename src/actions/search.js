import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import searchYouTubeDetails from '../lib/searchYouTubeDetails.js';


var handleVideoSearch = (q) => {

  //TODO:  Write an asynchronous action to handle a video search!
  return (dispatch) => {
    var success = function(data) {
      console.log(data);
      searchYouTubeDetails({key: YOUTUBE_API_KEY, id: 'eX2qFMC8cFo'}, (data) => { console.log(data); });
      dispatch(changeVideo(data[0]));
      dispatch(changeVideoList(data));
    };
    searchYouTube({key: YOUTUBE_API_KEY, query: q}, success);

  };
};

export default handleVideoSearch;
