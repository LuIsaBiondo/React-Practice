import React from 'react'; // importamos react
import ReactDOM from 'react-dom'; // nos permite renderizar en el DOM
import list from './DatosLista';

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