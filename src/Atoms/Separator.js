import React from 'react'
import Colors from '../Constants/Colors'

export default class Title extends React.Component {
    render() {
        return (
            <div style={styles.separator}></div>
        )
    }
}

const styles = {
    separator: {
        width: '20%',
        marginLeft: '40%',
        marginBottom: 30,
        height: 2,
        background: Colors.details,
    }
}