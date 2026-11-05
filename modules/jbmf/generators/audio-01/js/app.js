// http://buzz.jaysalvat.com/documentation/sound/
$(function(){

	var lparams = new LocationParams();
	var current_sound = null;

	var hide = lparams.hidden;
	var starton = lparams['start-on-ping'];

	var sounds = [
		['audio/mp3/1.-nstructured.aiff.mp3','audio/ogg/1.-nstructured.aiff.ogg'],
		['audio/mp3/1.an-extremely-obvious-piece.wav.mp3','audio/ogg/1.an-extremely-obvious-piece.wav.ogg'],
		['audio/mp3/10.calm-.aiff.mp3','audio/ogg/10.calm-.aiff.ogg'],
		['audio/mp3/11.funereal.aiff.mp3','audio/ogg/11.funereal.aiff.ogg'],
		['audio/mp3/12.-french.aiff.mp3','audio/ogg/12.-french.aiff.ogg'],
		['audio/mp3/14.rainy-day.aiff.mp3','audio/ogg/14.rainy-day.aiff.ogg'],
		['audio/mp3/15.-harmonic-.aiff.mp3','audio/ogg/15.-harmonic-.aiff.ogg'],
		['audio/mp3/2.-motional.aiff.mp3','audio/ogg/2.-motional.aiff.ogg'],
		['audio/mp3/2.an-extremely-accumulative-piece-.wav.mp3','audio/ogg/2.an-extremely-accumulative-piece-.wav.ogg'],
		['audio/mp3/3.-othersome-.aiff.mp3','audio/ogg/3.-othersome-.aiff.ogg'],
		['audio/mp3/3.an-extremely-insistent-piece.wav.mp3','audio/ogg/3.an-extremely-insistent-piece.wav.ogg'],
		['audio/mp3/4.-an-extremely-italian-piece.wav.mp3','audio/ogg/4.-an-extremely-italian-piece.wav.ogg'],
		['audio/mp3/4.-ld-weater.aiff.mp3','audio/ogg/4.-ld-weater.aiff.ogg'],
		['audio/mp3/5.-an-extremely-protestant-piece.aiff.mp3','audio/ogg/5.-an-extremely-protestant-piece.aiff.ogg'],
		['audio/mp3/5.-xtremely-cademic-.aiff.mp3','audio/ogg/5.-xtremely-cademic-.aiff.ogg'],
		//['audio/mp3/6-xtremely-oud-1.m4a.mp3.mp3','audio/ogg/6-xtremely-oud-1.m4a.mp3.ogg'],
		['audio/mp3/6.-agnerian.aiff.mp3','audio/ogg/6.-agnerian.aiff.ogg'],
		['audio/mp3/7.angular.aiff.mp3','audio/ogg/7.angular.aiff.ogg'],
		['audio/mp3/8.-undecided.aiff.mp3','audio/ogg/8.-undecided.aiff.ogg'],
		['audio/mp3/9.-stupid.aiff.mp3','audio/ogg/9.-stupid.aiff.ogg'],
		['audio/mp3/extremely-ussian-piece.wav.mp3','audio/ogg/extremely-ussian-piece.wav.ogg']
	];

	var play = function (s) {
		var not_played = true;
		if (current_sound) current_sound.stop();
		current_sound = new buzz.sound(sounds[s]);
		current_sound.load();
		if ( !starton ) current_sound.play();
		else {
			window.messaging['>>ping'] = function () {
				if ( starton && (not_played || current_sound.isEnded()) ) {
					current_sound.play();
					not_played = false;
				}
			}
		}
		if ( lparams.loop ) {
			current_sound.loop();
		} 
	}

	$.each(sounds,function(i,s){
		$('select').append('<option value="'+i+'" '+(lparams.sound&&i===+(lparams.sound)?'selected':'')+'>'+i+'</option>');
	});

	$('input[data-type=play]').click(function(){
		var s = +($('select').val());
		play(s);
		return false;
	});

	$('input[data-type=stop]').click(function(){
		if (current_sound) current_sound.stop();
		return false;
	});

	if ( lparams.sound && +(lparams.sound) && sounds[lparams.sound] ) {
		play(+(lparams.sound));
	}

	if ( hide ) {
		$('form').css({
			'display' : 'none'
		});
	}
});