import React from 'react'

export default class List extends React.Component {
    render() {
        return (
            <ul style={styles.container}>
                {this.props.items.map((item, i) => (
                    <li style={styles.item} key={i}>{this.props.render(item)}</li>
                ))}
            </ul>
        )
    }
}

const styles = {
    container: {
        maxWidth: 700,
        margin: '0 auto',
        marginBottom: 20,
        paddingLeft: 20,
    },
    item: {
        listStyle: 'circle outside'
    }
}