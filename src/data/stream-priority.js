const StreamPriority = {
  Hls: {
    value: 'HLS',
    mimetype: 'application/x-mpegURL',
    data: {
      engine: 'html5',
      format: 'hls'
    }
  },
  Dash: {
    value: 'DASH',
    mimetype: 'application/dash+xml',
    data: {
      engine: 'html5',
      format: 'dash'
    }
  },
  Progressive: {
    value: 'PROGRESSIVE',
    mimetype: 'video/mp4',
    data: {
      engine: 'html5',
      format: 'progressive'
    }
  }
};

export default StreamPriority;
