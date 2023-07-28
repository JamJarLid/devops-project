import { useState } from 'react';

export default function AboutUs() {
  const s = useState('main');

  return (
    <>
      <h1 class="team-title">ADOVEO DevOps Team</h1>
      <h1 class="team-title">Möt teamet</h1>
      <div class="profile-list">
        <div class="profile-1">
          <img src="images/profile picture.png"></img>
          <h2 class="profile-name">Espen Lever</h2>
          <h3 class="profile-title">Team Lead</h3>
          <p class="profile-description">
            SCRUM Master / Main contact with stakeholders. Assisting the
            development teams in their progress.
          </p>
        </div>

        <div className="profile-2">
          <img src="images/profile picture.png"></img>
          <h2 class="profile-name">Harisha Gajavilli</h2>
          <h3 class="profile-title">Lead Frontend Developer</h3>
          <p class="profile-description">
            Responsible for the design and development of the front-end features
            of the application. Frequently in contact with the SCRUM Master and
            the clients to ensure the product matches the clients’
            specifications.
          </p>
        </div>

        <div className="profile-1">
          <img src="images/profile picture.png"></img>
          <h2 class="profile-name">Simon Fröjd</h2>
          <h3 class="profile-title">
            Lead Backend Developer/ Security Co-lead
          </h3>
          <p class="profile-description">
            Responsible for the design and development of the backend (API and
            database structure). Being lead on the API also gives him, in
            collaboration with Andrea, responsibility for the security of the
            application.
          </p>
        </div>

        <div className="profile-2">
          <img src="images/profile picture.png"></img>
          <h2 class="profile-name">Andréa Bolin*</h2>
          <h3 class="profile-title">Lead Cloud Engineer/ Security Co-lead</h3>
          <p class="profile-description">
            Responsible for the Deployment of the project into the cloud
            service. Working closely together with Christoffer to deploy the
            project into the cloud server used for the production environment of
            the application. Also working closely with Simon to ensure security
            through the cloud deployment.
          </p>
        </div>

        <div className="profile-1">
          <img src="images/profile picture.png"></img>
          <h2 class="profile-name">Christoffer Danielsson*</h2>
          <h3 class="profile-title">Lead Testing/Integration Engineer</h3>
          <p class="profile-description">
            Responsible for the CI of the project. Leading in configuring the
            workflows for integration, as well as designing the automated tests.
          </p>
        </div>
      </div>
    </>
  );
}
