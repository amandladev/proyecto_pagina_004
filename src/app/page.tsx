import AboutSection from "@/components/ui/about/About";
import ImageCarousel from "@/components/ui/carousel/ImageCarousel";
import ContactSection from "@/components/ui/contact/Contact";
import Navbar from "@/components/ui/navbar/Navbar";
import ServicesSection from "@/components/ui/services/Services";
import Image from "next/image";

export default function Home() {
  const carouselItems = [
    {
      image: "/test_img_.jpg",
      subtitle: "Detergentes para",
      title: "Titulo de tipo de producto",
    },
    {
      image: "/test_img2.jpg", // Replace with your actual images
      subtitle: "Limpiadores para",
      title: "Superficies brillantes",
    },
    {
      image: "/test_img3.jpg",
      subtitle: "Soluciones para",
      title: "Limpieza industrial",
    },
    {
      image: "/test_img4.jpg",
      subtitle: "Productos para",
      title: "Cuidado del hogar",
    },
  ]
  return (
    <main className=" ">
        <Navbar />
        <ImageCarousel items={carouselItems} />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </main>
  );
}
