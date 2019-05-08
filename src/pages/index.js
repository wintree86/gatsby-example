import React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <div>
      <div className="Hero">
        <div className="HeroGroup">
          <h1>Learn to <br/>design and code React apps</h1>
          <p>Complete coursed about the best tools and design systems. Prototype and build apps with React and Swift</p>
          <Link to="/video">Watch the video</Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
