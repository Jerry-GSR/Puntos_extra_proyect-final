// Variables útiles 
// Precio base de la cotización, en quetzales.
var precio_base = 2000

// Valores de los recargos
var edad_18 = 0.1 // 10%
var edad_25 = 0.2 // 20%
var edad_50 = 0.3 // 30%

var casado_18 = 0.1 // 10%
var casado_25 = 0.2 // 20%
var casado_50 = 0.3 // 30%

var hijos_recargo = 0.2 // 20%
var propiedades_recargo = 0.35 // 35%
var ingresos_recargo = 0.05    // 5%


// Recargo
var recargo = 0
var recargo_total = 0

// Precio final
var precio_final = 0
var nombre = ""

//El programa solicita cotizaciones hasta que se ingrese "Salir"
while (nombre.toUpperCase() !== "SALIR") {
  
  nombre = prompt("Ingrese su nombre completo (o escriba 'Salir' para finalizar)")

  if (nombre.toUpperCase() !== "SALIR") {
    
    var edad = prompt("¿Cuantos años tiene? Ingrese solamente números")
    var edad_numero = parseInt(edad)

    // REQUERIMIENTO 1: La persona a asegurar tiene que ser mayor de edad
    if (edad_numero < 18) {
      alert("Lo sentimos, " + nombre + ". El asegurado debe ser mayor de edad para cotizar.")
    } else {
      
      // Comprobamos el estado civil
      var casado = prompt("¿Está casado actualmente? (SI/NO)")
      var edad_conyuge_numero = 0
      
      if ("SI" == casado.toUpperCase()) {
        var edad_conyuge = prompt("¿Que edad tiene su esposo/a?")
        edad_conyuge_numero = parseInt(edad_conyuge)
      }

      // Comprobamos hijos
      var tiene_hijos = prompt("¿Tiene hijos o hijas? (SI/NO)")
      var cantidad_hijos_numero = 0
      
      if ("SI" == tiene_hijos.toUpperCase()) {
        var cantidad_hijos = prompt("¿Cuantos hijos tiene?")
        cantidad_hijos_numero = parseInt(cantidad_hijos)
      }

      //Propiedades e Ingresos
      var propiedades = prompt("¿Cuantas propiedades tiene?")
      var cantidad_propiedades = parseInt(propiedades)

      var ingresos = prompt("¿Cual es su salario o ingresos mensuales?")
      var salario_usuario = parseFloat(ingresos)

      // INICIO DE CÁLCULOS
      recargo_total = 0 // Reiniciamos el recargo para cada nueva cotización

      // 1. Recargo por edad del asegurado
      if (edad_numero >= 18 && edad_numero < 25) {
        recargo = precio_base * edad_18
        recargo_total = recargo_total + recargo
      } else if (edad_numero >= 25 && edad_numero < 50) {
        recargo = precio_base * edad_25
        recargo_total = recargo_total + recargo
      } else if (edad_numero >= 50) {
        recargo = precio_base * edad_50
        recargo_total = recargo_total + recargo
      }

      // 2. Recargo por la edad del conyuge
      if ("SI" == casado.toUpperCase()) {
        if (edad_conyuge_numero >= 18 && edad_conyuge_numero < 25) {
          recargo = precio_base * casado_18
          recargo_total = recargo_total + recargo
        } else if (edad_conyuge_numero >= 25 && edad_conyuge_numero < 50) {
          recargo = precio_base * casado_25
          recargo_total = recargo_total + recargo
        } else if (edad_conyuge_numero >= 50) {
          recargo = precio_base * casado_50
          recargo_total = recargo_total + recargo
        }
      }

      // 3. Recargo por la cantidad de hijos
      if (cantidad_hijos_numero > 0) {
        recargo = (precio_base * hijos_recargo) * cantidad_hijos_numero
        recargo_total = recargo_total + recargo
      }

      // 4. Recargo por propiedades
      if (cantidad_propiedades > 0) {
        recargo = (precio_base * propiedades_recargo) * cantidad_propiedades
        recargo_total = recargo_total + recargo
      }

      // 5. Recargo por ingresos
      recargo = salario_usuario * ingresos_recargo
      recargo_total = recargo_total + recargo


      // Resultado final
      precio_final = precio_base + recargo_total

      alert("Para el asegurado " + nombre)
      alert("El recargo total sera de: Q." + recargo_total)
      alert("El precio final sera de: Q." + precio_final)
    }
  }
}

alert("Usted ha salido del programa.")