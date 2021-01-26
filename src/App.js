import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import Wigets from './Wigets';

function App() {
  return (
    <div className="app">    

      {/* Header */}
      <Header/>

      {/* App Body */}
      <div className = "app__body">
          <Sidebar />
          <Feed />
          <Wigets/>
      </div>
      
    </div>
  );
}

export default App;
