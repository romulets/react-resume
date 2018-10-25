import React from 'react';
import DownArrow from '../Icons/down-arrow.svg'
import RightArrow from '../Icons/right-arrow.svg'

export default class ShrinkArrow extends React.Component {

    render() {
        return (
            <img style={styles.arrow} src={this.props.open ? DownArrow : RightArrow } onClick={this.props.onClick} alt="arrow"/>
        );
    } 
}

const styles = {
    arrow: {
        width: 20,
        position: 'absolute',
        right: 0,
        cursor: 'pointer',
        padding: 5,
        borderRadius: 20,
    }
}