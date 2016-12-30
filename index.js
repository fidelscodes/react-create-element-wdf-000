const title = React.createElement('h1', {}, 'My First React Code');

// ReactDOM.render(
//   title,
//   document.getElementById('main')
// );

const paragraph = React.createElement('p', {}, 'Writing some more HTML. Cool stuff!');
// use an array to pass multiple children to createElement()
const container = React.createElement('div', {}, [title, paragraph]);

ReactDOM.render(
  container,
  document.getElementById('main')
);

const list =
  React.createElement('div', {},
    React.createElement('h1', {}, 'My favorite ice cream flavors'),
    React.createElement('ul', {},
      [
        // since 'class' is a reserved keyword in JS, we specify classnames by using... className prop
        // we can also add any other HTML attributes such as id, disabled and so on
        React.createElement('li', { className: 'brown' }, 'Chocolate'),
        React.createElement('li', { className: 'white' }, 'Vanilla'),
        React.createElement('li', { className: 'yellow' }, 'Banana')
      ]
    ));

ReactDOM.render(list, document.getElementById('main'));
