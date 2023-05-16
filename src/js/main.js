import { Articulo } from "./clases/Articulo";
import { Proveedor } from "./clases/Proveedor";


let articulito = new Articulo("Arena de gato","20000");
console.log("============ A R T I C U L O ==============")

console.log(articulito)
// let proveedorcito = new Proveedor("gatoArena","gato@arena.cl",{},"+5690303456");
let proveedorcito = new Proveedor("gatoArena","gato@arena.cl",articulito,"+5690303456");
console.log("============ P R O V E E D O R ==============")

console.log(proveedorcito)

console.log(proveedorcito.getInfoProveedor())

const obtenImpuestos = (proveedor) =>{
  let totalEmpresa = proveedor.articulo.precio;

  let tax= totalEmpresa*19/100;
  let derecho = totalEmpresa*6/100
  let total = tax+derecho;
  return [tax,derecho, total]
}

let [impuesto,aduanero,total] = obtenImpuestos(proveedorcito)

console.log("============ I M P U E S T O S ==============")
console.log(`El IVA de ${articulito.nombre} es ${impuesto}`)
console.log(`El impuesto aduanero de ${articulito.nombre} es ${aduanero}`)
console.log(`El impuesto total de ${articulito.nombre} es ${total}`)

console.log("============ F I N ==============")
