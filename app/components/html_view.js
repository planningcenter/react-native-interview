import React, { useEffect, useState } from 'react'
import { ActivityIndicator, View } from 'react-native'
import WebView from 'react-native-webview'

const template = body => `
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <style>
    body {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }
  </style>
  <body>${body}</body>
</html>
`

const injectedJavaScript = `
window.ReactNativeWebView.postMessage(document.documentElement.scrollHeight)
true; // note: this is required, or you'll sometimes get silent failures
`
const HTMLView = ({ html, style, ...props }) => {
  const [height, setHeight] = useState(100)
  const styles = {
    container: {
      height,
      flex: 1,
    },
  }
  const handleMessage = event => {
    setHeight(parseInt(event.nativeEvent.data))
  }
  const [content, setContent] = useState('')

  useEffect(() => setContent(template(html)), [html])

  return (
    <WebView
      source={{ html: content }}
      javaScriptEnabled={true}
      injectedJavaScript={injectedJavaScript}
      onMessage={handleMessage}
      originWhitelist={['*']}
      contentMode={'desktop'}
      startInLoadingState={true}
      renderLoading={() => (
        <View
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundColor: 'rgba(0,0,0,.2)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size="large" />
        </View>
      )}
      containerStyle={{ position: 'relative' }}
      style={[styles.container, style]}
      {...props}
    />
  )
}

export default HTMLView
