import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  TextField,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormControl,
  FormLabel,
  Slider,
  Select,
  MenuItem,
  InputLabel,
  Rating,
  Button,
  Box
} from '@mui/material';


const FormularioGuerrero = ({ onAgregarGuerrero }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    tipo: 'Orco',
    nivelCombate: 50,
    categoria: '',
    nivelAmenaza: 1
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSliderChange = (event, newValue) => {
    setFormData({ ...formData, nivelCombate: newValue });
  };

  const handleRatingChange = (event, newValue) => {
    if (newValue !== null && newValue >= 1) {
      setFormData({ ...formData, nivelAmenaza: newValue });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
   
    if (onAgregarGuerrero) {
      onAgregarGuerrero(formData);
    }
  };

  return (
    <Card sx={{ mb: 4, elevation: 3 }}>
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom align="center">
          Ingresar Guerrero
        </Typography>
        
        <form onSubmit={handleSubmit}>
          
          
          <Box mb={3} mt={2}>
            <TextField
              fullWidth
              label="Nombre del Guerrero"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </Box>

          
          <Box mb={3}>
            <FormControl component="fieldset" required>
              <FormLabel component="legend">Tipo de Guerrero</FormLabel>
              <RadioGroup
                row
                name="tipo"
                value={formData.tipo}
                onChange={handleChange}
              >
                <FormControlLabel value="Orco" control={<Radio />} label="Orco" />
                <FormControlLabel value="Uruk" control={<Radio />} label="Uruk" />
              </RadioGroup>
            </FormControl>
          </Box>

          
          <Box mb={4}>
            <Typography gutterBottom>
              Nivel de Combate *
            </Typography>
            <Slider
              value={formData.nivelCombate}
              onChange={handleSliderChange}
              valueLabelDisplay="auto"
              step={1}
              min={1}
              max={100}
            />
          </Box>

          
          <Box mb={3}>
            <FormControl fullWidth required>
              <InputLabel id="categoria-label">Categoría / Rango</InputLabel>
              <Select
                labelId="categoria-label"
                name="categoria"
                value={formData.categoria}
                label="Categoría / Rango"
                onChange={handleChange}
              >
                <MenuItem value="Capitán">Capitán</MenuItem>
                <MenuItem value="Berserker">Berserker</MenuItem>
                <MenuItem value="Explorador">Explorador</MenuItem>
                <MenuItem value="Asediador">Asediador</MenuItem>
              </Select>
            </FormControl>
          </Box>

          
          <Box mb={4}>
            <Typography component="legend">
              Nivel de Amenaza / Furia *
            </Typography>
            <Rating
              name="nivelAmenaza"
              value={formData.nivelAmenaza}
              onChange={handleRatingChange}
              min={1}
              size="large"
            />
          </Box>

          <Button 
            type="submit" 
            variant="contained" 
            color="error" 
            fullWidth 
            size="large"
          >
            Registrar Guerrero
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default FormularioGuerrero;