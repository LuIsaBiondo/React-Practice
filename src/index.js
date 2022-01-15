import React from 'react'; // importamos react
import ReactDOM from 'react-dom'; // nos permite renderizar en el DOM
function App() {
    const people = [
      { name: 'chris' },
      { name: 'nick' }
    ];
  
    return (
      <div>
        {people.map(person => (
          <p>{person.name}</p>
        ))}
      </div>
    );
  }