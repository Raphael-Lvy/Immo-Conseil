import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import './ContactForm.css';

const ContactForm = () => {
    return (
        <div className='formContainer'>
        <h1 className='blue'>Discutons de votre projet <i class="fas fa-coffee contactIcone"></i></h1>
        <h6>Remplissez les informations ci-dessous et nous vous recontacterons par email ou par téléphone </h6>
            <Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridPrénom">
      <Form.Label>Prénom</Form.Label>
      <Form.Control type="text" placeholder="Votre prénom" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridNom">
      <Form.Label>Nom</Form.Label>
      <Form.Control type="text" placeholder="Votre Nom" />
    </Form.Group>
  </Form.Row>
  <Form.Row>
  <Form.Group  as={Col} controlId="formGridEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type='email' placeholder="@" />
  </Form.Group>

  <Form.Group as={Col} controlId="formGridtel">
    <Form.Label>N° de téléphone</Form.Label>
    <Form.Control placeholder="(Falcultatif)" />
  </Form.Group>
  </Form.Row>

  <Form.Group controlId="formMessage">
    <Form.Label>Votre message</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>

  
  <button className='serviceButton blueBG' type='submit'>Envoyer</button>
  
</Form>
        </div>
    );
};

export default ContactForm;