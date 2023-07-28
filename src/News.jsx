import { useStates } from './utilities/states';

export default function News() {
  const s = useStates('main');

  return (
    <>
      <h1 class="news-title">ADOVEO DevOps Team</h1>
      <h1 class="news-title">News</h1>
      <div class="news-feed">
        <div class="news-article">
          <h2>News Title</h2>
          <p class="news-ingress">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            voluptas omnis ipsa accusantium esse temporibus.
          </p>
          <small>2023-07-27</small>
        </div>

        <div class="news-article">
          <h2>News Title</h2>
          <p class="news-ingress">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            voluptas omnis ipsa accusantium esse temporibus.
          </p>
          <small>2023-07-27</small>
        </div>
      </div>
    </>
  );
}
