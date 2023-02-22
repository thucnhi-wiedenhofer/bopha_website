import React from 'react'
import Link from "next/link";
import Image from "next/image";
import bouquetDesktop from "./../public/images/wedding_flowers.jpg";

export default function GaleryCard() {
  return (
    <div className="services-card mb-5" data-aos="fade-up">
        <Image
            className="card-img"
            src={bouquetDesktop}
            alt="bouquet de mariée"
        />
        <div className="overlay">
            <h4 className="card-title">Bouquet de la mariée</h4>            
        </div>
    </div>
  )
}
