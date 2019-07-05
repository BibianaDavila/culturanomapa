$(document).ready(function(){
	console.log('ready!');
	var fotheight = parseInt($('footer').height());
    var winhei = parseInt($(window).height());
	var total = winhei-fotheight-5;

    if (total>650)
		$('#contentmap').css("min-height", total);
	else
		$('#contentmap').css("min-height",650);
	$('#content').css("min-height", total);

	$('.filtro' ).click(function() {
		console.log('ohmy');
		var full = "https://www.google.com/maps/d/embed?mid=1FhGLvLNEQkp2OuNWl0rGaf5K5whqSU8g&hl=pt-BR";
		var museu = "https://www.google.com/maps/d/embed?mid=1SbWThfxGY_Zs7I_NnpOLRfcUzHMmoYHv";
		var cinema = "https://www.google.com/maps/d/embed?mid=1hVqMMGrNzIe2GbwIeSklEsTdNgM0Fv-X";
		var teatro = "https://www.google.com/maps/d/embed?mid=19B5JX5VTCZHYKKfepBEfjAJJMvj1d7Jo";
		var type = $(this).attr("href");

		if(!$(this).hasClass('active')){
			if (type=="#museu-filt"){
				$('#contentmap').attr('src',museu);
			}
			else if(type=="#teatro-filt"){
				$('#contentmap').attr('src',teatro);
			}
			else if (type==="#cinema-filt"){
				$('#contentmap').attr('src',cinema);
			}
			$(this).parents('li').siblings('li').find('a').removeClass('active');
			$(this).addClass('active');
		}else{
			$('#contentmap').attr('src',full);
			$(this).removeClass('active');
		}
	});

});