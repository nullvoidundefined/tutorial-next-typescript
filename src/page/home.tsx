import Link from "next/link";
import { Date } from "../component";

import globalStyles from "../style/global.module.css";
import { Post } from "../type";

type HomePageProps = {
  posts: Post[];
};

const HomePage = ({ posts }: HomePageProps) => {
  return (
    <>
      <section className={globalStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section
        className={`${globalStyles.headingMd} ${globalStyles.padding1px}`}
      >
        <h2 className={globalStyles.headingLg}>Blog</h2>
        <ul className={globalStyles.list}>
          {posts.map(({ id, date, title }) => (
            <li className={globalStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={globalStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export { HomePage };
