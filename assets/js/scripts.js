var radiologia = [
  {
    hora: '11:00',
    especialista: 'Ignacio Schulz',
    paciente: 'Francisca Rojas',
    rut: '9878782-2',
    prevision: 'Fonasa',
  },
  {
    hora: '11:30',
    especialista: 'Federico Subercaseaux',
    paciente: 'Pamela Estrada',
    rut: '15345241-3',
    prevision: 'Isapre',
  },
  {
    hora: '15:00',
    especialista: 'Fernando Wurthz',
    paciente: 'Armando Luna',
    rut: '16445345-9',
    prevision: 'Isapre',
  },
  {
    hora: '15:30',
    especialista: 'Ana Maria Godoy',
    paciente: 'Manuel Godoy',
    rut: '17666419-0',
    prevision: 'Fonasa',
  },
  {
    hora: '16:00',
    especialista: 'Patricia Suazo',
    paciente: 'Ramon Ulloa',
    rut: '14989389-K',
    prevision: 'Fonasa',
  },
];

var traumatologia = [
  {
    hora: '8:00',
    especialista: 'Maria Paz Altuzarra',
    paciente: 'Paula Sanchez',
    rut: '15554774-5',
    prevision: 'Fonasa',
  },
  {
    hora: '10:00',
    especialista: 'Raul Araya',
    paciente: 'Angelica Navas',
    rut: '15444147-9',
    prevision: 'Isapre',
  },
  {
    hora: '10:30',
    especialista: 'Maria Arriagada',
    paciente: 'Ana Klapp',
    rut: '17879423-9',
    prevision: 'Isapre',
  },
  {
    hora: '11:00',
    especialista: 'Alejandro Badilla',
    paciente: 'Felipe Mardones',
    rut: '1547423-6',
    prevision: 'Isapre',
  },
  {
    hora: '11:30',
    especialista: 'Cecilia Budnik',
    paciente: 'Diego Marre',
    rut: '16554741-K',
    prevision: 'Fonasa',
  },
  {
    hora: '12:00',
    especialista: 'Arturo Cavagnaro',
    paciente: 'Cecilia Mendez',
    rut: '9747535-8',
    prevision: 'Isapre',
  },
  {
    hora: '12:30',
    especialista: 'Andres Kanacri',
    paciente: 'Marcial Suazo',
    rut: '11254785-5',
    prevision: 'Isapre',
  },
];

var dental = [
  {
    hora: '8:30',
    especialista: 'Andrea Zuñiga',
    paciente: 'Marcela Retamal',
    rut: '11123425-6',
    prevision: 'Isapre',
  },
  {
    hora: '11:00',
    especialista: 'Maria Pia Zañartu',
    paciente: 'Angel Muñoz',
    rut: '9878789-2',
    prevision: 'Isapre',
  },
  {
    hora: '11:30',
    especialista: 'Scarlett Witting',
    paciente: 'Mario Kast',
    rut: '7998789-5',
    prevision: 'Fonasa',
  },
  {
    hora: '13:00',
    especialista: 'Francisco Von Teuber',
    paciente: 'Karin Fernandez',
    rut: '18887662-K',
    prevision: 'Fonasa',
  },
  {
    hora: '13:30',
    especialista: 'Eduardo Viñuela',
    paciente: 'Hugo Sanchez',
    rut: '17665461-4',
    prevision: 'Fonasa',
  },
  {
    hora: '14:00',
    especialista: 'Raquel Villaseca',
    paciente: 'Ana Sepulveda',
    rut: '14441281-0',
    prevision: 'Isapre',
  },
];

// Función para llamar al total de pacientes de Radiología

document.write('Total de Pacientes de Radiología' + ' <br> ' + radiologia.length + ' <br> ' + ' <br> ');

// Función para llamar al total de pacientes de Traumatología

document.write('Total de Pacientes de Traumatología' + ' <br> '+ traumatologia.length + ' <br> ' + ' <br> ');

// Función para llamar al total de pacientes de dental

document.write('Total de Pacientes de Dental' + ' <br> '+ dental.length + ' <br> ' + ' <br> ' + ' <br> ');


// Función para llamar pacientes, rut, y previsión de Radiología

var longitudUno = radiologia.length;

var radPri = radiologia[0];
var radUlt = radiologia[radiologia.length-1];

document.write('Primer y Último Paciente de Radiología' + ' <br> ' + ' <br> ' + radPri.paciente + ' - ' +
radPri.rut + ' - ' + radPri.prevision + ' <br> ' + radUlt.paciente + ' - ' + radUlt.rut +' - ' + radUlt.prevision +
' <br> ' + ' <br> ' + ' <br> ');


// Función para llamar pacientes, rut, y previsión de Traumatología

var longitudDos = traumatologia.length;

var traPri = traumatologia[0];
var traUlt = traumatologia[traumatologia.length-1];

document.write('Primer y Último Paciente de Traumatología' + ' <br> ' + ' <br> ' + traPri.paciente + ' - ' +
traPri.rut + ' - ' + traPri.prevision + ' <br> ' + traUlt.paciente + ' - ' + traUlt.rut + ' - ' + traUlt.prevision +
' <br> ' + ' <br> ' + ' <br> ');


// Función para llamar pacientes, rut, y previsión de Traumatología

var longitudDos = dental.length;

var denPri = dental[0];
var denUlt = dental[dental.length-1];

document.write('Primer y Último Paciente de Dental' + ' <br> ' + ' <br> ' + denPri.paciente + ' - ' +
denPri.rut + ' - ' + denPri.prevision + ' <br> ' + denUlt.paciente + ' - ' + denUlt.rut + ' - ' + denUlt.prevision + ' <br> ' + ' <br> ' +
' <br> ');

// Segunda Parte

// Agregar pacientes a Traumatología
var traumatologiaAux = traumatologia;

traumatologiaAux.push({hora: '9:00', especialista: 'René Poblete', paciente: 'Ana Gellona', rut: '13123329-7', prevision: 'Isapre'},
{hora: '9:30', especialista: 'María Solar', paciente: 'Ramiro Andrade', rut: '12221451-K', prevision: 'Fonasa'}, {hora: '10:00',
especialista: 'Raúl Loyola', paciente: 'Carmen Isla', rut: '10112348-3', prevision: 'Isapre'}, {hora: '10:30', especialista: 'Antonio Larenas',
paciente: 'Pablo Loayza', rut: '13453234-1', prevision: 'Isapre'}, {hora: '12:00', especialista: 'Matías Aravena', paciente: 'Susana Poblete',
rut: '14345656-6', prevision: 'Fonasa'});
// document.write(traumatologiaAux.length); - Con ésto comprobé que se agregaron los nuevos pacientes de Traumatología


// Eliminar al primer y último paciente de Radiología
var radiologiaAux = radiologia;

radiologiaAux.pop();

radiologiaAux.shift();
// document.write(radiologiaAux.length); - Con ésto comprobé que se borró el primer y último paciente de Radiología


// Mostrar el listado completo de pacientes de Dental
var dentalAux = dental;

var consultas =[] ;

dentalAux.forEach(consulta => {
   consultas.push(consulta.hora,consulta.especialista,consulta.paciente,consulta.rut,consulta.prevision);
   document.write("<p>" + consultas.join(' - ') + "</p>");
   consultas = [];
});


// Mostrar la cantidad de pacientes que se atienden en la Clínica




// Mostrar primero la previsión y luego en nombre del paciente de la sección dental
