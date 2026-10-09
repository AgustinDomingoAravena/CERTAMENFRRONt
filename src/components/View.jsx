import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Button,
  Typography,
  Box
} from '@mui/material';

const TablaTropas = ({ guerreros, onEliminarGuerrero }) => {
  return (
    <Box sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h5" gutterBottom align="center">
         Despliegue del Ejército (Tabla de Tropas)
      </Typography>
      
      <TableContainer component={Paper} elevation={3}>
        <Table sx={{ minWidth: 650 }} aria-label="tabla de tropas del ejercito">
          <TableHead sx={{ backgroundColor: '#212121' }}>
            <TableRow>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Nombre del Guerrero</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Tipo de Guerrero</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Categoría / Rango</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }} align="right">Nivel</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }} align="center">Clasificación</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }} align="center">Acción</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {guerreros.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} align="center">
                  No hay tropas registradas en el ejército actualmente.
                </TableCell>
              </TableRow>
            ) : (
              guerreros.map((guerrero, index) => (
                <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  
                  <TableCell component="th" scope="row">
                    {guerrero.nombre}
                  </TableCell>
                  
                  
                  <TableCell>{guerrero.tipo}</TableCell>
                  
                  
                  <TableCell>{guerrero.categoria}</TableCell>
                  
                  
                  <TableCell align="right">{guerrero.nivelCombate}</TableCell>
                  
                  
                  <TableCell align="center">
                    <Chip 
                      label={guerrero.tipo} 
                      color={guerrero.tipo === 'Orco' ? 'error' : 'warning'} 
                      variant="filled" 
                    />
                  </TableCell>
                  
                  
                  <TableCell align="center">
                    <Button 
                      variant="contained" 
                      color="error" 
                      size="small"
                      onClick={() => onEliminarGuerrero(index)}
                    >
                      Asesinado por la aparición
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TablaTropas;