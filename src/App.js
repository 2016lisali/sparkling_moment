
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from '@material-ui/core'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home'
import Auth from './components/Auth/Auth';

const  App = () => (
  <BrowserRouter>
    <Container maxWidth="lg">
      <Navbar />
      <Routes>
{/* here is different with video, component is deprecated. */}
        <Route path="/" exact element={<Home />} /> 
        <Route path="/auth" exact element={<Auth />} />
      </Routes>
    </Container>
  </BrowserRouter>
);


export default App;