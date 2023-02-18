import React from 'react';
import Link from "next/link";
import Image from "next/image";
import arrow from "./../public/images/icons/arrow-icon.svg";
import Card from "@/components/Card";
import bouquetDesktop from "./../public/images/wedding_flowers.jpg";

export default function galerie() {
  return (
    <>    
    <section id="galerie" className="mt-5">
      <div className="container">
        <div className="d-flex justify-content-between">
          <h2>Galerie</h2>
          <button type="button" className="button btn btn-dark" data-aos="flip-right">
            Voir tout
            <Image
              src={arrow}
              alt="arrow"
              className="arrow"
            />
          </button>
        </div>
        <div className="services mt-5">
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
        </div>
      </div>
    </section>

    </>
  );
}
