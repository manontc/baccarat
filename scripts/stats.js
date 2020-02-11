const [total, tie, player, banker] = document.querySelectorAll('#stats div');

export function resetStats() {}

export function increaseStats(result) {
	total.textContent = Number(total.textContent) + 1;
	switch (result) {
		case 'player':
			player.textContent = Number(player.textContent) + 1;
			break;
		case 'banker':
			banker.textContent = Number(banker.textContent) + 1;
			break;
		case 'tie':
			tie.textContent = Number(tie.textContent) + 1;
			break;
	}
}