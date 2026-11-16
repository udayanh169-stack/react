const header=React.createElement('h1',{id:"headers"},'Hello React');
    //const root=ReactDOM.createRoot(document.getElementById('root'));
    //root.render(header);

const div = 
const div = React.createElement(
  'div',
  { id: "parent" },

  React.createElement(
    'div',
    { id: "child" },
    [
      React.createElement('h6', { id: "child2" }, 'Hello Child2'),
      React.createElement('h6', { id: "child3" }, 'Hello Child3')
    ]
  ),

  React.createElement(
    'div',
    { id: "cild" },
    [
      React.createElement('h3', { id: "cild2" }, 'Hello Child9'),
      React.createElement('h3', { id: "cild3" }, 'Hello Child0')
    ]
  )
);

    const par=ReactDOM.createRoot(document.getElementById('root'));
par.render(div);
console.log(div)