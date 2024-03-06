import {Route, BrowserRouter as Router, Routes,Link, NavLink} from 'react-router-dom';

import Home from './home/Home';
import About from './about/About';
import Test from './Test';

const RouterDom = () =>{
    return(
      <>
      <Router>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/test">Test</Link>
      <NavLink to="test">TEst</NavLink>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </Router>
      </>
    )
}
export default RouterDom;