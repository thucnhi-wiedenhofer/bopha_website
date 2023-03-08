import React, { useEffect } from "react";
import Link from "next/link";
import GaleryCard from "@/components/GaleryCard";
import { PrismaClient } from "@prisma/client";
import Image from "next/image";

export default function Galerie({ collections }) {
  useEffect(() => {
    // Perform localStorage action
    let modalItem = localStorage.getItem("collection");
    if (modalItem.id === undefined) {
      modalItem = collections[0];
      console.log(modalItem);
    }
  }, []);

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
            {/* Modal */}
            <div
              className="modal fade"
              id="modal"
              tabIndex="-1"
              aria-labelledby="modalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-fullscreen-lg-down">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title fs-5" id="modalLabel">
                      {modalItem.titre}
                    </h4>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <Image
                      className="card-img"
                      src={`/images/galery/${modalItem.image}`}
                      alt={modalItem.description}
                      width={modalItem.width}
                      height={modalItem.height}
                    />
                  </div>
                </div>
              </div>
            </div>
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
