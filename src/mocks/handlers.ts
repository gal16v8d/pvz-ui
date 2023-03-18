import { API_OBJECT } from '../config/ApiBaseConfig';
import { rest } from 'msw';
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
  rest.get(`*${API_OBJECT.ACHIEVEMENT}s`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(achievementsJson))
  ),
  rest.get(`*${API_OBJECT.GARDEN}s`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(gardensJson))
  ),
  rest.get(`*${API_OBJECT.ITEM}s`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(itemsJson))
  ),
  rest.get(`*${API_OBJECT.LEVEL}s`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(levelsJson))
  ),
  rest.get(`*${API_OBJECT.MINIGAME}s`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(minigamesJson))
  ),
  rest.get(`*${API_OBJECT.PLANT}s`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(plantsJson))
  ),
  rest.get(`*${API_OBJECT.PUZZLE}s`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(puzzlesJson))
  ),
  rest.get(`*${API_OBJECT.SURVIVAL}s`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(survivalsJson))
  ),
  rest.get(`*${API_OBJECT.ZOMBIE}s`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(zombiesJson))
  ),
];

export default handlers;
