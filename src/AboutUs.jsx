import { useState } from 'react';

export default function AboutUs() {
  const s = useState('main');

  return (
    <>
      <h2>ADOVEO DevOps Team</h2>
      <h2>Möt teamet</h2>
      <div class="profile-1">
        <img src="images/profile picture.png"></img>
        <h2 class="profile-name">Espen Lever</h2>
        <h3 class="profile-title">Team Lead</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nisi
          reprehenderit iure. Quae, inventore cum? Quae, velit. Reprehenderit,
          eligendi totam.
        </p>
      </div>

      <div className="profile-2">
        <img src="images/profile picture.png"></img>
        <h2 class="profile-name">Harisha</h2>
        <h3 class="profile-title">Lead Frontend</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nisi
          reprehenderit iure. Quae, inventore cum? Quae, velit. Reprehenderit,
          eligendi totam.
        </p>
      </div>

      <div className="profile-1">
        <img class="profile-pfp"></img>
        <h2 class="profile-name">Simon</h2>
        <h3 class="profile-title">Lead Backend</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nisi
          reprehenderit iure. Quae, inventore cum? Quae, velit. Reprehenderit,
          eligendi totam.
        </p>
      </div>
    </>
  );
}
