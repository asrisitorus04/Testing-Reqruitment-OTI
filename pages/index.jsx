import Link from "next/link";
import Navbar from "./components/Navbar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Navbar />
      <section className="hero">
        <div className="container">
          <div className="text-wrapper">
            <h1 className="title">Hallow, Saya Asri Apriliana Sitorus</h1>
            <p className="description">
              saya lulusan Teknik Komputer IPB University
            </p>
            <Link href="/contact">
              <a className="cta">Kontak Saya</a>
            </Link>
          </div>

          <div className="image-wrap">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFec3Et0j8q5t1II7ZzJPfNRXCXLkEo6JENQ&usqp=CAU" />
          </div>
        </div>
      </section>
    </>
  );
}
