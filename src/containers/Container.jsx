import React, { useState } from 'react'
import JuegosForm from '../components/Form'
import JuegosView from '../components/View';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
function JuegosContainer() {

    //la variable de la izquierda solamente puede ser accedida en modo lectura
    // la variable de la derecha me permite hacer cambios
    const [juegos, setJuegos] = useState([]); //nunca usar un valor aqui undefined
    const [alertaVisible, setAlertaVisible] = useState(false);
    //TODO: Como no hemos visto manejo de estado global, por ahora vamos a generar una lista de juegos aqui

    const handleCreate = (juego)=>{
      //graba el juego al final de lista
      // [zelda, tok, gta6, halllife]
      //destructuracion de un arreglo
        setJuegos([...juegos,juego]);
        setAlertaVisible(true);
    };

    const handleDelete = (juego)=>{
       // Aqui tengo que eliminar de la lista
      const filtrada =  juegos.filter((j)=>{ return j?.nombre != juego?.nombre});
      setJuegos(filtrada);
    };

  return (
    <>
    <div className='container mt-3'>
      <div className="row">
        <div className="col-4">
            <JuegosForm onCreateJuego={handleCreate} />
        </div>
        <div className="col-8">
            <JuegosView juegos={juegos} onQuitar={handleDelete}></JuegosView>
        </div>
      </div>
    </div>
    <Snackbar open={alertaVisible} anchorOrigin={{vertical:"bottom", horizontal:"center"}} autoHideDuration={1000}>
        <Alert
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Juego registrado
        </Alert>
      </Snackbar>
    </>

  )
}

export default JuegosContainer
