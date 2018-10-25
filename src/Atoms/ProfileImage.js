import React from 'react'
import Colors from '../Constants/Colors';

export default class ProfileImage extends React.Component {
    render() {
        return (
            <img style={styles.profileImage} src={this.props.src} alt={this.props.alt} />
        )
    }
}

const styles = {
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 100,
        margin: '0 auto',
        display: 'block',
        border: `1px solid ${Colors.details}`
    }
}