console.log('working');
 var Twit=require('twit');
 var config=require('./config');
 var T =new Twit(config);

 var stream =T.stream('user');

 stream.on('tweet',tweetperfo);
 //p1 eventtype + p2 function assoc. 
function follow(para)
{
	console.log('someone followed you');
	var sc=para.source.screen_name;
	tweetit('.@'+sc+' bots are shitty #botspeaks');
}
function tweetperfo(blabla) {
	//console.log(blabla);

	var replyto = blabla.in_reply_to_screen_name;
	var text = blabla.text;
	var from = blabla.user.screen_name;
	console.log('replying to '+from);

	if(replyto == '@drunk-maester')
	{
		var nt = '@'+from+' I am coming back to you'; 
		tweetit(nt);
	}	

	}

function tweetit(txt)
{
T.post('statuses/update', { status: txt}, function(err, data, response) {
  console.log(data)
})
}
/*
 T.get('search/tweets', { q: 'tesla', count: 5 }, function(err, data, response) {
 var tweets=data.statuses;
  for (var i = 0; i < tweets.length; i++) {
  	console.log(tweets[i].text);
  }
  
})*/
 
