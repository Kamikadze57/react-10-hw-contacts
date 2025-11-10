import { Component } from "react";

class AddContact extends Component {
  render() {
    const { name, number, onChange, onAdd } = this.props;
    return (
      <div className="add__box">
        <form className="add__form">
        <label className="add__label">
          <p>Name</p>
          <input className="add__input" type="text" name="name" value={name} onChange={onChange} />
        </label>
        <label className="add__label">
          <p>Phone</p>
          <input className="add__input" type="number" name="number" value={number} onChange={onChange} />
        </label>
        </form>
        <button className="add__btn" onClick={onAdd}>
          Add contact
        </button>
      </div>
    );
  }
}

export default AddContact;
