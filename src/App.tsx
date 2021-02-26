import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Catalog from './components/Catalog';
import Cart from './components/Cart';

const App: React.FC = () => {
  return (
    <Provider store={store}> {/*o Provider provê valores para os componentes de dentro baseado na context api*/}
      <Catalog />
      <Cart />
    </Provider>
  );
}

export default App;
