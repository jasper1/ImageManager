// Author: Konstantin Shishkin aka jasper
// Email: 288825@gmail.com
// ImageManager class
function ImageManager(url_list, callback, progess_callback)
{
	this.resources = url_list;
	if (callback) this.callback = callback;
	if (progess_callback) this.progress_callback = progess_callback;
	
	this.loaded = 0;
	this.stack = [];

	for (var i=0; i<this.resources.length; i++)
	{
			var image = new Image();
			image.onload = function (image) { 
										return function()
										{
											loaded ++;
											stack.push(image);
											if (progess_callback) {
													progess_callback(loaded, resources.length, image);
												}
											if (loaded == resources.length && callback)
												{
													callback(stack);
												}
										}
				 					   }(image);
			
			image.src = this.resources[i];
	}		

}