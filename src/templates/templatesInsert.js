import { refs } from '../js/refs';
import country from '../templates/country.hbs';
import countryList from '../templates/country-list.hbs';

export const countryListMaker = list => {
  refs.container.insertAdjacentHTML('beforeend', countryList(list));
};

export const countryCardMaker = name => {
  refs.container.insertAdjacentHTML('beforeend', country(name));
};
