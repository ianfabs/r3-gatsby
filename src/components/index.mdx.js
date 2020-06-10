import React from "react"
import { Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import Layout from "../components/layout"
import Video from "../components/video"
import SEO from "../components/seo"
import { PageHeading, PageTitle } from "../components/utils"

let shortcodes = { Video, SEO }

export default ({ children }) => (
  <MDXProvider components={shortcodes}>
    <Layout
      pageHeading={
        <PageHeading
          url="https://yt3.ggpht.com/nKGyV37t8bEOruNO9ok-z6wDiViRo4VFPQ1h9244LvtKBBO0LuWMpqms2RpIoiQlwsK31H0RDwQ=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
          height="25vh"
          align="center"
        />
      }
    >
      {children}
    </Layout>
  </MDXProvider>
)
