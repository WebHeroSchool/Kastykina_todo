import React from 'react';

const element = (<h1>
  Мое первое React-приложение!
  </h1>);
  const task = (<div> 
    Сегодня я прошла темы:
  </div>);
  
  const ItemList = () => (<ul>
    <li>React-элементы;</li>
    <li>React-компоненты.</li>
  </ul>);

const App = () => (<div>
  {element}
  {task}
  <ItemList />
 </div>);

  export default App;