import React, {Component} from 'react';
import {connect} from 'react-redux';

class Details extends Component {
    render () {
        if(!this.props.car){
            return (<p>Выберите автомобиль...</p>)
        }
        return (
            <div>
                <h2>{this.props.car.car}</h2>
                <img src={this.props.car.img}/>
                <p>{this.props.car.desc}</p>
            </div>
        )
    }
}

const mapStateToProps = state => (
    {car: state.active}
)

export default connect(mapStateToProps)(Details)