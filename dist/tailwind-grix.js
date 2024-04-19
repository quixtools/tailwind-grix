const plugin = require('tailwindcss/plugin');

module.exports = plugin.withOptions(({gapX, gapY}) => {
  return function({ addComponents, config }) {
    const screens = config('theme.screens');
    const components = [
      {
        '.tgx-container, .tgx-container-fluid, .tgx-container-2xl, .tgx-container-xl, .tgx-container-lg, .tgx-container-md, .tgx-container-sm': {
          width: '100%', marginLeft: 'auto', marginRight: 'auto', paddingLeft: `calc(0.5*${gapX})`, paddingRight: `calc(0.5*${gapX})`
        },
        [`@media (min-width: ${screens['sm']})`]: { '.tgx-container-sm, .tgx-container': { maxWidth: `calc(${screens['sm']} - (4*${gapX}))` } },
        [`@media (min-width: ${screens['md']})`]: { '.tgx-container-md, .tgx-container-sm, .tgx-container': { maxWidth: `calc(${screens['md']} - (4*${gapX}))` } },
        [`@media (min-width: ${screens['lg']})`]: { '.tgx-container-lg, .tgx-container-md, .tgx-container-sm, .tgx-container': { maxWidth: `calc(${screens['lg']} - (4*${gapX}))` } },
        [`@media (min-width: ${screens['xl']})`]: { '.tgx-container-xl, .tgx-container-lg, .tgx-container-md, .tgx-container-sm, .tgx-container': { maxWidth: `calc(${screens['xl']} - (4*${gapX}))` } },
        [`@media (min-width: ${screens['2xl']})`]: { '.tgx-container-2xl, .tgx-container-xl, .tgx-container-lg, .tgx-container-md, .tgx-container-sm, .tgx-container': { maxWidth: `calc(${screens['2xl']} - (4*${gapX}))` } },
        '.tgx-row': { display: 'flex', flexWrap: 'wrap', marginLeft: `calc(-0.5*${gapX})`, marginRight: `calc(-0.5*${gapX})` },
        '.tgx-row > *': { width: '100%', maxWidth: '100%', marginTop: `${gapY}` ,paddingLeft: `calc(0.5*${gapX})`, paddingRight: `calc(0.5*${gapX})`, flexShrink: '0' },
        '.tgx-col': { flex: '1 0 0%' },
        '.tgx-row-cols-auto > *': { width: 'auto', flex: '0 0 auto' },
        '.tgx-row-cols-1 > *': { width: '100%', flex: '0 0 auto' },
        '.tgx-row-cols-2 > *': { width: '50%', flex: '0 0 auto' },
        '.tgx-row-cols-3 > *': { width: '33.333333%', flex: '0 0 auto' },
        '.tgx-row-cols-4 > *': { width: '25%', flex: '0 0 auto' },
        '.tgx-row-cols-5 > *': { width: '20%', flex: '0 0 auto' },
        '.tgx-row-cols-6 > *': { width: '16.666667%', flex: '0 0 auto' },
        '.tgx-col-auto': { width: 'auto', flex: '0 0 auto' },
        '.tgx-col-1': { width: '8.333333%', flex: '0 0 auto' },
        '.tgx-col-2': { width: '16.666667%', flex: '0 0 auto' },
        '.tgx-col-3': { width: '25%', flex: '0 0 auto' },
        '.tgx-col-4': { width: '33.333333%', flex: '0 0 auto' },
        '.tgx-col-5': { width: '41.666667%', flex: '0 0 auto' },
        '.tgx-col-6': { width: '50%', flex: '0 0 auto' },
        '.tgx-col-7': { width: '58.333333%', flex: '0 0 auto' },
        '.tgx-col-8': { width: '66.666667%', flex: '0 0 auto' },
        '.tgx-col-9': { width: '75%', flex: '0 0 auto' },
        '.tgx-col-10': { width: '83.333333%', flex: '0 0 auto' },
        '.tgx-col-11': { width: '91.666667%', flex: '0 0 auto' },
        '.tgx-col-12': { width: '100%', flex: '0 0 auto' },
        '.tgx-offset-1': { marginInlineStart: '8.333333%' },
        '.tgx-offset-2': { marginInlineStart: '16.666667%' },
        '.tgx-offset-3': { marginInlineStart: '25%' },
        '.tgx-offset-4': { marginInlineStart: '33.333333%' },
        '.tgx-offset-5': { marginInlineStart: '41.666667%' },
        '.tgx-offset-6': { marginInlineStart: '50%' },
        '.tgx-offset-7': { marginInlineStart: '58.333333%' },
        '.tgx-offset-8': { marginInlineStart: '66.666667%' },
        '.tgx-offset-9': { marginInlineStart: '75%' },
        '.tgx-offset-10': { marginInlineStart: '83.333333%' },
        '.tgx-offset-11': { marginInlineStart: '91.666667%' }
      }
    ];
    addComponents([...components]);
  };
});