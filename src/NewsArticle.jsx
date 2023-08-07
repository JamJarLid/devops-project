import { useParams } from 'react-router-dom';
import { useStates } from './utilities/states';

export default function NewsArticle() {
  const { newsPath } = useParams();
  const s = useStates('main');

  const article = s.news.find(
    (article) => article.path === '/nyheter/' + newsPath
  );

  return !article ? null : (
    <>
      <img className="article-picture" src="/images/news-stock-img.jpg" />
      <h1 className="article-title"> {article.title} </h1>
      <p className="article-date"> {article.date}</p>
      <p className="article-content">{article.content}</p>
    </>
  );
}
