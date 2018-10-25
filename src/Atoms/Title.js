import React from 'react'

export default class Title extends React.Component {
    render() {
        return (
            <h1 style={styles.title}>{this.props.children}</h1>
        )
    }
}

const styles = {
    title: {
       fontFamily: "'Lato', sans-serif",
       fontSize: 20,
       textAlign: 'center',
       letterSpacing: 2,
       position: 'relative',
       marginBottom: 10
    }
}