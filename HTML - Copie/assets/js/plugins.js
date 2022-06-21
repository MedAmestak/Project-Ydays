//Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());



// file upload js
"use strict";
function addMultiEventListener(e,t,n){for(var i=t.split(" "),r=0;r<i.length;r++)e.addEventListener(i[r],n,!1)}var InputFile=function(){arguments[0]&&"object"==typeof arguments[0]&&(this.options=arguments[0]);for(var e=document.querySelectorAll('input[type="file"]'),t=0;t<e.length;t++)this.createField(e[t])};InputFile.prototype.createField=function(e){var t=this.options||{},n=document.createElement("div");n.className="inf__drop-area",e.parentNode.insertBefore(n,e),n.appendChild(e);var i=document.createElement("span");i.className="inf__btn",i.innerText=t.buttonText||"Choose files",n.insertBefore(i,e);var r=document.createElement("span");r.className="inf__hint",r.innerText=t.hint||"or drag and drop files here",n.insertBefore(r,e),addMultiEventListener(e,"dragenter click focus",function(){n.classList.add("is-active")}),addMultiEventListener(e,"dragleave drop blur",function(){n.classList.remove("is-active")}),e.addEventListener("change",function(){var n=e.files.length;1===n?r.innerText=e.value.split("\\").pop():r.innerText=n+" "+(t.message||"files chosen")})};