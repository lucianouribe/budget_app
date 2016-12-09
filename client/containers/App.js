import React from 'react';
import AddMyNumber from '../components/AddMyNumber';
import Expense from '../components/Expense';
import Income from '../components/Income';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.addNew = this.addNew.bind(this)
    this.deleteFinance = this.deleteFinance.bind(this)
    this.state = { finances: [] }
  }


  addNew(finance) {
    this.setState({ finances: [finance, ...this.state.finances] })
  }

  componentDidMount() {
    $.ajax({
      url: '/api/items',
      type: 'GET'
    }).done( finances => {
      this.setState({ finances });
    });
  }

  deleteFinance(id) {
    $.ajax({
      url: `/api/items/${id}`,
      type: 'DELETE'
    }).done( () => {
      this.setState({ finances: this.state.finances.filter( i => i.id !== id) })
    });
  }


  render() {
    return (
      <div className='container'>
        <AddMyNumber addNew={this.addNew} />
        <div className='row'>
          <div className='col m6'>
            <Income finances={this.state.finances} />
          </div>
          <div className='col m6'>
            <Expense finances={this.state.finances} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
