import { getRandomCards } from './data.js';
import { renderCard } from './services/render.js';
import { activateForm, deactivateForm, validateGuests } from './services/form.js';
const cards = getRandomCards();
const card = cards[0];
renderCard(card);
deactivateForm(true);
setTimeout(activateForm, 1000, false);
validateGuests();
