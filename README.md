# tailwind-grix
Tailwind clone of Bootstrap grid system
[Demo](https://quixtools.github.io/tailwind-grix/)


### Usage
- Download the 'tailwind-grix.js' file from github.
- Require the plugin in your 'tailwind.config.js' file.
```sh
plugins: [
  require('./YOUR_PATH/tailwind-grix.js')({
    gapX: '1rem',
    gapY: '1rem'
  })
],
```
- Set 'gapX' and 'gapY' parameters as you wish for horizontal and vertical gaps.
- Ready to Go...



## Important
- Add tgx- prefix to the bootstrap class names.
- Using default tailwind breakpoints. ( sm, md, lg, xl, 2xl )
- Use tailwind style for responsiveness. ( tgx-col sm:tgx-col-2 md:tgx-col-4 )
- [Bootstrap documentation](https://getbootstrap.com/) can be used for more...



## License
MIT