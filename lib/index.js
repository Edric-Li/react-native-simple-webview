import React, { Component } from 'react';
import { WebView } from 'react-native';

import { generateHtml } from './utils';

class SimpleWebview extends Component {
    state = {
        height: 0
    };

    onMessage = (event) => {
        this.setState({ height: parseFloat(event.nativeEvent.data, 10) });
    };

    render() {
        const { props } = this;
        const { height } = this.state;
        const source = { ...props.source, html: generateHtml(props.source.html) };
        const style = Object.assign({ height }, props.style);
        const onMessage = Object.assign(this.onMessage, props.onMessage);
        const webViewProps = Object.assign({ ...props }, { source, style, onMessage });

        return (
            <WebView
                {...webViewProps}
            />
        );
    }
}

export default SimpleWebview;
