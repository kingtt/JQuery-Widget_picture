			(function($){
					$.fn.bigPlay=function(options){
						var defauls={
							small_div:'small-div',
							big_div:'big-div',
							big_img:'img',
							big_pic:'big-pic',
							last_one:'last-one',
						};
						var ops=$.extend(defauls,options);
						return $(this).hover(
							function(){
								$(this).mousemove(function(i){
									$('#big-pic').addClass(ops.big_pic).html('<img src="images1/big.jpg">');
									$('#big-pic img').addClass(ops.last_one);
									$('#cover').addClass(ops.small_div);
									var aaa=$('.small-pic').offset().top;
									var bbb=$('.small-pic').offset().left;
									var top=i.clientY-aaa-$('#cover').height()/2;
									var left=i.clientX-bbb-$('#cover').width()/2;

									if (top<0) {
										top=0;
									}else if(top>$('.small-pic').height()-$('#cover').height()){
										top=$('.small-pic').height()-$('#cover').height();
									}

									if (left<0) {
										left=0;
									}else if (left>$('.small-pic').width()-$('#cover').width()) {
										left=$('.small-pic').width()-$('#cover').width();
									}


									$('#cover').css('top',top+'px');
									$('#cover').css('left',left+'px');

									var precentX=left/$('.small-pic').width();
									var precentY=top/$('.small-pic').height();
									var a=$('#big-pic img').width();
									var b=$('#big-pic img').height();

									$('#big-pic img').css('left',(-precentX*a)+'px');
									$('#big-pic img').css('top',(-precentY*b)+'px');

								});
							},function(){
									$('#cover').removeClass(ops.small_div);
									$('#big-pic').removeClass(ops.big_pic).html('');
						});
					};
			})(jQuery);