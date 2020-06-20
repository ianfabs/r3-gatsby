import React from "react"
import { MDXProvider } from "@mdx-js/react"
import Layout from "./layout";
import SEO from "./seo";
import Video from "./video";
import {PageHeading, PageTitle} from "./utils";
import Pattern1 from "../images/pattern1.svg";
import Pattern2 from "../images/pattern2.svg";
import Pattern3 from "../images/pattern3.svg";
import Pattern4 from "../images/pattern4.svg";
import Pattern5 from "../images/pattern5.svg";
// import {css} from "styled-components";

const Pattern = (type) => {
  switch(type) {
    case 1: return Pattern1;
    case 2: return Pattern2;
    case 3: return Pattern3;
    case 4: return Pattern4;
    case 5: return Pattern5;
    default:  return Pattern3;
  }
};


export default class MDXLayout extends React.Component {
  constructor(props) {
    super(props);

    this.shortcodes = {Video, SEO, Pattern};
  }
  render() {
    console.log(this.props.pageContext)
    const {image, pattern} = this.props.pageContext.frontmatter;
    return (
      <MDXProvider components={this.shortcodes}>
        <Layout pageHeading={
          <PageHeading url={pattern ? Pattern(pattern) : image}>
            <PageTitle color="white">
            {this.props.pageContext.frontmatter.title}
            </PageTitle>
          </PageHeading>
        }>
          <SEO title={this.props.pageContext.frontmatter.title} />
          {this.props.children}
        </Layout>
      </MDXProvider>
    )
  }
}