import lightOrDarkColor from '@check-light-or-dark/color'; 

let translationStrings = {
    pt: {
      construction: 'Site em construção',
      access: 'Ir para o',
      dev: 'Desenvolvedor'
    },
    en: {
      construction: 'Site under construction',
      access: 'Go to',
      dev: 'Developer'
    },
    de: {
      construction: 'Website im Aufbau',
      access: 'Gehen sie zu',
      dev: 'Entwickler'
    },
    fr: {
      construction: 'Site en construction',
      access: 'Aller sur',
      dev: 'Développeur'
    },
    es: {
      construction: 'Sitio en construcción',
      access: 'Ir a',
      dev: 'Desarrollador'
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

export function multilanguage(key, language = 'en') {
  let lang = (language.includes('pt')) ? 'pt' : ((language.includes('de')) ? 'de' : ((language.includes('fr')) ? 'fr' : ((language.includes('es')) ? 'es' : 'en')));

  return translationStrings[lang][key] ?? '';
}