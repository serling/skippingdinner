import React from 'react';
import PropTypes from 'prop-types';

const App = ({ children, css, js }) => (
  <html>
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Skipping Dinner - Comedy Improv Theater</title>
      <meta
        name="description"
        content="Welcome to our tiny, humor-filled corner of the web. We offer a wide range of comedic show formats, whatever the venue or event may be."
      />
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat|Open+Sans|Gloria+Hallelujah"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
        integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp"
        crossorigin="anonymous"
      />
      {css.map(file => <link key={file} rel="stylesheet" href={`/${file}`} />)}
    </head>
    <body>
      <div id="mount-point">{children}</div>
      {js.map(file => <script key={file} src={`/${file}`} />)}
    </body>
  </html>
);

App.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  css: PropTypes.array,
  js: PropTypes.array
};

App.defaultProps = {
  css: [],
  js: []
};

export default App;
