import { useStates } from './utilities/states';

export default function AboutUs() {
  const s = useStates('main');

  return (
    <>
      <h2>ADOVEO DevOps Team</h2>
      <h2>Möt teamet</h2>
      <div class="Simon">
        <div>
          <p>Hej, jag heter Simon.</p>
        </div>
        <div>
          <img src="images/Om.jpg" alt="Bild av personen, kommer snart" />
        </div>
      </div>

      <div class="Espen">
        <div>
          <p>Hej, jag heter Espen.</p>
        </div>
        <div>
          <img src="images/Om.jpg" alt="Bild av personen, kommer snart" />
        </div>
      </div>

      <div class="Harisha">
        <div>
          <p>Hej, jag heter Harisha.</p>
        </div>
        <div>
          <img src="images/Om.jpg" alt="Bild av personen, kommer snart" />
        </div>
      </div>
    </>
  );
}
