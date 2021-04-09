import {fetchData} from './api';

export const fetchTeams = () => fetchData('/api/v1/teams');
export const fetchGames = () => fetchData('/api/v1/games');
export const fetchPlayers = () => fetchData('/api/v1/players');
