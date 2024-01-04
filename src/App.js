import {Route, Routes} from 'react-router-dom';

import Layout from '@components/Layout';
import Home from '@pages/Home';
import Signup from '@pages/user/Signup';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
    </Routes>
  );
}

export default App;
