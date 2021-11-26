// ---------Responsive-navbar-active-animation-----------
function test(){
	var tabsNewAnim = $('#navbarSupportedContent');
	var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
	var activeItemNewAnim = tabsNewAnim.find('.active');
	var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
	var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
	var itemPosNewAnimTop = activeItemNewAnim.position();
	var itemPosNewAnimLeft = activeItemNewAnim.position();
	$(".hori-selector").css({
		"top":itemPosNewAnimTop.top + "px", 
		"left":itemPosNewAnimLeft.left + "px",
		"height": activeWidthNewAnimHeight + "px",
		"width": activeWidthNewAnimWidth + "px"
	});
	$("#navbarSupportedContent").on("click","li",function(e){
		$('#navbarSupportedContent ul li').removeClass("active");
		$(this).addClass('active');
		var activeWidthNewAnimHeight = $(this).innerHeight();
		var activeWidthNewAnimWidth = $(this).innerWidth();
		var itemPosNewAnimTop = $(this).position();
		var itemPosNewAnimLeft = $(this).position();
		$(".hori-selector").css({
			"top":itemPosNewAnimTop.top + "px", 
			"left":itemPosNewAnimLeft.left + "px",
			"height": activeWidthNewAnimHeight + "px",
			"width": activeWidthNewAnimWidth + "px"
		});
	});
}
$(document).ready(function(){
	setTimeout(function(){ test(); });
});
$(window).on('resize', function(){
	setTimeout(function(){ test(); }, 500);
});
$(".navbar-toggler").click(function(){
	$(".navbar-collapse").slideToggle(300);
	setTimeout(function(){ test(); },1000);
});



// --------------add active class-on another-page move----------
jQuery(document).ready(function($){
	// Get current path and find target link
	var path = window.location.pathname.split("/").pop();

	// Account for home page with empty path
	if ( path == '' ) {
		path = 'index.html';
	}

	var target = $('#navbarSupportedContent ul li a[href="'+path+'"]');
	// Add active class to target link
	target.parent().addClass('active');
});


// owl carousel

$(".carousel_se_01_carousel").owlCarousel({
    autoplay: true,
    autoplayhoverpause: true,
    autoplaytimeout: 100,
    items: 3,
    // nav: true,
    loop: true,
    lazyLoad: true,
    margin: 5,
    padding: 5,
    stagePadding: 5,
    responsive: {
        0: {
            items: 1,
            dots: false
        },
        485: {
            items: 2,
            dots: false
        },
        728: {
            items: 3,
            dots: false
        },
        960: {
            items: 3,
            dots: false
        },
        1200: {
            items: 3,
            dots: true
        }
    }
});


/*Require flicky lib 
https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js
*/

$(document).ready(function () {
    $(".carousel_se_01_carousel").owlCarousel({
        autoplay: true,
        autoplayhoverpause: true,
        autoplaytimeout: 100,
        items: 3,
        // nav: true,
        loop: true,
        lazyLoad: true,
        margin: 5,
        padding: 5,
        stagePadding: 5,
        responsive: {
            0: {
                items: 1,
                dots: false
            },
            485: {
                items: 2,
                dots: false
            },
            728: {
                items: 3,
                dots: false
            },
            960: {
                items: 3,
                dots: false
            },
            1200: {
                items: 3,
                dots: true
            }
        }
    });
});

$(document).ready(function () {
    $(".carousel_se_02_carousel").owlCarousel({
        // autoplay:true,
        // autoplayhoverpause:true,
        // autoplaytimeout:100,
        items: 1,
        video: true,
        lazyLoad: true,
        center: true,
        responsive: {
            480: {
                items: 1
            },
            600: {
                items: 1
            }
        }
    });
});


const destinationUrl = "https://www.skyroom.online/ch/soroush1993/functional";

function handleForm(e) {
    e.preventDefault();
    var form_data = new FormData(document.getElementById("form"));

    fetch('https://testapi.shadzi.club/campaigns/digikalla/user/submit', {
        method: 'POST',
        
        body: form_data,
    }).then(function (response) {
        localStorage.setItem("fullname", document.getElementById('fullname').value);
        localStorage.setItem("mobileNumber", document.getElementById('mobileNumber').value);
        window.location.assign(destinationUrl);
    }).catch(function (error) {
        console.error(error);
    });

}

function onDocLoad() {
    if (fullname = localStorage.getItem("fullname")) {
        document.getElementById("fullname").value = fullname;
    }
    if (mobileNumber = localStorage.getItem("mobileNumber")) {
        document.getElementById("mobileNumber").value = mobileNumber;
    }
    return true;
}


$(document).ready(function(){
    $("img").click(function(){
       var img=$(this).attr('src');
         $("#show-img").attr('src',img);
         $("#imgmodal").modal('show');
    });
});