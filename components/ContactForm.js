/* eslint-disable react/no-unescaped-entities */
import React,{useRef} from 'react'
import Link from 'next/link'

export default function ContactForm() {

    const nameRef = useRef()
    const emailRef = useRef()
    const phoneRef = useRef()
    const selectRef = useRef()
    const messageRef = useRef()
    

  const handleSubmit= (e) => {e.preventDefault();
        const data = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            phone: phoneRef.current.value,
            select: selectRef.current.value,
            message: messageRef.current.value            
        }
    }

  return (
    <form onsSubmit={handleSubmit}>
              <fieldset>
                <legend>N'hésitez pas à me laisser un message</legend>
                <div className="form-group">
                  <label htmlFor="name" className="form-label mt-4">Nom</label>
                  <input ref={nameRef} type="text" className="form-control" id="name" required="required"/>
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label mt-4">Email</label>
                  <input ref={emailRef} type="email" className="form-control" id="email" size="30" required="required"/>            
                </div>
              
                <div className="form-group">
                  <label htmlFor="phone" className="form-label mt-4">Numéro de téléphone</label>
                  <input ref={phoneRef} type="tel" className="form-control" id="phone" required="required"/>
                </div>
                
                <div className="form-group">
                  <label htmlFor="select" className="form-label mt-4">Objet</label>
                  <select ref={selectRef} className="form-select" id="select" required="required">
                    <option>Demande d'informations</option>
                    <option>Demande de devis</option>              
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label mt-4">Votre message</label>
                  <textarea ref={messageRef}  className="form-control" id="message" rows="3" required="required"></textarea>
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
  )
}
