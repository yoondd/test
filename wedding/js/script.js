$('.mobile-menu').click(function(){
    $(this).parent().toggleClass('open');
    $('.mobile-menubg').toggle();
})
AOS.init();


$(document).ready(function () {
	$('input.timepicker').timepicker({
            timeFormat: 'HH:mm',
            interval: 30,
            startTime: '00:00',
            dynamic: false,
            dropdown: true,
            scrollbar: true
    });
    $('input.timepicker2').timepicker({
            timeFormat: 'HH:mm',
            interval: 30,
            startTime: '00:30',
            dynamic: false,
            dropdown: true,
            scrollbar: true
    });


});
