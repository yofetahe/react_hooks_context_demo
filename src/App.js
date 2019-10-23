import React from 'react';
import {Container} from "semantic-ui-react";

import Counter from "./views/Counter.jsx";
import Contacts from './views/Contacts.jsx';

function App() {
  return (
    <Container>
      <h1>React Hooks Context Demo</h1>
      <Counter />
      <Contacts />
    </Container>
  );
}

export default App;
