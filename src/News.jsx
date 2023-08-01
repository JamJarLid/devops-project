import { Link } from 'react-router-dom';
import { useStates } from './utilities/states';

export default function News() {
  const s = useStates('main');

  return (
    <>
      <h1 class="news-title">News</h1>

      <div class="news-feed">
        {s.news.map(({ path, title, date, synopsis }) => (
          <Link className="article-link" to={path}>
            <div class="news-article">
              <img src="/images/news-stock-img.jpg"></img>
              <h2>{title}</h2>
              <div class="news-ingress">{synopsis}</div>
              <div class="news-date">{date}</div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
