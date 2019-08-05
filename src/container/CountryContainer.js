import React from 'react';

import CountryComponent from "../Component/CountryComponent"
import "../Component/Component.css"

class CountryContainer extends React.Component {
  state = {
    data:[],
    data1:[]
  }


  componentWillMount=() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(responce => responce.json())
      .then(body => this.setState({ data: body , data1: body}))
      .catch(err => console.log(err));
  }

  deleteCountrie = (index) => {
    let countries = this.state.data;
    countries.splice(index,1);
    
    this.setState({ data: countries });
  }

  showThisCountry = (title) => {
    let arr = [];
    console.log(title);
    for(let i = 0; i < this.state.data.length; i++) {
        if(title === this.state.data[i].name) {
          arr.push(this.state.data[i]);
          this.setState({ data: arr });
        }else if(title === "") {
          this.setState({ data: this.state.data1 })
        }
    }
  }

  render() {
    return (
        <div>
          <div className="sort">
            <input type="text"
             className="sortInp"
             onChange={(event) => this.showThisCountry(event.target.value)}
             placeholder="Find your own country"
             ></input>
          </div>
          
          <div className="app-main">
            <div ><p>code</p></div>
            <div ><p>flag</p></div>
            <div ><p>name</p></div>
            <div ><p>capital</p></div>  
            <div ><p>population</p></div>
          </div>
          
         {this.state.data.map((item, index) =>
        <CountryComponent 
        key={index}  
        deleteCountrie={() => this.deleteCountrie(index)}
        data={item}


        />)}
         
      </div>
    )
  }
}

export default CountryContainer;