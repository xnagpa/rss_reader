import { fetchRSS } from './rss_fetcher'
import { printRSS } from './rss_printer'

document.addEventListener('deviceready', function(){
	const loadButton = document.querySelector('#content-control button');
	const rssInput = document.querySelector('#content-control input');

	loadButton.addEventListener('click', function(event){
	  if(rssInput.value){
      fetchRSS(rssInput.value, printRSS);
    }
	});
})