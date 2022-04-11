/*
This is your site JavaScript code - you can add interactivity and carry out processing
- Initially the JS writes a message to the console, and moves a button you can add from the README
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");

/* 
Make the "Click me!" button move when the visitor clicks it:
- First add the button to the page by following the "Next steps" in the README
*/
const btn = document.querySelector("button"); // Get the button from the page
// Detect clicks on the button
if (btn) {
  btn.onclick = function() {
    // The JS works in conjunction with the 'dipped' code in style.css
    btn.classList.toggle("dipped");
  };
}

// This is a single line JS comment
/*
This is a comment that can span multiple lines 
- use comments to make your own notes!
*/

jQuery.extend(jQuery.easing,
{
    customEaseInQuad: function (x, t, b, c, d) {
        return c*(t/=d)*(t+0.2) + b;
    }
})
var rocket_extended = false;
var rocket_loaded = false;
var rocket_clicked = false;

rocket_img_url = 'https://webcdn.factorio.com/assets/img/web/rocket-loop-halfsize.png';
// easing = 'linear';
easing = 'customEaseInQuad';

function animate_rocket() {
    $('#rocket').animate({bottom: rocket_offset}, rocket_offset, easing, function(){
        $('#rocket').hide();
    });
    $("html").delay(100).animate({scrollTop: 0}, rocket_offset - window_height/2, easing);
}

$('#rocket').on('mouseover', function(e) {
    $('<img src="'+rocket_img_url+'">').on('load', function(){
        console.log('rocket loaded on hover');
        rocket_loaded = true;
        $('#rocket').addClass('rocket-animating')
    })
})
$('#rocket').on('mouseout', function() {
    if (!rocket_clicked) {
        $('#rocket').removeClass('rocket-animating')
    }
})

$('#rocket').on('click', function(e){
    if (rocket_clicked) return;
    rocket_clicked = true;
    rocket_offset = $("#rocket").offset().top + 448/2;
    window_height = $(window).height();
    if (!rocket_loaded) {
        $('<img src="'+rocket_img_url+'">').on('load', function(){
            console.log('rocket loaded');
            rocket_loaded = true;
            $('#rocket').addClass('rocket-animating')
            if (rocket_extended) {
                console.log('animating rocket from img load');
                animate_rocket();
            }
        });
    }
    $('#rocket').animate({height: 200}, 400, 'linear', function(){
        $('#rocket').css({
            height: 224,
            bottom: -(224-200),
            'z-index': 200});
        rocket_extended = true;
        if (rocket_loaded) {
            console.log('animating rocket from animate');
            animate_rocket();
        }
    });
});