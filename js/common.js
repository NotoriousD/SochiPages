$(function() {

	$('.toggle-fix').click(function(){
		$('.fix-mnu').toggleClass('active-fix');
	});

	$('.toggle-nav').click(function(){
		$('.top-mnu').slideToggle();
	});

	$('.lightslider').lightSlider({
		item: 2,
		pager: false,
		responsive: [
			{
				breakpoint: 480,
				settings: {
					item: 1
				}
			}
		]
	});

	$('.top_slider').lightSlider({
		item: 2,
		pager: false,
		responsive: [
			{
				breakpoint: 960,
				settings: {
					item: 1
				}
			}
		]
	});

	$('.resta-img').hover(function(){
		$(this).find('div').slideToggle(200);
	});


	$("form").validate({
		messages: {
			name: "Введите имя",
			email: {
				required: "Введите мейл",
				email: "Введите валидный мейл"
			}
		},
		submitHandler: function(form){
			var msg = $(form).find('input, textarea');
            $.ajax({
                type: 'POST',
                url: 'contact.php',
                data: msg,
                success: function (data) {
                	if(data == '1'){
                		$("a[href='#success']").click();
                		form.reset();
                	}else{
                		alert("error");
                	}
                    console.log(data);
                },
                error: function (xhr, str) {
                    alert(xhr.responseCode);
                }
            });
		}

	});

});
