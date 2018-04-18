$( function() {
    $( "#main" ).tabs();
    $('#settings-navbar').tabs()
    // $('.hide-sidebar').click(function(){
    //     $('header').toggleClass('show-sidebar', 700)
    //     $('.sidebar').toggleClass('show-sidebar', 700)
    //     $('.hide-sidebar').toggleClass('move-icon', 700)
    // })

    
    if ($(window).width() < 768) {
       $('.wrap').prepend("<div class='adp-sidebar'></div>");
       $('.adp-sidebar').append($('header'), $('.sidebar'))
       $('.hide-sidebar').click(function(){
            $('.adp-sidebar').toggleClass('show-sidebar', 700)

            
    })
       $('.adp-sidebar a').click(function(){
            $('.adp-sidebar').toggleClass('show-sidebar', 700)

    })
       $('.container').click(function(){
            $('.adp-sidebar').removeClass('show-sidebar', 700)

    })

    } else {
        $('.adp-sidebar').remove()
    }



    $('.add-adress').click(function(){
        $('.edit-username__list').append('<li><input class="edit-block-input" type="text" name="user-adress"></li>')
    })
    
    $('.btn-enter').click(function(){
    	$('.form-block--error').remove();
    	var pass = $('#password').val();
    	var confPass = $('#confirm-password').val();
    	if (pass === confPass) {
    		return true
    	}else{
    		$('.confirm-block').append('<span class="form-block--error">Паролі не співпадаюсь</span>')
    		return false
    	}
    	
    })

    $('.rst-password-btn').click(function(){
        $('.enter-wrap').toggle()
        $('.rst-password').toggle()
   
    })
   

    
} );