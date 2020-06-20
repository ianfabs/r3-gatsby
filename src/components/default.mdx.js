import React from "react"
import Layout from "./layout";
import SEO from "./seo";

// const Button = ({label}) => <button>{label}</button>;

export default class MDXLayout extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title={this.props.pageContext.frontmatter.title}/>
        {this.props.children}
      </Layout>
    )
  }
}