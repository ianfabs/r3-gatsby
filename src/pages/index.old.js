import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import {PageHeading, PageTitle} from "../components/utils"


const IndexPage = () => ( 
  <Layout 
    pageHeading={
      <PageHeading 
        url="https://yt3.ggpht.com/nKGyV37t8bEOruNO9ok-z6wDiViRo4VFPQ1h9244LvtKBBO0LuWMpqms2RpIoiQlwsK31H0RDwQ=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
        height="25vh"
        align="center"
      >
        {/* <PageTitle color="white">
          The Ultimate Wrestling Podcast
        </PageTitle> */}
      </PageHeading>
    }
  >
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
