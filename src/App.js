import React, { Component } from 'react';
import logo from './logo.svg';
import NavBar from './NavBar.js'
import Header from './Header.js'
import Menu from './Menu.js'
import Reservations from './Reservations.js'
import Contact from './Contact.js'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

const links = [
  { title: 'Menu', url: '#menu' },
  {title: 'Reservations', url: '#reservations'},
  {title: 'Contact', url: '#contact'}
]
const header = { title: 'Restaurant', description: 'Good food, no nonsense.', cta: 'Book now' }

const items = [
{ 
  name: 'Banh Mi', description: 'BBQ chicken / beef / pork sandwich', price: '$5'
},
{
  name: 'Pho', description: 'Beef noodle soup', price: '$9.50'
},
{
  name: 'Banh Thit Nuong', description: 'Vermicelli noodles with grilled meat and veggies', price: '$9.50'
},
{
  name: 'Iced Coffee', description: 'Drip coffee with condensed milk.', price: '$3.50'
}
]

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <NavBar links={links} />
        <Header elements={header} />
        <Menu items={items} />
        <Reservations />
        <Contact  />
      </div>
    );
  }
}

export default App;
