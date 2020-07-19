import '../styles.css';
import {
  countryListMaker,
  countryCardMaker,
} from '../templates/templatesInsert';
import { errorTooMany, errorNotFound } from '../errors/errors';
import { clearContainer } from './clear';

export function fetchCountries(keyLetters) {
  clearContainer();
  const fetchUrl = 'https://restcountries.eu/rest/v2/name/';
  return fetch(`${fetchUrl}${keyLetters}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        errorNotFound();
      }
    })
    .then(data => {
      if (data) {
        if (data.length > 10) {
          errorTooMany();
        } else if (data.length < 2) {
          countryCardMaker(data[0]);
        } else {
          countryListMaker(data);
        }
      }
    });
}
