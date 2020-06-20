import React from "react"
import { Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import Layout from "../components/layout"
import Video from "../components/video"
import SEO from "../components/seo"
import { PageHeading, PageTitle } from "../components/utils"

let shortcodes = { Video, SEO }

export default (props) => {
  console.log(props);

  return (
    <MDXProvider components={shortcodes}>
      <Layout
        pageHeading={
          <PageHeading
            url="https://gopsusports.com/images/2019/9/10/BJC_Wrestling_A_19_MU_MS_1033.JPG?width=1920&quality=80&format=jpg"
            height="35vh"
            align="center"
          />
        }
      >
        {props.children}
      </Layout>
    </MDXProvider>
  )
}
