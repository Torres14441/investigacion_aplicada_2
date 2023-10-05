const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const ingenieria = [
  {
    "Codigo": "CAD501",
    "nombre": "Cálculo Diferencial",
    "UV":4,
    "Ciclo":1,
    "requisitos": ["Bachillerato"]
  },

  {
    "Codigo": "QUG501",
    "nombre": "Quimica General",
    "UV": 4,
    "Ciclo": 1,
    "requisitos": ["Bachillerato"]
  },

  {
    "Codigo": "ANF231",
    "nombre": "Antropología Filosófica",
    "UV": 3,
    "Ciclo": 1,
    "requisitos": ["Bachillerato"]
  },

  {
    "Codigo": "PRE104",
    "nombre": "Antropología Filosófica",
    "UV": 4,
    "Ciclo": 1,
    "requisitos": ["Bachillerato"]
  },

  {
    "Codigo": "ALG501",
    "nombre": "Álgebra Vectorial y Matrices",
    "UV": 4,
    "Ciclo": 2,
    "requisitos": ["Bachillerato"]
  },

  {
    "Codigo": "CAI501",
    "nombre": "Cálculo Integral",
    "UV": 4,
    "Ciclo": 2,
    "requisitos": ["Cálculo Diferencial"]
  },

  {
    "Codigo": "MDB104",
    "nombre": "Modelamiento y Diseño de base de datos",
    "UV": 4,
    "Ciclo": 2,
    "requisitos": ["Programación Estructurada"]
  },

  {
    "Codigo": "POO104",
    "nombre": "Programación Orientada a Objetos",
    "UV": 4,
    "Ciclo": 2,
    "requisitos": ["Programación Estructurada"]
  },

  {
    "Codigo": "CVV501",
    "nombre": "Cálculo de varias variables",
    "UV": 4,
    "Ciclo": 3,
    "requisitos": ["Cálculo integral"]
  },

  {
    "Codigo": "CDP501",
    "nombre": "Cinematica y Dinámica de Partículas",
    "UV": 4,
    "Ciclo": 3,
    "requisitos": ["Cálculo integral"]
  },
]

const tecnico = [
  {
    "Codigo": "ANF231",
    "nombre": "Antropología Filososfica",
    "UV": 3,
    "Ciclo": 1,
    "requisitos": ["Bachillerato"]
  },
  {
    "Codigo": "PAL404",
    "nombre": "Programación de Algoritmos",
    "UV": 4,
    "Ciclo": 1,
    "requisitos": ["Bachillerato"]
  },
  {
    "Codigo": "ALG501",
    "nombre": "Álgebra Vectorial y Matrices",
    "UV": 4,
    "Ciclo": 1,
    "requisitos": ["Bachillerato"]
  },
  {
    "Codigo": "LME404",
    "nombre": "Lenguaje de Marcado y Estilo Web",
    "UV": 4,
    "Ciclo": 1,
    "requisitos": ["Bachillerato"]
  },
  {
    "Codigo": "REC404",
    "nombre": "Redes de Comunicación",
    "UV": 4,
    "Ciclo": 1,
    "requisitos": ["Bachillerato"]
  },

  {
    "Codigo": "PSC231",
    "nombre": "Pensamiento Social Cristiano",
    "UV": 3,
    "Ciclo": 2,
    "requisitos": ["Bachillerato"]
  },
  {
    "Codigo": "POO404",
    "nombre": "Programación orientada a objetos",
    "UV": 4,
    "Ciclo": 2,
    "requisitos": ["Programación de algoritmos"]
  },
  {
    "Codigo": "DAW404",
    "nombre": "Desarrollo de aplicaciones web con Software interpretado en el cliente",
    "UV":4 ,
    "Ciclo": 2,
    "requisitos": ["Lenguaje de Marcado y estilo web"]
  },
  {
    "Codigo": "DSP404",
    "nombre": "Desarrollo de aplicaciones con software propietario",
    "UV": 4,
    "Ciclo": 2,
    "requisitos": ["Programación de algoritmos"]
  },
  {
    "Codigo": "ASB404",
    "nombre": "Analisis y diseño de sistemas y Base de datos",
    "UV": 4,
    "Ciclo":2,
    "requisitos": ["programación de algoritmos"]
  },

]


const ingenieriaInscripciones = [];
const tecnicoInscripciones = [];
    

// Ruta para obtener la información del pensum del técnico en ingeniería en computación
app.get('/pensum/tec-ingenieria-en-computo', (req, res) => {
  res.json(tecnico);
});

// Ruta para obtener la información del pensum de la ingeniería en computación
app.get('/pensum/ingenieria-en-computo', (req, res) => { 
  res.json(ingenieria);
});

