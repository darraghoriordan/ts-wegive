import gql from "graphql-tag";
import * as React from "react";
import { ChildProps, graphql } from "react-apollo";
import { Link } from "react-router-dom";

export const ALL_POSTS = gql`
  query listings {
    listings {
      id
      title
    }
    listingsConnection {
      aggregate {
        count
      }
    }
  }
`;

interface IListing {
  id: string;
  title: string;
}

interface IResponseData {
  listings: IListing[];
  listingsConnection: {
    aggregate: { count: number };
  };
}

class Home extends React.Component<ChildProps<{}, IResponseData>, {}> {
  constructor(props: ChildProps<{}, IResponseData>) {
    super(props);
  }
  public render() {
    if (!this.props.data) {
      return;
    }
    const { error, listings, listingsConnection } = this.props.data;

    if (error) {
      return <h1>Error fetching posts!</h1>;
    }

    if (listings && listingsConnection) {
      // const areMorePosts = listings.length < listingsConnection.aggregate.count;
      return (
        <section>
          <ul className="Home-ul">
            {listings.map((post: any) => (
              <li className="Home-li" key={`post-${post.id}`}>
                <Link to={`/post/${post.id}`} className="Home-link">
                  <h3>{post.title}</h3>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      );
    }
    return <h2>Loading listings...</h2>;
  }
}

const withPosts = graphql<{}, IResponseData>(ALL_POSTS);

export default withPosts(Home);
