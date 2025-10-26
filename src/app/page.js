"use client";


import Header from './_components/Header';
import Hero from './_components/Hero';
import Service from './_components/Service';
import Contact from './_components/Contact';
import Apropos from './_components/Apropos';
import Footer from './_components/Footer';






import Head from "next/head";

export default function Home() {
  return (
    <div>
    <Head>
      <title>Thé Crayon -N°1 des produits minceurs de Côte D’Ivoire.</title>
      <meta
        name="description"
        content="Recherchez et trouvez des thé minceur bio et efficace en côte d'ivoire ."
      />
      <meta name="keywords" content="Thé Crayon -N°1 des produits minceurs de Côte D’Ivoire." />
      <meta name="author" content="Thé Crayon" />
    </Head>
      <Header />
      <Hero/>
      <Apropos/>
      <Service/>
      <Contact/>
      <Footer/>

    </div>
  );
}