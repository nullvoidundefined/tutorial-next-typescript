import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import layoutStyles from "./layout.module.css";
import globalStyles from "../../style/global.module.css";

import { siteTitle } from "../../constant";

type LayoutProps = {
  children: React.ReactNode;

  home?: boolean;
};
const Layout = ({ children, home }: LayoutProps) => {
  const name = "[Your Name]";

  return (
    <div className={layoutStyles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          content="Learn how to build a personal website using Next.js"
          name="description"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={layoutStyles.header}>
        {home ? (
          <>
            <Image
              alt={name}
              className={globalStyles.borderCircle}
              height={144}
              priority
              src="/images/profile.jpg"
              width={144}
            />
            <h1 className={globalStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  alt={name}
                  className={globalStyles.borderCircle}
                  height={108}
                  priority
                  src="/images/profile.jpg"
                  width={108}
                />
              </a>
            </Link>
            <h2 className={globalStyles.headingLg}>
              <Link href="/">
                <a className={globalStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={layoutStyles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
};

export { Layout };
