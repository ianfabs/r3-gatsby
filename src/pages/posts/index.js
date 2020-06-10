import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import PostPreview from "../../components/preview.post"
import {PageHeading, PageTitle} from "../../components/utils"

const PostsIndexPage = ({data}) => {
  let {nodes} = data.allMdx;
  
  let posts = nodes.map(({frontmatter, excerpt, parent}) => ({...frontmatter, excerpt, created: parent.birthTime}));

  console.log(posts);

  return (
    <Layout 
      pageHeading={
        <PageHeading>
          <PageTitle>
            Blog Posts
          </PageTitle>
        </PageHeading>
      }
    >

      {
        posts.map(p => <PostPreview {...p}/>)
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
      }
      excerpt
      parent {
        ... on File {
          birthTime(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
}
`

export default PostsIndexPage;