function handleCookieConsent(consent) {
	localStorage.setItem('cookieConsent', consent ? 'granted' : 'denied');
	document.getElementById('cookie-banner').style.display = 'none';
	if (consent) loadGoogleAnalytics();
}

function loadGoogleAnalytics() {
	const script1 = document.createElement('script');
	script1.setAttribute('async', '');
	script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-BWRFFMTZ59';
	document.head.appendChild(script1);

	const script2 = document.createElement('script');
	script2.innerHTML = `
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());
	gtag('config', 'G-BWRFFMTZ59');
	`;
	document.head.appendChild(script2);
}

window.addEventListener('DOMContentLoaded', () => {
	const consent = localStorage.getItem('cookieConsent');
	if (consent === 'granted') {
		loadGoogleAnalytics();
	} else if (consent !== 'denied') {
		document.getElementById('cookie-banner').style.display = 'flex';
	}
});
