$(function () {
	$('.EftRepeatingSection .TextQuestion input').each(function () {
				var style = $(this).attr('style'),
						textbox = $(document.createElement('textarea')).attr('style', style);
				$(this).replaceWith(textbox);
		});
		
	$(".EftRepeatingSection .TextQuestion textarea").each(function () {
		$(this).attr("contentEditable", "true");
		$(this).attr("maxlength", "100");
	});
	
    if (navigator.userAgent.indexOf('Mac OS X') != -1) {
        $("body").addClass("mac");
    } else {
        $("body").addClass("pc"); 
    }

    $("li.complete").mouseover(function () {
        $("#UpdateHeader").addClass("show");
    });

    $("li.complete").mouseleave(function () {
        $("#UpdateHeader").removeClass("show");
    });

    // Stick the #nav to the top of the window
    var nav = $('#nav');
    var navHomeY = nav.offset().top;
    var isFixed = false;
    var $w = $(window);
    $w.scroll(function () {
        var scrollTop = $w.scrollTop();
        var shouldBeFixed = scrollTop > navHomeY;
        if (shouldBeFixed && !isFixed) {
            nav.css({
                position: 'fixed',
                top: 0,
                background: '#fff',
                borderWidth: '1px',
                borderColor: '#ddd',
                borderStyle: 'solid',
                padding: '10px',
                left: nav.offset().left-10,
                width: nav.width()
            });
            isFixed = true;
        }
        else if (!shouldBeFixed && isFixed) {
            nav.css({
                position: 'static',
                background: 'none',
                borderWidth: '1px',
                borderColor: 'transparent',
                borderStyle: 'solid'
            });
            isFixed = false;
        }
    });

    if ($('div#CompleteDiv').find('input[type=checkbox]').is(":checked")) {
        $('#PDFButton').show();
    } else {
        $('#PDFButton').hide();
    };

    $(".flyoutnav").hide();

    $('.trackingMenuIcon .menuicon').mouseover(function () {
        $(".flyoutnav").toggleClass("show");
    });

    $('.trackingMenuIcon .menuicon a').on("focus", function () {
        $(".flyoutnav").toggleClass("show");
    });

    $(".flyoutnav").mouseleave(function () {
        $(this).removeClass("show");
    });

    $(".flyoutnav").on("blur", function () {
        $(this).removeClass("show");
    });

    $(".toggleShowHide").each(function () {
        $(this).on("click", function () {
            this.src = ($(this).attr('src') == '/pic/icon/smallnext.gif') ? '/pic/icon/dropdown.gif' : '/pic/icon/smallnext.gif';
        });
    });

    var arPages = Form.arChildren;
    for (var i = 0; i < arPages.length; i++) {
        if (arPages[i].assignmentPage == "1" || arPages[i].reviewPage == "1") {
            $(arPages[i].NavItem.domElement).addClass("prominent");
        }
    }

});
