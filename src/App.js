import "./App.css";
import { Component } from "react";
import AddContact from "./Components/AddContacts/AddContact";
import Filter from "./Components/Filter/Filter";
import ContactsList from "./Components/ContactsList/ContactsList";

class App extends Component {
  state = {
    contacts: [
      { id: "1", name: "John Doe", phone: "123-456-7890" },
      { id: "2", name: "Jane Smith", phone: "987-654-3210" },
      { id: "3", name: "Alice Johnson", phone: "555-123-4567" },
      { id: "4", name: "Bob Brown", phone: "444-555-6666" },
    ],
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
  render() {
    const visibleContacts = this.getFilteredContacts();
    console.log(this.state.contacts);
    return (
      <div className="app">
        <AddContact name={this.state.name} number={this.state.number} onChange={this.Change} onAdd={this.AddContact} />
        <Filter filterValue={this.state.filter} onFilterChange={this.FilterChange} />
        <ContactsList contacts={visibleContacts} />
      </div>
    );
  }
}

export default App;
