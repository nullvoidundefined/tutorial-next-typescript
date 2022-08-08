import {
  GetStaticProps,
  GetStaticPropsResult,
  GetStaticPropsContext,
  GetStaticPaths,
} from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";

import { Layout } from "../../src/component/layout/layout";
import { PostPage } from "../../src/page";
import { getAllPostIds, getPostData } from "../../src/service";
import { Post } from "../../src/type";

type PostRouteType = {
  post: Post;
};

type PostRouteParams = {
  id: string;
};

type PostRouteProps = {
  params: PostRouteParams;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>): Promise<
  GetStaticPropsResult<PostRouteType>
> => {
  const id = params?.id || ""; // There will always be an id due to routing
  const post: Post = await getPostData(id);
  return {
    props: {
      post,
    },
  };
};

export default function PostRoute({ post }: PostRouteType) {
  const { contentHtml, date, title } = post;

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <PostPage contentHtml={contentHtml} date={date} title={title} />
    </Layout>
  );
}
