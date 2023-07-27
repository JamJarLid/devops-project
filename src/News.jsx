import { useStates } from './utilities/states';

export default function News() {
  const s = useStates('main');

  return (
    <>
      <h2>ADOVEO DevOps Team</h2>
      <h2>News</h2>
      <div class="news-feed">
        <div class="news-article">
          <h2>News Title</h2>
          <div class="news-date">
            <p>2023-07-27</p>
          </div>
          <p class="news-ingress">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
            facere?
          </p>
        </div>
      </div>
    </>
  );
}
