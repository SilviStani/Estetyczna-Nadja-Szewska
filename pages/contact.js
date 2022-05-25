import React from 'react'
import styles from '../styles/Contact.module.css'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';
import Image from 'next/image';


function validate(datos){
  let errors = {};

  if (!datos.user_subject){
      errors.user_subject ="Ingresa el Asunto"
  } else if( !datos.user_email){
      errors.user_email = "Ingresa el Mail"
  }
  return errors;
}

const Contact = () => {

const formRef = useRef();
const [done, setDone] = useState(false)
const [ errors, setErrors ] = useState({});
const [empty, setEmpty] = useState({
name: undefined,
phone: undefined,
mail: undefined,
subject: undefined,
message: undefined
})


let handleChange = (e) => {
  setEmpty({
      ...empty,
      [e.target.name] : e.target.value
  })
  setErrors(validate({
      ...empty,
      [e.target.name] : e.target.value
  }))
}


const handleSubmit = (e) => {
  e.preventDefault();
  setErrors(validate(empty))
  if (empty.user_email && empty.user_subject){ 
  emailjs.sendForm('service_wozi7bv',
   'template_w7zs0li',
    formRef.current,
      'user_No7Wk2Xmmcxmswl29wqsY')
      .then((result) => {
        console.log(result.text);
        setDone(true)
        setEmpty({
          name: '',
          phone: '',
          mail: '',
          subject:'',
          message: ''
        })
    }, (error) => {
        console.log(error.text);
        
    });
  } else {
    swal({
      title: "Faltan campos por completar",
    })
  }
};

  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Enviame un Mensaje</h1>
        { !done &&
        <form className={styles.form} ref={formRef} onSubmit={handleSubmit} onChange={(e) => handleChange(e)}>
            <input className={styles.inputS} placeholder="Nombre" name="user_name" onChange={(e) => handleChange(e)} />
            <input className={styles.inputS} placeholder="N° Teléfono" name='user_phone' onChange={(e) => handleChange(e)}/>
            <input className={styles.inputS} placeholder="Email" name='user_email' onChange={(e) => handleChange(e)}/>
            {errors.user_mail && (errors.user_email)}
            <input className={styles.inputL} placeholder="Asunto" name='user_subject' onChange={(e) => handleChange(e)}/>
            {errors.user_subject && (errors.user_subject)}
            <textarea className={styles.textArea} placeholder="Mensaje" rows={6} name='message' onChange={(e) => handleChange(e)} />
            <button className={styles.button}>Enviar</button>
        </form>
        }
         { done &&
            <div className="overflow">
              <span className={styles.span}>Te respondo a la Brevedad!! <Image src="/img/thanks.png" alt="" height={200} width={200} /></span>
            </div>
            }
    </div>
  )
}
 
export default Contact