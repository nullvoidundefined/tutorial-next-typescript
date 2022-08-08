import { Date } from "../component";
import utilStyles from "../style/global.module.css";

type PostPageProps = {
  contentHtml: string;
  date: string;
  title: string;
};

const PostPage = ({ contentHtml, date, title }: PostPageProps) => {
  return (
    <article>
      <h1 className={utilStyles.headingXl}>{title}</h1>
      <div className={utilStyles.lightText}>
        <Date dateString={date} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </article>
  );
};

export { PostPage };
