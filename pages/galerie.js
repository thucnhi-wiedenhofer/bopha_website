import React from "react";
import Link from "next/link";
import GaleryCard from "@/components/GaleryCard";
import { PrismaClient } from "@prisma/client";

export default function Galerie({ collections }) {
  return (
    <>
      <section id="galerie" className="mt-5">
        <div className="container">
          <div className="d-flex justify-content-between">
            <h2>Galerie</h2>
          </div>
          <div className="services mt-5">
            {collections.map((collection, index) => (
              <GaleryCard key={index} collection={collection} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export const getStaticProps = async () => {
  const prisma = new PrismaClient();
  const collections = await prisma.galery.findMany();
  return {
    props: {
      collections,
    },
  };
};
