$('#about_us_nav').click(function (e) { 
    
    $('#navbar').css("background" , "#011627");
    $('.nav_item').removeClass('active');
    $('.nav_item').css('color', '#ffffff');
    $('.nav_item').css('border-color', '#011627');
    $(this).toggleClass('active');
    $(this).css('border-color', '#ffffff');
});

$('#about_us_home').click(function (e) { 
    
    $('#navbar').css("background-color" , "#FF9F1C");
    $('.nav_item').removeClass('active');
    $('.nav_item').css('color', '#000000');
    $('.nav_item').css('border-color', '#FF9F1C');
    $(this).toggleClass('active');
    $(this).css('border-color', '#000000');
});

$('#play_nav').click(function (e) { 
    
    $('#navbar').css("background-color" , "#E71D36");
    $('.nav_item').removeClass('active');
    $('.nav_item').css('color', '#ffffff');
    $('.nav_item').css('border-color', '#E71D36');
    $(this).toggleClass('active');
    $(this).css('border-color', '#ffffff');
});

$('#landing_scroll').click(function (e) { 
    
    $('#navbar').css("background-color" , "#E71D36");
    $('.nav_item').removeClass('active');
    $('.nav_item').css('color', '#ffffff');
    $('.nav_item').css('border-color', '#E71D36');
    $('#play_nav').toggleClass('active');
    $('#play_nav').css('border-color', '#ffffff');
});

$('#leaderboard_nav').click(function (e) { 
    
    $('#navbar').css("background-color" , "#2EC4B6");
    $('.nav_item').removeClass('active');
    $('.nav_item').css('color', '#000000');
    $('.nav_item').css('border-color', '#2EC4B6');
    $(this).toggleClass('active');
    $(this).css('border-color', '#000000');
});
$('#leaderboard_about_us').click(function (e) { 
    
    $('#navbar').css("background" , "#011627");
    $('.nav_item').removeClass('active');
    $('.nav_item').css('color', '#ffffff');
    $('.nav_item').css('border-color', '#011627');
    $('#about_us_nav').toggleClass('active');
    $('#about_us_nav').css('border-color', '#ffffff');
});

$('#play_hall_of_fame').click(function (e) { 
    
    $('#navbar').css("background-color" , "#2EC4B6");
    $('.nav_item').removeClass('active');
    $('.nav_item').css('color', '#000000');
    $('.nav_item').css('border-color', '#2EC4B6');
    $('#leaderboard_nav').toggleClass('active');
    $('#leaderboard_nav').css('border-color', '#000000');
});