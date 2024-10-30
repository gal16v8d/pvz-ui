import { API_OBJECT } from '../config/ApiBaseConfig';
import { http, HttpResponse } from 'msw';
import achievementsJson from './__mocks__/achievements.json';
import gardensJson from './__mocks__/gardens.json';
import itemsJson from './__mocks__/items.json';
import levelsJson from './__mocks__/levels.json';
import minigamesJson from './__mocks__/minigames.json';
import plantsJson from './__mocks__/plants.json';
import puzzlesJson from './__mocks__/puzzles.json';
import survivalsJson from './__mocks__/survivals.json';
import zombiesJson from './__mocks__/zombies.json';

const handlers = [
  http.get(`*${API_OBJECT.ACHIEVEMENT}s`, () =>
    HttpResponse.json(achievementsJson, { status: 200 })
  ),
  http.get(`*${API_OBJECT.GARDEN}s`, () =>
    HttpResponse.json(gardensJson, { status: 200 })
  ),
  http.get(`*${API_OBJECT.ITEM}s`, () =>
    HttpResponse.json(itemsJson, { status: 200 })
  ),
  http.get(`*${API_OBJECT.LEVEL}s`, () =>
    HttpResponse.json(levelsJson, { status: 200 })
  ),
  http.get(`*${API_OBJECT.MINIGAME}s`, () =>
    HttpResponse.json(minigamesJson, { status: 200 })
  ),
  http.get(`*${API_OBJECT.PLANT}s`, () =>
    HttpResponse.json(plantsJson, { status: 200 })
  ),
  http.get(`*${API_OBJECT.PUZZLE}s`, () =>
    HttpResponse.json(puzzlesJson, { status: 200 })
  ),
  http.get(`*${API_OBJECT.SURVIVAL}s`, () =>
    HttpResponse.json(survivalsJson, { status: 200 })
  ),
  http.get(`*${API_OBJECT.ZOMBIE}s`, () =>
    HttpResponse.json(zombiesJson, { status: 200 })
  ),
];

export default handlers;
