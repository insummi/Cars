import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../actions/index'

class CarsList extends Component {    
    showList () {
        let car = this.props.cars.map(item => {
            return (
                <li onClick={() => this.props.select(item)} key={item.id}>{item.car}</li>
            )
        })

        return car;
    }

    render () {        
        return (
            <ol>
                {this.showList()}
            </ol>
        )
    }
}

const mapStateToProps = state => (
    {cars: state.cars}
)

const matchDispatchToProps = dispatch => {
    return bindActionCreators({select: select}, dispatch)
}


export default connect(mapStateToProps, matchDispatchToProps)(CarsList)