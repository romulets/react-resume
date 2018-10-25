import React from 'react'
import Colors from '../Constants/Colors';

export default class Section extends React.Component {
    render() {
        return (
            <section style={styles.container}>
                <div style={styles.stripDetail}></div>
                {this.props.children}
            </section>
        )
    }
}

const styles = {
    container: {
        position: 'relative',
        paddingLeft: 30,
        paddingRight: 20,
        marginBottom: 10
    },
    stripDetail: {
        background: Colors.details,
        height: '100%',
        width: 3,
        position: 'absolute',
        left: 0
    }
}