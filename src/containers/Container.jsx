import React, { useState } from 'react'
import FormularioGuerrero from '../components/Form'
import TablaTropas from '../components/View';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button
} from '@mui/material';


function App() {
  
  const [guerreros, setGuerreros] = useState([]);
  
  
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');

  
  const handleAgregarGuerrero = (nuevoGuerrero) => {
    
    if (!nuevoGuerrero.nombre.trim() || !nuevoGuerrero.categoria || !nuevoGuerrero.tipo) {
      setDialogMessage('Todos los campos son obligatorios. Por favor, completa la información faltante.');
      setOpenDialog(true);
      return;
    }

    
    if (!nuevoGuerrero.nivelAmenaza || nuevoGuerrero.nivelAmenaza < 1) {
      setDialogMessage('El Nivel de Amenaza / Furia es obligatorio y debe tener al menos una estrella.');
      setOpenDialog(true);
      return;
    }

    
    setGuerreros([...guerreros, nuevoGuerrero]);
  };

  
  const handleEliminarGuerrero = (index) => {
    const nuevosGuerreros = guerreros.filter((_, i) => i !== index);
    setGuerreros(nuevosGuerreros);
  };

  
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: '#f9f9f9', minHeight: '100vh', pb: 6 }}>
      


      
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            
           
            <FormularioGuerrero onAgregarGuerrero={handleAgregarGuerrero} />

            
            <TablaTropas guerreros={guerreros} onEliminarGuerrero={handleEliminarGuerrero} />

          </div>
        </div>
      </Container>

      
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle sx={{ color: '#d32f2f', fontWeight: 'bold' }}>
          Advertencia de Validación
        </DialogTitle>
        <DialogContent>
          <Typography sx={{ mt: 1 }}>{dialogMessage}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} variant="contained" color="error">
            Entendido
          </Button>
        </DialogActions>
      </Dialog>

    </Box>
  );
}

export default App;