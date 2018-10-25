import React from 'react'

export default class Footer extends React.Component {
    render() {
        return (
            <p style={styles.title}>{this.props.children}</p>
        )
    }
}

const styles = {
    title: {
       fontFamily: "'Lato', sans-serif",
       fontSize: 14,
       letterSpacing: 0,
       textAlign: 'center',
       lineHeight: 2
    }
}