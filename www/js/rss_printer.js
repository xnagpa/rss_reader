import rssItem from '../views/rss_item.pug'

export function printRSS(rssString){
  let resultHtml = '';
  if(rssString && rssString['status'] == 'ok'){
    rssString['items'].forEach((item) => {
      resultHtml += rssItem({title: item['title'], body: item['content']})
    });
  }
  let rssDiv = document.getElementById(rss);
  rss.innerHTML = resultHtml;
};