import React from 'react'
import axios from 'axios'
import ReactHtmlParser from 'react-html-parser'

const CustomPage = ({ data }) => {
  return <div> {ReactHtmlParser(data)}</div>
}

export const getServerSideProps = async ({ params: { slug } }) => {
  const joinedSlug = slug.join('/')
  const res = await axios.get(`https://api.dev.examinenew.com/v1/pages/${joinedSlug}`)
  return {
    props: { data: res.data.data.content },
  }
}

export default CustomPage
