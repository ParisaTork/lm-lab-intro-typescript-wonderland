import { endAdventure } from '..';
import {meetTheQueen} from './8_queen_of_hearts';
import { askQuestion, clear, print } from '../console';

const hidingPlaces = ['Behind a bush of roses 🌹', 'Under the tea party table 🫖', 'In the royal palace 👑'] as const;
type HidingPlace = typeof hidingPlaces[number];

export function enterHideAndSeek(name: string) {
	clear(false);
    print('------------------------');
    print('You will now play a game of hide and seek! 👀 👀 👀');
	print('You can see a number of hiding places. Choose carefully! 👀 👀 👀');
	hidingPlaces.forEach((h, i) => print(`   ${i} - ${h}`));
	askQuestion('Which hiding place will you choose?', enterHidingPlace);
}

export function enterHidingPlace(hidingPlace: string): void {
	clear(true);
	const number = parseInt(hidingPlace);

	if (isNaN(number)) {
		print(`😮`);
		print(`That's not a number 😭`);
		return endAdventure();
	}

	if (number < 0 || number > hidingPlaces.length - 1) {
		print(`😮`);
		print(`${number} is an invalid number 😭`);
		return endAdventure();
	}

	if (hidingPlaces[number] === 'In the royal palace 👑') {
		return meetTheQueen();
	} else {
		print(`WHAAAAT ❓🤯😅❓`);
		print(`You can't find adventures down a ${hidingPlaces[number]}!`);
		return endAdventure();
	}
}
