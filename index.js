let datos = [ 
{nombre: "Nacho", telefono: "966112233", edad: 40}, 
{nombre: "Ana", telefono: "911223344", edad: 35}, 
{nombre: "Mario", telefono: "611998877", edad: 15}, 
{nombre: "Laura", telefono: "633663366", edad: 17} 
];

let promesaMayoresEdad=listado=>{
    return new Promise ((resolve, reject)=>{
        let resultado = listado.filter(persona => persona.edad > 18)
        if (resultado.length>0)
            resolve(resultado)
        else
            reject("No hay resultados")
    });
};

promesaMayoresEdad(datos)
    .then(resultado => console.log("Mayores de edad: ", resultado))
    .catch(error => console.log("Error: ", error));
