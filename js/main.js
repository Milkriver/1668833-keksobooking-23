import { getRandomCards } from './data.js';
import { renderCard } from './services/render.js';
import { disabledForm } from './services/form-state.js'
const cards = getRandomCards();
const card = cards[0];
renderCard(card);
disabledForm();
