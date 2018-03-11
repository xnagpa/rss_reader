import Feed from 'feed-to-json'
export function fetchRSS(rssAddress, callback){
  Feed.load(rssAddress, function(err, rss){
    callback(rss);
  });
};