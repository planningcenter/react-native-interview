import React, { useEffect, useState } from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { remark } from 'remark'
import html from 'remark-html'
import directions from './app/directions.md'
import HTMLView from './app/html_view'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  const [html, setHtml] = useState('')

  useEffect(() => {
    markdownToHtml(directions).then(setHtml)
  }, [])

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <View style={{ maxWidth: 1200, alignItems: 'center' }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 32,
                  paddingVertical: 24,
                }}>
                {`React "Native" Assignment`}
              </Text>
              <View style={{ flexDirection: 'row', alignItems: 'stretch' }}>
                <HTMLView
                  style={{
                    flex: 1,
                  }}
                  html={html}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const markdownToHtml = async (markdown = '') => {
  // Use remark to convert markdown into HTML string
  const processedContent = await remark().use(html).process(markdown)
  const contentHtml = processedContent.toString()

  return contentHtml
}

export default App
