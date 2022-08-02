import './styles.css';
import Text from './Components/Text.jsx';
import Offer from './Components/Offer';
import Form from './Components/Form';




function App() {
  return (
  <div className='page'>
    <div className="text-center container-fluid col-sm-12 py-5" >
      <div className='row'>
        <div className='col'>
          <Text className=''/>
        </div>
        <div className='col'>
          <Offer className=''/>
          <Form className=''/>
        </div>
      </div>
    </div> 
  </div>
  );
}

export default App;
