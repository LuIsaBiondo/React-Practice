import React from 'react'; // importamos react
import ReactDOM from 'react-dom'; // nos permite renderizar en el DOM

const list = [
  {
    email: 'a',
    firstname: 'Robin',
    lastname: 'Wieruch',
    telefono: 1988,
  },
  {
    email: 'b',
    firstname: 'Dave',
    lastname: 'Davidds',
    telefono: 1990,
  },
];

const ComplexList = () => (
  <ul>
    {list.map(item => (
      <li key={item.email}>
        <div>{item.email}</div>
        <div>{item.firstname}</div>
        <div>{item.lastname}</div>
        <div>{item.telefono}</div>
      </li>
    ))}
  </ul>
);

export default ComplexList;