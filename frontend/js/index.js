window.onload = () => {
	var homeSection = document.getElementById('home')
	var gmSection = document.getElementById('gm-screen')
	var characterSection = document.getElementById('character-section')
	var handbookSection = document.getElementById('handbook')
	var joinSection = document.getElementById('join-game')
	var startSection = document.getElementById('start-game')
	// Opens the start-game section to host a local game
	document.getElementById('start-game').onclick = () => {
		homeSection.style.display = 'none'
        startSection.style.display = 'block'
	}
	// Opens the join-game menu to join a local game
	document.getElementById('join-game').onclick = () => {
		homeSection.style.display = 'none'
        joinSection.style.display = 'block'
	}
	// Opens the handbook reference section
	document.getElementById('handbook').onclick = () => {
		homeSection.style.display = 'none'
        handbookSection.style.display = 'block'
	}
	// Opens the section to the user's characters and create a character
	document.getElementById('characters').onclick = () => {
		homeSection.style.display = 'none'
		characterSection.style.display = 'block'
	}
}