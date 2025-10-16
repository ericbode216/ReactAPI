import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HouseList from '../house/HouseList.tsx';
import './App.css';
import Header from './Header.tsx';
import HouseDetail from '../house/HouseDetail.tsx';
import HouseEdit from '../house/HouseEdit.tsx';
import HouseAdd from '../house/HouseAdd.tsx';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className='container'>
        <Header subtitle='Providing houses all over the world!!'/>
        <Routes>
          <Route path="/" element= {<HouseList/>}></Route>
          <Route path="/house/:id" element= {<HouseDetail/>}></Route>
          <Route path="/house/add" element = {<HouseAdd/>}></Route>
          <Route path="/house/edit/:id" element = {<HouseEdit/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
