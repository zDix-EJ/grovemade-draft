/* Плавное перемещение по якорным ссылкам */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()

		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth',
		})
	})
})

/* Бургер меню активация */

const burger = document.getElementById('burger')
const menu = document.getElementById('menu')

burger.addEventListener('click', () => {
	burger.classList.toggle('active')
	menu.classList.toggle('active')
})
