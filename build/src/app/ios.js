//*** Communication from Javascript to iOS ***
//https://kinderas.com/technology/2014/6/15/wkwebview-and-javascript-in-ios-8-using-swift
//http://jayeshkawli.ghost.io/communication-from-javascript-a-swift/
var iosModeEnabled = false;
function IOSmode() {
  if (iosModeEnabled) { return; }
  iosModeEnabled = true;

  $('.ios-remove').remove();
  $('.ios-show').show();

  // TODO: the following need to be done in a different and generic way

  //Header & Footer
  $('#app-navigation-header, #app-navigation-footer').remove();

  //Legal page
  $(".page.legal-info").css("margin-top", "1px");
  $(".page.legal-info").css("padding-top", "1px");

  //Genetics page
  $("header.sequencing").css("margin-top", "0");
  $("header.sequencing .seq-top").css("background", "white");
  $("header.sequencing .seq-top .seq-top-left h2 ").css("color", "#D27A28");
  $("header.sequencing .seq-top .seq-top-left h2 ").css("margin-top", "0");
  $("header.sequencing .helix-info h2 ").css("color", "#D27A28");

  //About page
  $(".about").css("padding-top", "0");
  $(".page.about").css("background", "white");
  $(".about .content article.about-top-section").css("margin-top", "0");
  $(".about .content article.about-top-section").css("margin-bottom", "0");
  $(".about .content.content-about-top-section").css("padding-right", "0");
  $(".about .content.content-about-top-section").css("padding-left", "0");

  //Product1
  $(".life-container").css("top", "0px");

  //Result Modals
  $( ".modal-content.life-result" ).addClass("ios-mode") ;

  //Prevent all link clicks
  $('a').click(function(e) {
    var attr = $(this).attr('data-ios');
    var attrJSON = '{"data-ios":"'+ $(this).attr('data-ios') +'",' +
      ' "data-ios-title":"'+ $(this).attr('data-ios-title') +'",' +
      ' "data-ios-url":"'+ $(this).attr('data-ios-url') +'"}';

    console.log(attrJSON);
    // For some browsers, is undefined; for others is false.
    if (typeof attr !== typeof undefined && attr !== false) {
      callNativeApp(attrJSON);
    }
    e.preventDefault();
  });

  //Prevent modal to open as popup in IOS
  $("[data-ios]").attr('data-toggle' , "");
}
function callNativeApp(iso_msg) {
  try {
    webkit.messageHandlers.callbackHandler.postMessage(iso_msg);
  } catch(err) {
    console.log('The native context does not exist yet');
  }
}


/*-------- ON DOCUMENT LOAD ----------*/
$(function() {
  "use strict";

  //*** Detect IOS UIWebview
  var standalone = window.navigator.standalone,
    userAgent = window.navigator.userAgent.toLowerCase(),
    safari = /safari/.test(userAgent),
    ios = /iphone|ipod|ipad/.test(userAgent);
  if (ios) {
    if (!standalone && safari) {
      //browser
    } else if (standalone && !safari) {
      //standalone
    } else if (!standalone && !safari) {
      //uiwebview
      new IOSmode();
    }
  } else {
    //not iOS
  }
});