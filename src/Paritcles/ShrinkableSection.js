import React from 'react';
import Subtitle from '../Atoms/Subtitle';
import Section from '../Atoms/Section';
import ShrinkArrow from '../Atoms/ShrinkArrow';

export default class ShrinkableSection extends React.Component {

    state = {
        open: true
    }

    render() {
        return (
            <div>
                <Subtitle>{this.props.title} <ShrinkArrow open={this.state.open} onClick={() => this.setState({ open: !this.state.open })}/> </Subtitle>
                {this.state.open ? (
                    <Section>
                        {this.props.children}
                    </Section>
                ) : null}
            </div>
        );
    } 
}