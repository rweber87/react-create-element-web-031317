// const title = React.createElement('h1', {}, 'My First React Code');
// const paragraph = React.createElement('p', {}, 'Writing some more HTML. Cool stuff!');
// const container = React.createElement('div', {}, title);

// ReactDOM.render(
//   paragraph,
//   document.getElementById('main')
// );

const list =
  React.createElement('div', {},
    React.createElement('h1', {}, 'My favorite ice cream flavors'),
    React.createElement('ul', {},
      [
        React.createElement('li', { class: 'brown' }, 'Chocolate'),
        React.createElement('li', { class: 'white' }, 'Vanilla'),
        React.createElement('li', { class: 'yellow' }, 'Banana')
      ]
    ));
 
ReactDOM.render(list, document.getElementById('main'));