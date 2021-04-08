import {postData, fetchData, fileUpload} from './api';

export const fetchTeams = () => fetchData('/v1/teams');
export const fetchCategory = () => fetchData('/types/categories/all');
