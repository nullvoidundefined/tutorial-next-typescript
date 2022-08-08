import { GetStaticProps } from "next";
import Head from "next/head";

import { Layout } from "../src/component";
import { siteTitle } from "../src/constant";
import { HomePage } from "../src/page";
import { getSortedPostsData } from "../src/service";
import { Post } from "../src/type";

type HomeRouteProps = {
  posts: Post[];
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getSortedPostsData();
  return {
    props: {
      posts,
    },
  };
}

export default function HomeRoute({ posts }: HomeRouteProps) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <HomePage posts={posts} />
    </Layout>
  );
}
