import React from 'react'

export default class Page extends React.Component {
    render() {
        return (
            <div style={styles.container}>{this.props.children}</div>
        )
    }
}

const styles = {
    container: {
        maxWidth: 700,
        margin: '0 auto',
        marginBottom: 20
    }
}