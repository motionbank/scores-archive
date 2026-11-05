$(function(){

	var lparams = new LocationParams();

	var unableToLoad = function ( err ) {
		alert( 'Error' );
	}

	// ML 18.12.2013
	// blank parameter is meant viewed in a new page (target=_blank). needs additional different css.
	if ( lparams['blank'] && lparams['blank'] != 0 ) {
		$('body').addClass('blank');
	}

	$.ajax({
		url:'data/books.json',
		dataType:'json',
		success:function(books){
			if ( lparams.book && books[lparams.book] ) {
				var book = books[lparams.book];
				if ( lparams.perf && book[lparams.perf] ) {
					var performer = book[lparams.perf];
					var pages = book[lparams.perf].pages;
					$('img.slide').attr('src','pages/'+pages[0]);
					$('.score-book .title .piece').text(book.title);
					$('.score-book .title .performer').text(performer.name);
					
					$(".tab-container").empty();
					$(".tab-container").removeClass('wide');
					if ( pages.length > 30 ) {
						$(".tab-container").addClass('wide');
					}

					(function(){
						var current_page = 0, $container = $(".tab-container");
						$.each(pages,function(i,p){
							$el = $('<div class="tab tab-'+i+'"><a href="#">'+(i+1)+'</a></div>');
							$el.click(function(){
								current_page = i;
								updatePage();
							});
	        				$container.append($el);
						});
						$.each(['.controls .next', '.slide-container .next'],function(n,e){
							$(e).click(function(){
								current_page++;
								if ( current_page >= pages.length ) current_page = pages.length-1;
								updatePage();
							});
						});
						$('.controls .prev, .slide-container .prev').click(function(){
							current_page--;
							if ( current_page < 0 ) current_page = 0;
							updatePage();
						});
						var updatePage = function ( doSend ) {
							$(".tab-container .tab").removeClass('active');
							$(".tab-container .tab.tab-"+current_page).addClass('active');
							$('img.slide').attr('src','pages/'+pages[current_page]);
							$("body").removeClass("first-page last-page");
							if (current_page === 0) $("body").addClass("first-page");
							if (current_page === pages.length-1) $("body").addClass("last-page");
							if ( !( doSend === false ) && lparams.send ) {
								var p = current_page + 1;
								window.messaging.send('>>ping',{title:'Page_'+(p<10?'0':'')+p});
							}
							if ( current_page-1 >= 0 ) {
								var i1 = new Image();
								i1.src = 'pages/'+pages[current_page-1];
							}
							if ( current_page+1 >= 0 ) {
								var i1 = new Image();
								i1.src = 'pages/'+pages[current_page+1];
							}

						}
						// ML 18.12.2013
						// ?page=X parameter to load a specific page
						if ( lparams.page ) {
							current_page = parseInt( lparams.page, 10 ) - 1;
							if ( current_page < 0 ) current_page = 0;
							else if ( current_page >= pages.length ) current_page = pages.length-1;
						}
						updatePage();
						if ( lparams.listen ) {
							window.messaging['>>ping'] = function(opts){
								var data = opts.data;
								var page = data.title.replace(/.*_[0]*([0-9]+)$/i,'$1');
								var next_page = parseInt( page, 10 ) - 1;
								if ( next_page !== current_page ) {
									current_page = next_page;
									updatePage( false );
								}
							};
						}
					})();

				} else {
					console.log( 'Performer not found' );
				}
			} else {
				console.log( 'Book not found' );
			}
		},
		error: function(err){
			console.log( err );
		}
	});
})