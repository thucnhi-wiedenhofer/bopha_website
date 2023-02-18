/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import phone from "./../public/images/icons/phone-solid.svg";
import email from "./../public/images/icons/email.svg";
import contact from "./../public/images/contact/contact.jpg";
import ikebena from "./../public/images/contact/ikebena_contact.jpg";
import naturelle from "./../public/images/contact/natur_elle.jpg";
import facebook from "./../public/images/icons/facebook.svg";
import linkedin from "./../public/images/icons/linkedin.svg";
import instagram from "./../public/images/icons/instagram.svg";


export default function Contact() {
  return (
    <>
      <section id="contact">
        <div className="container" data-aos="fade-right">
        <div className="frame">
          <div className="services-img">
            <Image
              src={contact}
              alt="background foral"
              className="img-fluid"
            />
          </div>
          <div className="overlay"></div>
        </div>
          
          <div className="services-text">
            <h1 data-aos="zoom-in">Contact</h1>
            <h2>Contactez-nous</h2>
            <p className="mt-4">
              Vous préparez un évènement? <br/> Je suis à votre disposition pour toutes demandes de devis ou de
              renseignements complémentaires sur mes services. <br/>
              Je serai ravie de vous aider à rendre votre évènement unique et mémorable!          
            </p>
          </div>
        </div>
      </section>
      <section id="contactForm" className="mt-5 pb-2" data-aos="fade-down">
        <div className="container mt-5" data-aos="fade-down">
          <div className="contact-form">
            <form>
              <fieldset>
                <legend>N'hésitez pas à me laisser un message</legend>
                <div className="form-group">
                  <label htmlFor="name" className="form-label mt-4">Nom</label>
                  <input type="text" className="form-control" id="name" required/>
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label mt-4">Email</label>
                  <input type="email" className="form-control" id="email" pattern=".+@globex\.com" size="30" required/>            
                </div>
              
                <div className="form-group">
                  <label htmlFor="phone" className="form-label mt-4">Numéro de téléphone</label>
                  <input type="tel" className="form-control" id="phone" required/>
                </div>
                
                <div className="form-group">
                  <label htmlFor="select" className="form-label mt-4">Objet</label>
                  <select className="form-select" id="select" required>
                    <option>Demande d'informations</option>
                    <option>Demande de devis</option>              
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label mt-4">Votre message</label>
                  <textarea className="form-control" id="message" rows="3"></textarea>
                </div>
                
                <fieldset className="form-group mt-5">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="rgpdCheckbox"/>
                    <label className="form-check-label" htmlFor="rgpdCheckbox">
                      J'autorise ce site à conserver mes données personnelles transmises via ce formulaire. <br/>
                      Aucune exploitation commerciale ne sera faite des données conservées. <br/>
                      <Link href="">Voir Notre politique de gestion de données</Link>
                    </label>
                  </div>           
                </fieldset>                
                <button type="submit" className="button btn btn-dark mt-5">Envoyer</button>
              </fieldset>
            </form>
          </div>
          <div className="contact-img">            
            <Image
              src={ikebena}
              alt="ikebena"
              className="img-fluid"
            />
          </div>  
        </div>
      </section>
      <section id="contactDetails" className="mt-5 mb-5">
        <div className="container mt-5" >          
          <div className="contact-details" data-aos="zoom-out">
            <h3 className="mt-5">Contact</h3>
            <ul className="contact-list">
              <li>
                <span className="icon">
                  <Image src={phone} alt="téléphone" width="32" height="32"/>
                </span> + 33 (0)6 56 78 75 36
              </li>
              <li>
                <Link target="_blank" href="mailto:serre.bopha@gmail.com">
                <span className="icon">
                  <Image src={email} alt="email" width="32" height="32"/>
                </span> serre.bopha@gmail.com
              </Link>
              </li>
            </ul>        
          </div>
          <div className="details-img">
            <Image
              src={naturelle}
              alt="jardin"
              className="img-fluid"
            />
          </div>
          <div className="social-network" data-aos="zoom-out">
            <h3 className="mt-5">Suivez-moi</h3>
            <ul className="contact-list">
              <li>
                <Link target="_blank" href="https://www.facebook.com/serre.bopha">
                <span className="icon">
                  <Image src={facebook} alt="facebook logo" width="32" height="32"/>
                </span>
              </Link>
              </li>
              <li>
                <Link target="_blank" href="https://www.instagram.com/bopha_serre/">
                <span className="icon">
                  <Image src={instagram} alt="instagram logo" width="32" height="32"/>
                </span>
                </Link>
              </li>
              <li>
                <Link target="_blank" href="https://www.linkedin.com/in/bopha-serre-3751351b/?originalSubdomain=fr">
                <span className="icon">
                  <Image src={linkedin} alt="linkedin logo" width="32" height="32"/>
                </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
