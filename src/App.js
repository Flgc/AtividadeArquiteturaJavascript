import Routes from './Routes';
import {UserProvider} from './context/ListContext'

function App() {
  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  );
}

export default App;
