import berlin from './data/berlin.json';

import './App.css';

import IdCard from './components/IdCard.jsx';
/* import Greetings from "./components/Greetings.jsx";
import Random from "./components/Random.jsx";
import BoxColor from "./components/BoxColor.jsx";
import CreditCard from "./components/CreditCard.jsx";
import Rating from "./components/Rating.jsx" */ //console.log(berlin)

function App() {
  return (
    <div className="App">
      {
        <ol>
          {berlin.map((person, k) => (
            <IdCard
              key={k}
              firstName={person.firstName}
              lastName={person.lastName}
              gender="" // Add a default value for gender
              height={0} // Add a default value for height
              birth={20} // Add a default value for birth as a current date
              picture={person.img}
            />
          ))}
        </ol>
      }

      {/*       <Greetings />
      <Random />
      <BoxColor />
      <CreditCard />
      <Rating /> */}
    </div>
  );
}

export default App;
