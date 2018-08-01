import gql from "graphql-tag";
import * as React from "react";
import { ChildProps, graphql } from "react-apollo";
interface IPost {
  title: string;
  id: string;
}

interface IResponseData {
  post: IPost;
}

interface IInputProps {
  postId: string;
}

const SINGLE_POST_QUERY = gql`
  query singleListing($postId: ID!) {
    listing(where: { id: $postId }) {
      id
      title
    }
  }
`;

class Post extends React.Component<ChildProps<IInputProps, IResponseData>, {}> {
  constructor(props: ChildProps<IInputProps, IResponseData>) {
    super(props);
  }

  public render() {
    if (!this.props.data) {
      return;
    }
    const { loading, post, error } = this.props.data;

    if (error) {
      return <h1>Error fetching the post!</h1>;
    }
    if (!loading && post) {
      return (
        <article>
          <h1>{post.title}</h1>
        </article>
      );
    }
    return <h2>Loading post...</h2>;
  }
}
const withPost = graphql<IInputProps, IResponseData>(SINGLE_POST_QUERY, {
  options: ({ postId }) => ({
    variables: {
      postId
    }
  })
});

export default withPost(Post);
