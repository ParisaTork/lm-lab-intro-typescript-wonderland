import { endAdventure } from '..';
import { askQuestion, clear, print } from '../console';
import { meetTheCheshireCat } from './3_cheshire_cat';

export function openTheDoor() {
	clear(false);
	print('------------------------');
	print('You need to fit through the door!');
	askQuestion('Will that drink help you? Press ENTER to find out!', consume);
}

interface Comestible {
    name: string,
    colour: string,
    label: string,
    causesMicropsia: boolean,
    causesMacropsia: boolean,
}

function getComestibles(): Comestible {
	return {
			name: 'Green Drink',
            colour: 'green',
            label: 'drink me',
            causesMicropsia: true,
            causesMacropsia: false,
		};
}

export function consume(): void {
	clear(true);
	const consumable = getComestibles();
	
    if (consumable.causesMicropsia === true) {
        print('Hurray! You can go through the door!');
        return askQuestion('Press ENTER to continue! ', meetTheCheshireCat);
    } else {
        print('You are too large to fit through the door! 😱');
	    return endAdventure();
    }
}