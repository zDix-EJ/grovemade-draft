/* Плавное перемещение по якорным ссылкам */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()

		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth',
		})
	})
})

/* Прозрачность шапки */

window.addEventListener('scroll', function () {
	let header = document.getElementById('head')
	let scrollTop = window.pageYOffset || document.documentElement.scrollTop
	header.style.opacity = 1 - scrollTop / 200
})
