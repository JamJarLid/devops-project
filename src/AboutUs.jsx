import { useState } from 'react';

export default function AboutUs() {
  const s = useState('main');

  return (
    <>
      <h1 className="team-title">Möt teamet</h1>
      <div className="profile-list">
        <div className="profile-1">
          <img src="images/profile picture.png"></img>
          <h2 className="profile-name">Espen Lever</h2>
          <h3 className="profile-title">Team Lead</h3>
          <p className="profile-description">
            SCRUM Master / Main contact with stakeholders. Assisting the
            development teams in their progress.
          </p>
        </div>

        <div className="profile-2">
          <img src="images/profile picture.png"></img>
          <h2 className="profile-name">Harisha Gajavilli</h2>
          <h3 className="profile-title">Lead Frontend Developer</h3>
          <p className="profile-description">
            In charge of front-end design and development. Collaborate with
            SCRUM Master and clients to meet specifications.
          </p>
        </div>

        <div className="profile-1">
          <img src="images/profile picture.png"></img>
          <h2 className="profile-name">Simon Fröjd</h2>
          <h3 className="profile-title">
            Lead Backend Developer/ Security Co-lead
          </h3>
          <p className="profile-description">
            In charge of backend design and development (API and database).
            Leading API and collaborating with Andrea for application security.
          </p>
        </div>

        <div className="profile-2">
          <img src="images/profile picture.png"></img>
          <h2 className="profile-name">Andréa Bolin*</h2>
          <h3 className="profile-title">
            Lead Cloud Engineer/ Security Co-lead
          </h3>
          <p className="profile-description">
            Responsible for cloud deployment of the project. Collaborating with
            Christoffer for production environment setup. Working with Simon to
            ensure cloud security.
          </p>
        </div>

        <div className="profile-1">
          <img src="images/profile picture.png"></img>
          <h2 className="profile-name">Christoffer Danielsson*</h2>
          <h3 className="profile-title">Lead Testing/Integration Engineer</h3>
          <p className="profile-description">
            Responsible for the CI of the project. Leading in configuring the
            workflows for integration, as well as designing the automated tests.
          </p>
        </div>
      </div>
    </>
  );
}
