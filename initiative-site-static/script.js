document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contact-form').addEventListener('submit', (event) => {
	event.preventDefault();

	const form = event.currentTarget;
	const formData = new FormData(form);
	const body = `Name: ${formData.get('name')}\nEmail: ${formData.get('email')}\n\n${formData.get('message')}`;
	const mailto = `mailto:contact@ruleoflawappeal.org?subject=${encodeURIComponent(formData.get('subject'))}&body=${encodeURIComponent(body)}`;

	window.location.href = mailto;
});
