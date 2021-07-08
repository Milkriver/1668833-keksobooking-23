import { getRandomCards } from './data.js';
import { renderCard } from './services/render.js';
const cards = getRandomCards();
const card = cards[0];
renderCard(card);
