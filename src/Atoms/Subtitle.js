import React from 'react'


export default class Subtitle extends React.Component {
    render() {
        return (
            <h2 style={styles.subtitle}>{this.props.children}</h2>
        )
    }
}

const styles = {
    subtitle: {
       fontFamily: "'Lato', sans-serif",
       fontSize: 18,
       position: 'relative',
       letterSpacing: 2,
       marginTop: 20,
       marginBottom: 20
    }
}