$(document).ready(function()
{

	var canvas = document.getElementById("content");	
	var ctx = canvas.getContext('2d');

	var load_list = ["http://queen.bear.com.ua/albums/lj/Romantic_dinner_setting_lres.jpg",
				   "http://www.pafilia.org/wp-content/uploads/2010/02/couple-photo-LR.jpg",
				   "http://www.portwallpaper.com/imgwal/romantic-vista.jpg"];
				   
	var loader = ImageManager(load_list, on_done, on_step);

	function on_done(list)
	{
		console.log ("Done");
		console.log (list);
	}


	function on_step(current, total, image)
	{
		console.log(current, total, image);
		ctx.drawImage(image,current*20,current*20);
	}	

});