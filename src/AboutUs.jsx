import { useState } from 'react';

export default function AboutUs() {
  const s = useState('main');

  return (
    <>
      <h2>ADOVEO DevOps Team</h2>
      <h2>Möt teamet</h2>
      <div className="Simon">
        <div>
          <p>Hej, jag heter Simon.</p>
        </div>
        <div>
          <img src="images/Om.jpg" alt="Bild av personen, kommer snart" />
        </div>
      </div>

      <div className="Espen">
        <div>
          <p>Hej, jag heter Espen.</p>
        </div>
        <div>
          <img src="images/Om.jpg" alt="Bild av personen, kommer snart" />
        </div>
      </div>

      <div className="Harisha">
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
