import React from 'react';
import Link from "next/link";
import Image from "next/image";
import arrow from "./../public/images/icons/arrow-icon.svg";
import Card from "@/components/Card";

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
        <Card/><Card/><Card/>
        </div>
      </div>
    </section>

    </>
  );
}
