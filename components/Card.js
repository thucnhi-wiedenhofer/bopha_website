import Link from "next/link";
import Image from "next/image";

import bouquetDesktop from "./../public/images/services/wedding_flowers_desktop.jpg";

export default function Card() {
  return (
    <div className="services-card mb-5" data-aos="flip-right">
      <Link href="/services#decoration">        
          <Image
            className="card-img"
            src={bouquetDesktop}
            alt="bouquet de mariée"
          />
        <div className="overlay"></div>
        <h4 className="card-title">Compostion florale</h4>
      </Link>
    </div>
  );
}
