import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { remark } from 'remark'
import html from 'remark-html'
import HTMLView from '../components/html_view'
import directions from '../assignment.md'

export const Dashboard = () => {
  const [html, setHtml] = useState('')

  useEffect(() => {
    markdownToHtml(directions).then(setHtml)
  }, [])

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{ flexDirection: 'row', alignItems: 'stretch' }}>
          <HTMLView
            style={{
              flex: 1,
            }}
            html={html}
          />
        </View>
      </ScrollView>
      <Text style={{ padding: 12 }}># content in app/assignment.md</Text>
    </View>
  )
}

const markdownToHtml = async (markdown = '') => {
  // Use remark to convert markdown into HTML string
  const processedContent = await remark().use(html).process(markdown)
  const contentHtml = processedContent.toString()

  return contentHtml
}
