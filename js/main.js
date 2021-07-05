import { getRandomCards } from './data.js';
import { renderSingleCard as renderSingleCard } from './services/render.js';
const cards = getRandomCards();
const card = cards[0];
renderSingleCard(card);
