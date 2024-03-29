import { Link } from 'react-router-dom';
import { useStates } from './utilities/states';

export default function Home() {
  const s = useStates('main');

  return (
    <>
      <h2>ADOVEO DevOps Team</h2>

      <div className="DevOps-Team-Info">
        <h2 className="Title-info-home-page">
          Developers code, but DevOps teams build, automate, operate, and
          support.
        </h2>
        <div className="text-box">
          <p className="short-info">
            DevOps teams are essential for teams to operate on a large scale.
            Site reliability engineers (SREs) and DevOps engineers build
            pipelines, configure automation, set up the systems, and keep things
            running so developers can focus on building and implementing code.
          </p>
        </div>
      </div>

      <div className="Latest News">
        <h2 className="Latest">
          Here is the latest news regarding our DevOps Team
        </h2>

        <div className="news-article">
          <img src="/images/news-stock-img.jpg"></img>
          <h2>DevOps Achieves 99.9% Cloud Uptime</h2>
          <div className="news-ingress">
            DevOps achieves exceptional 99.9% uptime for cloud services,
            ensuring uninterrupted access and reliability for customers.
          </div>
          <div className="news-date">2023-07-31</div>
        </div>

        <p className="Link-news">
          For the latest news,
          <a href="http://localhost:5173/nyheter">click here</a>!
        </p>
      </div>
    </>
  );
}
