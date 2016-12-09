import React from 'react';

class AddMyNumber extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let name = this.refs.name;
    let price = this.refs.price;
    let check = this.refs.check;
    $.ajax({
      url: '/api/items',
      type: 'POST',
      data: { item: {name: name.value, price: price.value, check: check.value }}
    }).done( finance => {
      this.props.addNew(finance);
      name.value = null;
      price.value = null;
      check.value = null;
    }).fail (msg =>{
      // DO something here
    })
  }

  render() {
    return (
      <div className='row'>
        <form onSubmit={this.handleSubmit}>
          <input className='col m4' ref='name' placeholder='Add Item' />
          <input className='col m4' ref='price' placeholder='Value' />
          <div className='col m2 '>
            <input type='checkbox' ref='check' />
            <label htmlFor='check'>Income?</label>
          </div>
          <input className='btn' type='submit' />
        </form>
      </div>
    );
  }
}

export default AddMyNumber;
