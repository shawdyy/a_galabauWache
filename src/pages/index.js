import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Opener from "../components/Opener"
import AboutUs from "./../components/AboutUs"
import Leistungen from "./../components/Leistungen"

const IndexPage = () => {
  return(
    <Layout >
      <SEO title="Home" />
      <Opener />
      <AboutUs />
      <Leistungen/>
    </Layout>
  )
}

export default IndexPage