//ruta para brindar requisitos de una materia en base a su codigo en pensum de ingeniería
app.get('/pensum/ingenieria-en-computo/materia/:codigo', (req, res) => {

  const codigoMateria = req.params.codigo;
  const materia = ingenieria.find(m => m.Codigo === codigoMateria);

  if (!materia) {
    return res.status(404).json({ error: 'Materia no encontrada' });
  }

  res.json(materia);

});
//ruta para consultar requisitos de materia en base a su codigo en pensum de tecnico
app.get('/pensum/tec-ingenieria-en-computo/materia/:codigo', (req, res) => {

  const codigoMateria = req.params.codigo;
  const materia = tecnico.find(m => m.Codigo === codigoMateria);

  if (!materia) {
    return res.status(404).json({ error: 'Materia no encontrada' });
  }

  res.json(materia);

});

//ruta para consultar materias por ciclo en pensum de ingeniería
app.get('/pensum/ingenieria-en-computo/:ciclo', (req, res) => { 
  
  const ciclomateria = parseInt(req.params.ciclo);
  const materia = ingenieria.filter(m => m.Ciclo === ciclomateria);

  if (materia.length === 0) {
    return res.status(404).json({ error: 'No se encontraron materias' });
  }

  res.json(materia);

});

//ruta para consultar materias por ciclo en pensum de tecnico

app.get('/pensum/tec-ingenieria-en-computo/:ciclo', (req, res) => { 
  
  const ciclomateria = parseInt(req.params.ciclo);
  const materia = tecnico.filter(m => m.Ciclo === ciclomateria);

  if (materia.length === 0) {
    return res.status(404).json({ error: 'No se encontraron materias' });
  }

  res.json(materia);

});

//ruta para realizar inscripciones
app.post('/pensum/inscripcion', (req, res) => {

  const { TipoCarrera, Nombre, Carnet, UVDisponibles, MateriasAInscribir } = req.body;

  // Definir un objeto para almacenar la inscripción
  const inscripcion = {
    TipoCarrera,
    Nombre,
    Carnet,
    UVDisponibles,
    MateriasAInscribir
  };

  // Verificar si el TipoCarrera es válido ("ingenieria" o "tecnico")
  if (TipoCarrera === "ingenieria" || TipoCarrera === "tecnico") {
    // Obtener el arreglo correspondiente según el TipoCarrera
    const carrera = TipoCarrera === "ingenieria" ? ingenieria : tecnico;

    // Verificar si todas las materias a inscribir existen en el arreglo de la carrera y sumar los UV
    let uvRequeridos = 0;
    let materiasValidas = true;

    MateriasAInscribir.forEach(codigoMateria => {
      const materia = carrera.find(curso => curso.Codigo === codigoMateria);

      if (materia) {
        uvRequeridos += materia.UV;
      } else {
        materiasValidas = false;
      }
    });

    // Verificar si hay suficientes UV disponibles para inscribirse
    if (materiasValidas && uvRequeridos <= UVDisponibles) {
      // Agregar la inscripción al arreglo adecuado
      if (TipoCarrera === "ingenieria") {
        ingenieriaInscripciones.push(inscripcion);
      } else {
        tecnicoInscripciones.push(inscripcion);
      }

      res.json({ message: 'Inscripción exitosa' });
    } else {
      res.status(400).json({ message: 'No hay suficientes UV disponibles o al menos una materia no existe en la carrera.' });
    }
  } else {
    res.status(400).json({ message: 'Tipo de carrera no válido.' });
  }
});

//rutas para verificar inscripciones:
app.get('/pensum/inscripcionesing', (req, res) => {
  res.json(ingenieriaInscripciones);
});

app.get('/pensum/inscripcionestec', (req, res) => {
  res.json(tecnicoInscripciones);
});

//---------------------------------------------------------
//ruta para eliminar un registro de inscripción en ingeniería
  app.delete('/pensum/inscripciones/delete/:Carnet', (req, res) => {
      const { Carnet } = req.params;
    
      // Función para buscar una inscripción en un arreglo
      const buscarInscripcion = (arreglo) => {
        return arreglo.findIndex(inscripcion => inscripcion.Carnet === Carnet);
      }
    
      // Buscar y eliminar la inscripción en ambos arreglos
      const indexIngenieria = buscarInscripcion(ingenieriaInscripciones);
      const indexTecnico = buscarInscripcion(tecnicoInscripciones);
    
      if (indexIngenieria !== -1 || indexTecnico !== -1) {
        if (indexIngenieria !== -1) {
          ingenieriaInscripciones.splice(indexIngenieria, 1);
        }
    
        if (indexTecnico !== -1) {
          tecnicoInscripciones.splice(indexTecnico, 1);
        }
    
        res.json({ message: 'Inscripción eliminada con éxito' });
      } else {
        res.status(404).json({ message: 'No se encontró el alumno.' });
      }
});


// Escuchar solicitudes en el puerto 80
app.listen(80, () => {
  console.log('Servidor iniciado en el puerto 80');
});
