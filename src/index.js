import React from 'react'; // importamos react
import ReactDOM from 'react-dom'; // nos permite renderizar en el DOM
const datos = [nombre, apellido, email, telefono];
const listItems = datos.map((dato) =>
  <li>{dato}</li>
);
ReactDOM.render(
    <ul>{listItems}</ul>,
    document.getElementById('root')
  );