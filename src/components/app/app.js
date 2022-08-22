import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';

function App() {
//если true подсвечивается, если false, нет
  const data = [
    {name: 'John C.', salary: 800, increase: true},
    {name: 'Alex J.', salary: 3000, increase: false},
    {name: 'Hussein S.', salary: 15000, increase: false},
  ];

  return (
    <div className="app">
      <AppInfo/>

      <div className="search-panel">
        <SearchPanel/>
        <AppFilter/>
      </div>

      <EmployersList data={data}/>
      <EmployersAddForm/>
    </div>
  );
}

export default App;