var vega_$ = jQuery.noConflict(true);

chrome.extension.sendRequest({action:"pageStart"});

chrome.extension.onRequest.addListener(
  function(request, sender, sendResponse) {
  		var results = new Array();
  		vega_$(".item").each(function(){
  			if (this.id.indexOf("_story") != -1) {
  				var name = vega_$(this).find(".storyPreviewText > span:nth-child(2)").html();
	  			if (name.toLowerCase().indexOf(request.query.toLowerCase()) != -1) {
  					var id = this.id;
	  				var s = id.lastIndexOf("story");
  					storyId = id.substr(s + 5, id.length - 5 - s);
  					results.push({name: name, id: storyId});
  				}
  			}
  		});
		sendResponse(results);
  });