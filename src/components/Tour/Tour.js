import React, { Component } from "react";
import "./tour.scss";
import window_close from "../../window-close.svg";
import caret_square_down from "../../caret-square-down.svg";
export default class Tour extends Component {
  state ={
    showInfo: false
  };

  handleInfo = () => {
    this.setState({
      showInfo:!this.state.showInfo
    })
  }
  render() {
    const { id, city, img, name, info } = this.props.tour;
    const { removeTour } = this.props;

    return (
      <article className="tour">
        <div className="img-container">
          <img src={img} alt="image of the tour" />
          <span className="close-btn">
          {/* <i className={window_close} /> */}
          <img src={window_close} style={{width:15}} alt="city tours" onClick={()=> removeTour(id)}/>
          </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info{" "}
            <span className="close-btnn">
              {/* <i className="fas fa-caret-square-down" /> */}
              <img src={caret_square_down} style={{width:15}} alt="city tours" onClick={this.handleInfo} />
            </span>
          </h5>
          {this.state.showInfo &&  <p className="info-text">{info}</p>}
         
        </div>
      </article>
    );
  }
}
