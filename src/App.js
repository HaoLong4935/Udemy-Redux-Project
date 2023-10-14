import logo from './logo.svg';
// import './App.css';
// import { connect } from 'react-redux';
import { increaseCounter, decreaseCounter } from '../src/action/actions';
import { useDispatch, useSelector } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';


function App(props) {
  const dispatch = useDispatch();

  const newCount = useSelector((state) => {
    return state.counter.count
  })

  const handleIncrease = () => {
    dispatch(increaseCounter())
  }



  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <h1>Hello world with React and Hoi Dan IT!</h1>
    //     <div>Count : {newCount}</div>
    //     <button onClick={() => handleIncrease()}>Increase</button>
    //     <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
    //   </header>
    // </div>
    <Home />
  );
}

//Mapping state của redux store + props
// const mapStateToProps = state => {
//   return {
//     count: state.counter.count,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increaseCounter: () => dispatch(increaseCounter()),

//     decreaseCounter: () => dispatch(decreaseCounter()),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)

export default App


