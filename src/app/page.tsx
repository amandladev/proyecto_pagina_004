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
        <meta property="og:title" content="Productos de Limpieza Industrial | Azochem" />
        <meta property="og:description" content="Soluciones ecológicas y efectivas para la limpieza industrial." />
        <meta property="og:image" content="https://www.azochem.com/images/logo_azochem.png" />
        <meta property="og:url" content="https://www.azochem.com/" />
        <meta name="twitter:card" content="summary_large_image" />
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
