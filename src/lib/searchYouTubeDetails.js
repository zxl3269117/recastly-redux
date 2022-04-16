var searchYouTubeDetails = ({key, id}, callback) => {
  $.get('https://www.googleapis.com/youtube/v3/commentThreads', {
    part: 'snippet',
    key: key,
    videoId: id,
    // maxResults: max,
    // type: 'video',
    // videoEmbeddable: 'true'
  })
    .done(({items}) => {
      if (callback) {
        callback(items);
      }
    })
    .fail(({responseJSON}) => {
      console.log('failed!!!');
      responseJSON.error.errors.forEach((err) =>
        console.error(err)
      );
    });
};

export default searchYouTubeDetails;