$(function(){
    window.__insp = window.__insp || [];
    __insp.push(['wid', 2011419361]);
    (function() {
        function ldinsp(){if(typeof window.__inspld != "undefined") return; window.__inspld = 1; var insp = document.createElement('script'); insp.type = 'text/javascript'; insp.async = true; insp.id = "inspsync"; insp.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://cdn.inspectlet.com/inspectlet.js'; var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(insp, x); };
        setTimeout(ldinsp, 500); document.readyState != "complete" ? (window.attachEvent ? window.attachEvent('onload', ldinsp) : window.addEventListener('load', ldinsp, false)) : ldinsp();
    })();
});

//function exibirNomesLink(){
//var links = $('.social').find('a');
//var content = [];
//content.push = $(links).find('span').text();

//$(links).tooltipster({
//theme: 'tooltipster-shadow',
//delay: 0
//});
//};

//function criarPanel(objList){
//var div = $('<div>').attr('id','panel').addClass('panel');
//var p = $('<p>');
//p.text(objList.find('span').text());
//div.append(p);
//return div;
//}
