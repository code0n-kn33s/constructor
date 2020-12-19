# webpack4-pug-sass-example

clone and run:
>npm i && npm start

### Base filetree:
- __src__
  - [index.js](src/index.js)
  - [index.pug](src/index.pug)
  - __scripts__
    - [plugin.js](src/scripts/plugin.js)
  - __styles__
    - [main.sass](src/styles/main.sass)


## multiline variables
-
  var x = [
    {link: './img/svg/bacila.svg'},
    {link: './img/svg/salut.svg'},
    {link: './img/svg/heart.svg'}
  ]

## list loops
-var x = [ {link: 'a'}, {link: 'b'}, {link: 'c'} ]
each item in x
  div= item.link