import './styles.css';
import { refs } from './js/refs';
import { fetchCountries } from './js/fetchCountries';
import lodash from 'lodash';

refs.input.addEventListener(
  'input',
  lodash.debounce(() => fetchCountries(refs.input.value), 1000),
);
