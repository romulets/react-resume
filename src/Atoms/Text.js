import React from 'react'

export default class Text extends React.Component {
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
       textAlign: 'justify',
       lineHeight: 2
    }
}