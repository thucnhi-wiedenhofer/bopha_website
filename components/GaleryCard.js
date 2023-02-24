import React from "react";
import Image from "next/image";

export default function GaleryCard({ collection }) {
  return (
    <div className="services-card mb-5" data-aos="fade-up">
      <Image
        className="card-img"
        src={`/images/galery/${collection.image}`}
        alt={collection.description}
        width={collection.width}
        height={collection.height}
      />
      <div className="overlay">
        <h4 className="card-title">{collection.titre}</h4>
      </div>
    </div>
  );
}
