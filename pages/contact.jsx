import Navbar from "./components/Navbar";
import Head from "next/head";

function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <Navbar />
      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">Contact</h1>
            <p className="description">
              Saatnya Anda membuat portofolio yang unik dan kreatif sesuai
              selera pribadi!
            </p>
            <ul className="contact-links">
              <li className="contact-item">Email: asrisitorus04@gmail.com</li>
              <li className="contact-item">Phone: 081376846978</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
