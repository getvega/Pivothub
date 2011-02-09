var vega_$ = jQuery.noConflict(true);

chrome.extension.sendRequest({action:"pageStart"});

chrome.extension.onRequest.addListener(
  function(request, sender, sendResponse) {
  		
  		var words = request.query.toLowerCase().split(" ");

  		var results = new Array();
  		vega_$(".item").each(function(){
  			if (this.id.indexOf("_story") != -1) {
  				var name = vega_$(this).find(".storyPreviewText > span:nth-child(2)").html();
	  			if (pivothub_matches(name, words)) {
  					var id = this.id;
	  				var s = id.lastIndexOf("story");
  					storyId = id.substr(s + 5, id.length - 5 - s);
  					results.push({name: name, id: storyId});
  				}
  			}
  		});
		sendResponse(results);
  });

var pivothub_matches = function(name, words) 
{
	var lName = name.toLowerCase();
	var found = true;
	vega_$(words).each(function(){
		if (lName.indexOf(this) == -1) found = false;
	});
	return found;
};