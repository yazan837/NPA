import teams from './groups/teams';
import games from './groups/games';
import players from './groups/players';
export default {
  ...teams,
  ...games,
  ...players,
};
