import "./App.css";
import { Component } from "react";
import AddContact from "./Components/AddContacts/AddContact";
import Filter from "./Components/Filter/Filter";
import ContactsList from "./Components/ContactsList/ContactsList";

class App extends Component {
  state = {
    contacts: [],
    name: "",
    number: "",
    filter: "",
  };
  Change = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  FilterChange = (e) => {
    this.setState({
      filter: e.target.value,
    });
  };
  AddContact = () => {
    if (this.state.name.trim() === "" || this.state.number.trim() === "") {
      return;
    }
    if (this.state.contacts.some((contact) => contact.name === this.state.name)) {
      alert(`${this.state.name} is already in contacts.`);
      return;
    }
    const LastId = this.state.contacts.reduce((max, contact) => Math.max(max, Number(contact.id)), 0);
    const newId = (LastId + 1).toString();

    const newContact = {
      id: newId,
      name: this.state.name,
      phone: this.state.number,
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
      name: "",
      number: "",
    }));
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = (filter || "").toLowerCase();
    return contacts.filter((contact) => contact.name.toLowerCase().includes(normalizedFilter));
  };
  DeleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  }
  render() {
    const visibleContacts = this.getFilteredContacts();
    console.log(this.state.contacts);
    return (
      <div className="app">
        <AddContact name={this.state.name} number={this.state.number} onChange={this.Change} onAdd={this.AddContact} />
        <Filter filterValue={this.state.filter} onFilterChange={this.FilterChange} />
        <ContactsList contacts={visibleContacts} onDelete={this.DeleteContact}/>
      </div>
    );
  }
}

export default App;
