import { useAppSelector } from "@/app/appStore";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const NewsPage = () => {
  const currentNews = useAppSelector((state) => state.news.currentNews);

  if (!currentNews) {
    return (
      <div>
        <h1>Cannot find news</h1>
        <Link to="/">
          <p>Go to main page</p>
        </Link>
      </div>
    );
  }
  return (
    <main className={styles.news}>
      <h1>{currentNews.title}</h1>
    </main>
  );
};

export default NewsPage;
