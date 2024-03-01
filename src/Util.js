import lightOrDarkColor from '@check-light-or-dark/color';

import enResume from './assets/resume-english.pdf';
import ptResume from './assets/resume-portuguese.pdf';

let translationStrings = {
    pt: {
      construction: 'Site em construção',
      access: 'Ir para o',
      dev: 'Desenvolvedor',
      cv: 'Baixar CV',
      cvlink: ptResume
    },
    en: {
      construction: 'Site under construction',
      access: 'Go to',
      dev: 'Developer',
      cv: 'Download resumé',
      cvlink: enResume
    },
    de: {
      construction: 'Website im Aufbau',
      access: 'Gehen sie zu',
      dev: 'Entwickler',
      cv: 'Lebenslauf herunterladen'
    },
    fr: {
      construction: 'Site en construction',
      access: 'Aller sur',
      dev: 'Développeur',
      cv: 'Télécharger le CV'
    },
    es: {
      construction: 'Sitio en construcción',
      access: 'Ir a',
      dev: 'Desarrollador',
      cv: 'Descargar CV'
    }
};

export function randomColor() {
  const color = Math.floor(Math.random() * 16777215).toString(16);

  return color.padStart(6, '0').toUpperCase();
}

export function randomNumber(min = 1000, max = 10000) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function isColorDark(color) {
  return lightOrDarkColor(color);
}

export function isColorBlack(color) {
  return (color === '#000000') ? 'black' : '';
}

export function multilanguage(key) {
  let language = navigator.language || navigator.userLanguage;
  let lang = (language.includes('pt')) ? 'pt' : ((language.includes('de')) ? 'de' : ((language.includes('fr')) ? 'fr' : ((language.includes('es')) ? 'es' : 'en')));

  return translationStrings[lang][key] ?? (translationStrings['en'][key] ?? '');
}