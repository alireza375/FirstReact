
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'
import BookStore from './BookStore'
import Book from './Book'

function App() {

  const actors = ['Tom Hanks', 'Tom Cruise', 'Brad Pitt', 
    'Leonardo DiCaprio', 'Johnny Depp']

  const singers = [
    {id: 1, name: 'Arijit Singh', age: 34, country: 'India'},
    {id: 2, name: 'Atif Aslam', age: 38, country: 'Pakistan'},
    {id: 3, name: 'Justin Bieber', age: 27, country: 'Canada'},
    {id: 4, name: 'Ed Sheeran', age: 30, country: 'England'},
  ]

  const books = [
    {Id: 1, name: 'Hamlet', price: 100},
    {Id: 2, name: 'Podmoja', price: 190},
    {Id: 3, name: 'Biology', price: 290},
  ]
   

  return (
    <>
      <h1>Vite + React</h1>
      <BookStore books={books}></BookStore>
      {
        singers.map(singer=> <Singer singer={singer}></Singer>)
      }
      <Bookstore books={books}></Bookstore>
     {/* {
        actors.map(actor => <Actor name= {actor}></Actor>)
      }
      {/* <Todo task="Learn React with this course" isDone={true}></Todo>
      <Todo task="exprole the content of this course" isDone={true}></Todo>
      <Todo task="Try Jsx regurally" isDone={false}></Todo> */}
      {/* <Device name= "Laptop"></Device>
      <Person></Person>
      <Address></Address>
      <Student name="John Doe" grade="7" score="90"></Student>
      <Student name="ALi Khan" grade="8" score="70"></Student>
      <Student ></Student>
      <Developer></Developer> */}
    </>
  )
}

function Device() {
  return <h2>This is my Device: </h2>
}

function Person(){
  const person = {
    name: 'John Doe',
    age: 20,
  }

  return <h3>I am a {person.name} with age {person.age} years old.</h3>
}

function Student ({name=NaN, grade = 0, score= 0}) {
  console.log(name, grade, score);
  return (
    <div className='student'>
      <h3>I am a student</h3>
      <p>My name is: {name}</p>
      <p>Class: {grade}</p>
      <p>Score: {score}</p>
    </div>  
  )
}

function Address() {
  const address = {
    city: 'New York',
    country: 'USA',
  }

  return <h3>My Address is {address.city} city in {address.country}</h3>
}

function Developer() {
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    color: 'red',
    border: '2px solid purple',
  }
  return (
    <div style={developerStyle}>
      <h3>React Developer</h3>
      <p>I am a React Developer</p>
    </div>
  )
}

export default App
