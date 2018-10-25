import React from 'react'
import Colors from '../Constants/Colors';

export default class Link extends React.Component {
    render() {
        return (
            <a style={styles.title} href={this.props.href} target={this.props.target}>{this.props.children}</a>
        )
    }
}

const styles = {
    title: {
       fontFamily: "'Lato', sans-serif",
       fontSize: 14,
       letterSpacing: 0,
       color: Colors.details
    }
}