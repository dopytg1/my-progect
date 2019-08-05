import React from "react";

import "./Component.css"

class CountryComponent extends React.Component {
    state = {
        isShowed: false
    }
    toggleShow = () => {
        this.setState({...this.state, isShowed: !this.state.isShowed})
    }
    render() {
        const modal = () => {
            if(this.state.isShowed) {
                return(
                    <div className="modalWindow">
                        
                    <button onClick={this.toggleShow} className="closeBtn">close modalWindow</button>
                        <div className="mainModal">
                            <div className="code">
                                <p> code: {this.props.data.alpha2Code}</p>
                            </div>
    
                            <div className="flag">
                                <img alt="flag" src={this.props.data.flag}></img>
                            </div>
            
                            <div className="name">
                                <p> name: {this.props.data.name}</p>
                            </div>
            
                            <div className="capital">
                                <p> capital: {this.props.data.capital}</p>
                            </div>
                            <div>
                                <p>population: {this.props.data.population}</p>
                            </div>
                        </div>
                    </div>
                );
            }
        }
        return(
            <section>
                {modal()}

                <div className="mainDiv">
                    <div className="code">
                        <p>{this.props.data.alpha2Code}</p>
                    </div>
    
                    <div className="flag">
                        <img alt="flag" src={this.props.data.flag}></img>
                    </div>

                    <div className="name">
                        <p>{this.props.data.name}</p>
                    </div>

                    <div className="capital">
                        <p>{this.props.data.capital}</p>
                    </div>

                    <div className="population">
                        <p>{this.props.data.population}</p>
                        <div className="btns">
                            <button onClick={this.props.deleteCountrie} className="deleteBtn">Delete</button>
                            <button onClick={this.toggleShow} className="modalBtn">Get info</button>
                        </div>

                    </div>
                </div>
            </section>
    
        )
    }
}


export default CountryComponent;