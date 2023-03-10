import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/nav/nav.component';
import Signin from './routes/sign-in/sign-in.component';


const Shop = () => {
  return (
    <h1>This is a shop page</h1>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route  index element={<Home />} />
        <Route path='shop' index element={<Shop />} />
        <Route path='sign-in' index element={<Signin />} />
      </Route>  
    </Routes>
  );
};

export default App;
