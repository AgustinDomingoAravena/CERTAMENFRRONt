import { Card, CardContent, CardHeader, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Alert, Button } from '@mui/material'
import React from 'react'

function JuegosView({juegos=[], onQuitar = null}) {

    if(!juegos?.length){
        return  <Alert severity="info">Debes ingresar al menos un juego.</Alert>
    }

const handleQuitar = (juego)=>{
    //TODO: Agregar un dialog para confirmar?
    onQuitar(juego);
}

  return (
    <Card>
        <CardHeader title="Lista de juegos"></CardHeader>
        <CardContent>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Descripcion</TableCell>
                            <TableCell>Plataforma</TableCell>
                            <TableCell>Compañia</TableCell>
                            <TableCell>Tiene fisico?</TableCell>
                            <TableCell>Año de lanzamiento</TableCell>
                            <TableCell>Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {juegos.map((j)=>
                            <TableRow key={j.nombre}>
                                <TableCell>{j.nombre}</TableCell>
                                <TableCell>{j.descripcion}</TableCell>
                                <TableCell>{j.plataforma}</TableCell>
                                <TableCell>{j.compania}</TableCell>
                                <TableCell>{j.tieneFisico? "Sí": "No"}</TableCell>
                                <TableCell>{j.anio.year()}</TableCell>
                                <TableCell>
                                    <Button variant='outlined' color="error" onClick={()=>handleQuitar(j)} >Quitar Stock</Button>
                                </TableCell>
                        </TableRow>
                        
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </CardContent>
    </Card>
  )
}

export default JuegosView
