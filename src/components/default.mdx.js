import React from "react"
import { graphql } from "gatsby"
import Layout from "./layout";
import SEO from "./seo";

// const Button = ({label}) => <button>{label}</button>;

export default class MDXLayout extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);
  }
  render() {
    return (
      <Layout>
        <SEO title={this.props.pageContext.frontmatter.title}/>
        {this.props.children}
      </Layout>
    )
  }
}


export const query = graphql`
query MDXQuery($id: String!) {
  mdx(id: { eq: $id }) {
    id
    body
  }
}
`