export default function Footer() {
  return (
    <>
      <footer>
        <div className="footerleft">
          <h3>Adoveo</h3>
          <p className="text-justify">
            Adoveo DevOps team aims to provide you with an overview of the key
            principles and processes we follow to promote collaboration, speed
            and continuous delivery of high-quality software products.
          </p>
          <p className="email">
            <a href="info@adoveo_devops.com">info@adoveo_devops.com</a>
          </p>
        </div>

        <div className="footer center">
          <p className="text-justify">copyright © 2023 Adoveo AB</p>
        </div>

        <div className="footerright">
          <h3>Keep in touch</h3>
          <a href="#">
            <img
              src="/images/facebook.png"
              alt=""
              facebookalt="true"
              width="50px"
              height="50px"
            ></img>
          </a>
          <a href="#">
            <img
              src="/images/instagram.png"
              alt=""
              facebookalt="true"
              width="50px"
              height="50px"
            ></img>
          </a>
          <a href="#">
            <img
              src="/images/twitter.png"
              alt=""
              facebookalt="true"
              width="50px"
              height="50px"
            ></img>
          </a>
        </div>
      </footer>
    </>
  );
}
