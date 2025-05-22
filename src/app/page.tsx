import ConsumerProductsSection from "@/components/consumerProducts/consumer-products";
import ElegantFooter from "@/components/footer/Footer";
import AboutSection from "@/components/ui/about/About";
import ExpertAdviceSection from "@/components/ui/advice/Advice";
import ClientsSection from "@/components/ui/clients/Clients";
import ContactSection from "@/components/ui/contact/Contact";
import Navbar from "@/components/ui/navbar/Navbar";
import ServicesSection from "@/components/ui/services/Services";
import Head from "next/head";

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Azochem</title>
        <meta name="description" content="Soluciones de limpieza industrial." />
        <meta property="og:title" content="Azochem" />
        <meta property="og:description" content="Soluciones de limpieza industrial." />
      </Head>
      <main className=" ">
          <Navbar />
          <ClientsSection />
          <AboutSection />
          <ServicesSection />
          <ExpertAdviceSection />
          <ConsumerProductsSection />
          <ContactSection />
          <ElegantFooter />
      </main>
    </>
  );
}
