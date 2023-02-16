import Link from "next/link";
import Image from "next/image";
import bouquetMobile from "./../public/images/services/wedding_flowers_mobile.jpg";
import bouquetDesktop from "./../public/images/services/wedding_flowers_desktop.jpg";
import bouquetTablet from "./../public/images/services/wedding_flowers_tablet.jpg";

export default function Card() {
  return (
    <div className="services-card mb-5" data-aos="flip-right">
    <Link href="/services#decoration">
      <Image
        className="desktop-img w-100"
        src={bouquetDesktop}
        alt="bouquet de mariée"
      />
      <Image
        className="tablet-img w-100"
        src={bouquetTablet}
        alt="bouquet de mariée"
      />
      <Image
        className="mobile-img w-100"
        src={bouquetMobile}
        alt="bouquet de mariée"
      />
      <div className="overlay"></div>
      <h4 className="card-title">Compostion florale</h4>
    </Link>
  </div>
  )
}
