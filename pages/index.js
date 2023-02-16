/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import bopha from "./../public/images/aPropos/bopha.jpg";
import arrow from "./../public/images/icons/arrow-icon.svg";
import Card from "@/components/Card";


export default function Home() {
  return <><section id="aPropos" className="mt-3">
  <div className="container" data-aos="fade-up">
    <div className="welcome-text">
      <h1 data-aos="zoom-in">Bienvenu</h1>
      <h2>Bienvenu chez Bopha, Désigner Floral</h2>

      <figure className="text-center mb-5">
        <blockquote className="blockquote">
          <p>
            “Passionnée par les fleurs et riche d'une expérience depuis plus
            de trente ans dans l'Art Floral, j'aime créer des compositions
            uniques et sur mesure pour chaque client. Que ce soit pour un
            mariage, un baptême, une soirée de gala ou tout autre événement,
            je met ma créativité et mon savoir-faire à votre disposition
            pour rendre votre jour spécial encore plus beau.”
          </p>
        </blockquote>
        <figcaption className="blockquote-footer">Bopha</figcaption>
      </figure>
    </div>
    <div className="welcom-img">
      <Image
        src={bopha}
        alt="Bopha, designer floral"
        className="img-fluid"
      />
    </div>
  </div>
</section>

<section id="services" className="mt-5">
      <div className="container">
        <div className="d-flex justify-content-between">
          <h2 data-aos="fade-left">Services</h2>
          <Link target="_blank" href="/services">
            <button
              type="button"
              className="button btn btn-dark"
              data-aos="fade-right"
            >
              Voir tout
              <Image src={arrow} alt="flèche" className="arrow" />
            </button>
          </Link>
        </div>
        <div className="services mt-5">
        <Card/>
        </div>
      </div>
    </section>
    </>;
}
