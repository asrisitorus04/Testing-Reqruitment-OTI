import Navbar from "./components/Navbar";
import Head from "next/head";

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Navbar />
      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">About</h1>
            <p className="description">
              Saatnya Anda membuat portofolio yang unik dan kreatif sesuai
              selera pribadi! Buat calon klien dan pemberi kerja terkesan sejak
              awal dengan desain portofolio luar biasa menggunakan pembuat
              portofolio online gratis Canva yang terlihat profesional. Fitur
              dan alat desain kami ramah digunakan untuk seluruh kalangan,
              bahkan jika Anda adalah seorang pemula
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
