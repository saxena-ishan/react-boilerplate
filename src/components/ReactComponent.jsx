import React, { Component } from 'react';
import { connect } from '../redux';

class ReactComponent extends Component {
    render() {
        const { prop, setProp } = this.props;
        return (
            <div className="react-component-root" onClick={() => setProp(Math.floor((Math.random() * 100)))}>
                Component w/ Redux Prop: { prop }
            </div>
        )
    }
}

export default connect({
    props: {
        common: ["prop"],
    },
    actions: {
        common: ["setProp"],
    }
})(ReactComponent);
