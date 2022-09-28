import Navbar from "./components/Navbar";
import Head from "next/head";

function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <Navbar />
      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">Portfolio</h1>
            <p className="description">
              Saatnya Anda membuat portofolio yang unik dan kreatif sesuai
              selera pribadi! Buat calon klien dan pemberi kerja terkesan.
            </p>

            <div className="portfolio-wrapper">
              <div className="portfolio-item">
                <img
                  src="https://cdn.dribbble.com/users/336943/screenshots/3701407/igor-bumba-personal-website-by-mario_sestak.jpg?compress=1&resize=768x576&vertical=top"
                  className="portfolio-image"
                />

                <h3 className="portfolio-name">Documentation Proyek</h3>
                <div className="portfolio-category">Front-End</div>
              </div>
              <div className="portfolio-item">
                <img
                  src="https://cdn.dribbble.com/users/146719/screenshots/6247601/ui_guide_light_4x.png?compress=1&resize=768x576&vertical=top"
                  className="portfolio-image"
                />

                <h3 className="portfolio-name">Documentation Sertifikat</h3>
                <div className="portfolio-category">Computer Engineering</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
