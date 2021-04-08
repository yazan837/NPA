import {postData, fetchData, fileUpload} from './api';

export const fetchTeams = () => fetchData('/v1/teams');
export const fetchGames = () => fetchData('/api/v1/games');
