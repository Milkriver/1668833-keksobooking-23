import { getRandomCards } from './data.js';
import { renderSingleCard as renderSingleCard } from './utils/generate.js';
getRandomCards();
const card = getRandomCards(0);
renderSingleCard(card);
