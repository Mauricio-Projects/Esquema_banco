/*Importación de clases*/
import {Cliente} from './Cliente.js'
import {CuentaCorriente} from './Cuentas/CuentaCorriente.js';
import {CuentaAhorro} from './Cuentas/CuentaAhorro.js';
import { CuentaNomina } from './Cuentas/CuentaNomina.js';
import { Empleado } from './Empleados/Empleado.js';
import { Gerente } from './Empleados/gerente.js';
import { Director } from './Empleados/Director.js';
import { SistemaAutenticacion } from './SistemaAutenticacion.js';


const empleado = new Empleado('Juan Perez','12345',10000);
empleado.asignarClave('12345')
console.log(SistemaAutenticacion.login(empleado, '12345'))

const gerente = new Gerente('Pedro Rivas', '987456',12000);
gerente.asignarClave('98765')
console.log(SistemaAutenticacion.login(gerente, '987650'))

const director = new Director('Elena Moreno', '578965',15000);
director.asignarClave('852258')
console.log(SistemaAutenticacion.login(director, '852258'))

const cliente = new Cliente('Leonardo','13804050','123224');
cliente.asignarClave('001')
console.log(SistemaAutenticacion.login(cliente,'001'))


// const cliente2 = new Cliente('María','16979808','8989');
// cliente.asignarClave('002')
// console.log(SistemaAutenticacion.login(cliente,'002'))





/*
console.log(empleado.verBonificacion())
console.log(gerente.verBonificacion())
console.log(director.verBonificacion())

const cuentaDeLeonardo = new CuentaCorriente(cliente, '1', '001');
const cuentaDeMaria = new CuentaCorriente(cliente2,'2','002');

const cuentaAhorroLeonardo = new CuentaAhorro(cliente,'9985','001',0);
const CuentaNominaLeonardo = new CuentaNomina(cliente, '3','004',100)
console.log(CuentaNominaLeonardo);

CuentaNominaLeonardo.depositoEnCuenta(150)
console.log(CuentaNominaLeonardo.verSaldo());

CuentaNominaLeonardo.retirarDeCuenta(50);
console.log(CuentaNominaLeonardo.verSaldo());

console.log(cuentaDeLeonardo);

cuentaDeLeonardo.depositoEnCuenta(150);
console.log(cuentaDeLeonardo.verSaldo());
cuentaDeLeonardo.retirarDeCuenta(70);
console.log(cuentaDeLeonardo.verSaldo());
console.log(cuentaAhorroLeonardo);
cuentaAhorroLeonardo.depositoEnCuenta(200);
console.log(cuentaAhorroLeonardo.verSaldo());
cuentaAhorroLeonardo.retirarDeCuenta(120);
console.log(cuentaAhorroLeonardo.verSaldo());

*/