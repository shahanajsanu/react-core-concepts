import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const names=['rimi', 'sanu', 'aru', 'rimi', 'paru', 'mimi'];
  const products=[
    {name: 'Photoshop', price: '$90.99'},
    {name: 'Illustrator', price: '$80.99'},
    {name: 'PDF Reader', price: '$50.99'}
  ]
  var person1= {
    name: "Khurshed Alom",
    job: "Doctor"
  }
  var person2= {
    name: "Rasheda Begam",
    job: "Teacher"
  }
  var style={
    color: 'blue',
    backgroundColor: 'yellow'
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>I m a react person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            names.map(name => <li>{name}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
      
        <Product name={products[0].name} price={products[0].price}></Product>
        <Product name={products[1].name} price={products[1].price}></Product>
        <Product name={products[2].name} price={products[2].price}></Product>
        <Person name='Rohit Sen' profession='Doctor'></Person>
        <Person2></Person2>
        <Person3></Person3>
        
        <h3 style={style}>Name : {person1.name + " " + person1.job}</h3>
        <h3 style={{color: 'red', backgroundColor: 'lightgray',}}>Name : {person2.name + " " + person2.job}</h3>

      </header>
    </div>
  );
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}, Email: {user.email}, Phone: {user.phone}</li>)
        }
      </ul>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count -1)}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

function Product(props){
  const productStyle={
    borderRadius: '5px',
    backgroundColor:'gray',
    padding: '20px',
    margin: '10px',
    height: '200px',
    width: '200px',
    float: 'left',
    boxShadow: '5px 5px 10px grey'
  }
  return (
    <div style={productStyle}>
      <h3>{props.name}</h3>
      <h1>{props.price}</h1>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props){
  const personStyle={
    border: '2px solid red',
    margin: '10px',
    padding: '5px'
  }
  return (
  <div style={personStyle}>
    <h5>Name: {props.name}</h5>
  <h6> Profession: {props.profession}</h6>
    <p>She is great men</p>
  </div>
  )
}
function Person2(){
  return (
      <div style={{border: '2px solid yellow', margin: '5px'}}>
        <h5>Name: Borno Mirza</h5>
        <p>She is good person</p>
      </div>
  )
}
function Person3(){
  return (
      <div style={{border: '2px solid yellow', margin: '5px'}}>
        <h5>Name: Reha Mirza</h5>
        <p>She is great women</p>
      </div>
  )
}

export default App;
