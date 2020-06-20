import React from "react";
import styled from "styled-components";
import Matchcard from "../images/matchcard.png";
import {h, styles, Button} from "./utils";
import { Link } from "gatsby";

const PreviewTitle = h(2);



export const PreviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 610px) {
    flex-direction: column;
  }
  align-items: flex-start;
  margin: 4vmin 0;
  height: inherit;
`;

export const PreviewContent = styled.article`
  font-family: Roboto, sans-serif;
  font-weight: 300;
  font-size: 16px;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: center;
  width: 75%;
  padding: 0vmin 2vmin;
  @media (max-width: 610px) {
    width: 100%;
    justify-content: space-between;
  }
`

const Metadata = ({className, author, created}) => {
  return (
    <section className={className}>
      <span>By {author}</span>
      <span>{created}</span>
    </section>
  )
};

export const PreviewPostMetadata = styled(Metadata)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${styles["light-1"]};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 600;
  font-size: 0.8em;
  width: 100%;
  margin-top: 1vmax;
  margin-bottom: 1vmax;
`

export const PreviewThumbnail = styled.img`
  width: 30%;
  height: inherit;
  @media (max-width: 610px) {
    width: 100%;
  }
`

export const ButtonContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  align-content: flex-end;
  justify-content: flex-end;

`

export default ({title, thumbnail, excerpt, author, created, name}) => {

  return (
    <PreviewContainer>
      <PreviewThumbnail
        src={thumbnail ?? Matchcard}
      />
      <PreviewContent>
        <PreviewTitle caps spaced color="gray">{title}</PreviewTitle>
        <PreviewPostMetadata author={author} created={created}/>
        <p>
          {excerpt}
        </p>
        <ButtonContainer>
          <Link to={`/posts/${name}`}>
            <Button>Read More</Button>
          </Link>
        </ButtonContainer>
      </PreviewContent>
    </PreviewContainer>
  );
}