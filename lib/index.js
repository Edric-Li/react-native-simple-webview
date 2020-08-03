import React, { Component } from 'react';
import { WebView } from 'react-native';
import PropTypes from 'prop-types';

import { generateHtml } from './utils';

class AutoHeightWebView extends Component {
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

AutoHeightWebView.propTypes = {
    onSizeUpdated: PropTypes.func,
    baseUrl: PropTypes.string,
    files: PropTypes.arrayOf(
        PropTypes.shape({
            href: PropTypes.string,
            type: PropTypes.string,
            rel: PropTypes.string
        })
    ),
    style: ViewPropTypes.style,
    customScript: PropTypes.string,
    customStyle: PropTypes.string,
    zoomable: PropTypes.bool,
    originWhitelist: PropTypes.arrayOf(PropTypes.string),
    onMessage: PropTypes.func,
    source: PropTypes.object
};

export default AutoHeightWebView;
