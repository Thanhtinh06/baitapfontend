// import logo from './logo.svg';
import './App.css';
import DemoContext from './components/DemoHooks/DemoContext';
// import UseDispatch from './components/DemoHooks/UseDispatch';
// import UseEffect from './components/DemoHooks/UseEffect';
// import UseMemo from './components/DemoHooks/UseMemo';
import UseRef from './components/DemoHooks/UseRef';
// import UseSelector from './components/DemoHooks/UseSelector';
// import UseState from './components/DemoHooks/UseState';
// import LifeCycle from './components/LifeCycle/LifeCycle';
// import HomeRedex from './components/DemoRedux/HomeRedex';
// import ListProduct from './components/DemoProps/Exercise-props/ListProduct';


function App() {
  return (
    <div className="App">
      {/* <HomeRedex /> */}
      {/* <ListProduct /> */}
      {/* <LifeCycle /> */}
      {/* <UseState /> */}
      {/* <UseEffect />
      <UseSelector />
      <UseDispatch />
      <UseMemo /> */}
      <UseRef /> 
      <DemoContext />
    </div>
  );
}

export default App;
