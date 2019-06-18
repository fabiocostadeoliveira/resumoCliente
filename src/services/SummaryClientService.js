import { URL_API_BACKEND } from './base';


export function summaryQuery(idClient){
    return fetch(`${URL_API_BACKEND}/summaryClient/${idClient}`).then(result => result.json())
}

export function activitiesQuery(idUser){
    return fetch(`${URL_API_BACKEND}/user/${idUser}`).then(result => result.json())
}