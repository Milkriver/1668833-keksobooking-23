import { getRandomCards } from './data.js';
import { renderCard } from './services/render.js';
import { setFormState } from './services/form-state.js';
const cards = getRandomCards();
const card = cards[0];
renderCard(card);
setFormState(true);
setTimeout(setFormState, 3000, false);
