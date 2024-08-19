// src/components/Contact.js
import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <section className="contact-section">
            <div className="container">
                <h1>Contato</h1>
                <p>Estamos ansiosos para ouvir você! Entre em contato conosco através dos detalhes abaixo ou envie-nos uma mensagem diretamente pelo formulário.</p>
                
                <div className="contact-info">
                    <p><strong>Endereço:</strong> 738 Av. Beira Mar, Fortaleza, CE</p>
                    <p><strong>Telefone:</strong> (85) 1234-5678</p>
                    <p><strong>Email:</strong> contato@cafedoamanha.com</p>
                </div>
                
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Nome:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Mensagem:</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>
                    <button type="submit">Enviar Mensagem</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
