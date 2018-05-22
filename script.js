
var movies = [
  {
    id: 1,
    title: 'Good Will Hunting',
    desc: 'A movie about a kid with an IQ of the charts and a lot of emotional/social issues.',
    src: './public/GoodWillHunting.jpeg'
  },
  {
    id: 2,
    title: 'IceAge',
    desc: 'A very funny movie about the adventures of pack of prehistorical animals.',
    src: './public/IceAge.jpg'
  },
  {
    id: 3,
    title: 'The Mission',
    desc: 'A dramatic history of a catholic mission in Brazil in 17th century.',
    src: './public/TheMission.jpg'
  },
  {
    id: 4,
    title: 'Glory Road',
    desc: 'Based on true story this film tells the story of the first time when an mostly Afroamerican basketball team won NCAA championship.',
    src: './public/GloryRoad.jpg'
  },
  {
    id: 5,
    title: 'A good year',
    desc: 'A funny, wise and trully moving story of London banker who inherits his uncle\'s vineyard in Provence.',
    src: './public/GoodYear.jpeg'
  }
];

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('img', {src: movie.src})
    );
});

var element =
React.createElement('div',  {},
 React.createElement('h1', {}, 'My favourite movies list'),
 React.createElement('ul', {}, moviesElements)
);
ReactDOM.render(element, document.getElementById('app'));
