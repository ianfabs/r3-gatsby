import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import PostPreview from "../../components/preview.post"
import {PageHeading, PageTitle} from "../../components/utils"

const PostsIndexPage = ({data}) => {
  let {nodes} = data.allMdx;
  
  let posts = nodes.map(({frontmatter, excerpt, parent}) => ({...frontmatter, excerpt, created: parent.birthTime, name: parent.name}));

  posts = posts.sort((a,b) => new Date(b.publishDate) - new Date(a.publishDate));

  posts = posts.filter( p => new Date(p.publishDate) <= Date.now() )

  posts = posts.filter( p => !p.name.includes("test") );

  return (
    <Layout 
      pageHeading={
        <PageHeading>
          <PageTitle color="white">
            Blog Posts
          </PageTitle>
        </PageHeading>
      }
    >

      {
        posts.map(p => <PostPreview {...p} key={p.name}/>)
      }
    </Layout>
  )
}

export const query = graphql`
{
  allMdx(filter: {fileAbsolutePath: {regex: "/posts/"}}) {
    nodes {
      frontmatter {
        title
        author
        publishDate
        image
        matchcard
      }
      excerpt
      parent {
        ... on File {
          name
          birthTime(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
}
`

export default PostsIndexPage;