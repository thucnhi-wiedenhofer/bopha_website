import Link from "next/link";
import Image from "next/image";
import bouquet from "./../public/images/services/wedding_flowers_desktop.jpg";

export default function Card() {
  return (
    <div className="services-card mb-5" data-aos="flip-right">
    <Link href="/services#decoration">
      <Image
        className="desktop-img w-100"
        src={bouquet}
        alt="bouquet de mariée"
      />
      
      <div className="overlay"></div>
      <h4 className="card-title">Compostion florale</h4>
    </Link>
  </div>
  )
}
