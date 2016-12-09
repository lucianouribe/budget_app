import React from 'react';

class AddMyNumber extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let item = this.refs.item;
    $.ajax({
      url: '/api/items',
      type: 'POST',
      data: { item: {name: item.value }}
    }).done( finance => {
      this.props.addNew(finance);
      item.value = null;
    }).fail (msg => {
      // DO something here
    })
  }

  render() {
    return (
      <div className='row'>
        <form onSubmit={this.handleSubmit}>
          <input className='col m4' ref='item' placeholder='Add Item' />
          <input className='col m4' ref='item-price' placeholder='Value' />
          <div className='col m2 '>
            <input type='checkbox' id='check' defaultChecked={false}/>
            <label htmlFor='check'>Income?</label>
          </div>
          <input className='btn' type='submit' />
        </form>
      </div>
    );
  }
}

export default AddMyNumber;
