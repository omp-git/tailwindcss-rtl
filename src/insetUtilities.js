const nameClass = require('./util/nameClass.js');

module.exports = (theme) => {
  const generators = [
    ([modifier, size]) => ({
      [':not([dir="rtl"]) ' + nameClass('end', modifier)]: {
        right: size,
        left: 'auto',
      },
      [':not([dir="rtl"]) ' + nameClass('start', modifier)]: {
        left: size,
        right: 'auto',
      },
      ['[dir="rtl"] ' + nameClass('start', modifier)]: {
        right: size,
        left: 'auto',
      },
      ['[dir="rtl"] ' + nameClass('end', modifier)]: {
        left: size,
        right: 'auto',
      }
    }),
  ];
  return generators.flatMap(generator => Object.entries(theme('inset')).flatMap(generator));
};
