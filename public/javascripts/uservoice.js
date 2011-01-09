var uservoiceOptions = {
 key: 'wheelmap',
 host: 'wheelmap.uservoice.com',
 forum: '31554',
 lang: 'en',
 showTab: false
};
function _loadUserVoice() {
 var s = document.createElement('script');
 s.src = ("https:" == document.location.protocol ? "https://" :
"http://") + "cdn.uservoice.com/javascripts/widgets/tab.js";
 document.getElementsByTagName('head')[0].appendChild(s);
}
_loadSuper = window.onload;
window.onload = (typeof window.onload != 'function') ?
_loadUserVoice : function() { _loadSuper(); _loadUserVoice(); };