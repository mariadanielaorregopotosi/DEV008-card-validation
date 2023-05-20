# Tarjeta de Validacion Guarderia

# Quienes Son Los Principales Usuarios De La Plataforma
*Padres y tutores: Los padres y tutores de los niños que asisten a la guardería son los principales usuarios que necesitan validar sus tarjetas. Ellos utilizarán las tarjetas de crédito o débito para realizar pagos por los servicios de la guardería, como la inscripción, mensualidades, servicios adicionales, como salidas de campo y compra de materiales para sus hijos.*

*Personal administrativo: El personal administrativo de la guardería, como el encargado de las finanzas o el responsable de la facturación, también puede ser usuario de la validación de tarjetas. Ellos se encargarán de verificar y procesar los pagos realizados por los padres y tutores, asegurándose de que las tarjetas sean válidas y que los pagos se realicen correctamente.*

# Cuales Son Los Objetivos De Estos Usuarios En Relacion Con El Producto De Validacion De Tarjeta
 *Padres y tutores:
   - *Garantizar la seguridad de los pagos: Los padres y tutores desean asegurarse de que los pagos que realizan a la guardería sean seguros y protegidos. El objetivo es utilizar una validación de tarjeta para verificar la autenticidad y validez de las tarjetas de crédito o débito utilizadas.*

   - *Facilitar el proceso de pago: Los padres y tutores buscan una experiencia de pago fluida y conveniente. El objetivo es que la validación de tarjeta sea rápida, evitando errores en los datos de la tarjeta y facilitando la confirmación de el pago.*

 *Personal administrativo:
   - *Garantizar la recepción correcta de los pagos: El personal administrativo de la guardería tiene como objetivo asegurarse de que los pagos de los padres y tutores sean recibidos de manera adecuada y verificada. Evitamos posibles errores o fraudes.*

   - *Optimizar los procesos de facturación y contabilidad: El personal administrativo busca automatizar y agilizar los procesos de facturación y contabilidad relacionados con los pagos de la guardería.*
  
  # Como Creo Que El Producto  Esta Resolviendo Los Problemas De La Guarderia
  *Seguridad en los pagos: El producto proporciona una validación de tarjeta que permite verificar la autenticidad y validez de las tarjetas de crédito o débito utilizadas para realizar los pagos en la guardería.*

  *Prevención de errores en los datos de la tarjeta: Al incorporar una validación de tarjeta, el producto ayuda a prevenir errores en los datos ingresados por los padres y tutores. Esto evita rechazos debido a información incorrecta de la tarjeta*

  *Experiencia de pago fluida: El producto facilita el proceso de pago al validar rápidamente los datos de la tarjeta.

  *Registro y seguimiento de pagos: Al contar con una validación de tarjeta, el producto permite un registro más preciso y eficiente de los pagos realizados en la guardería. Esto ayuda la conciliación de los pagos recibidos.*

# Estructura General

*Archivo index.html: Este archivo es la página HTML principal de tu aplicación. Aquí debes incluir la estructura básica del documento HTML, como las etiquetas <html>, <head> y <body>. Dentro del <body>, puedes agregar elementos como <input> para que el usuario ingrese el número de tarjeta, un botón para validar la tarjeta, y elementos para mostrar los resultados, el elemento <form> se emple para crear formularios.

*Archivo style.css: En este archivo, puedes definir estilos CSS para darle formato y diseño a tu página y especificar propiedades como colores, tamaños de fuente, márgenes, etc.

*Archivo validator.js: Este archivo puede contener la lógica para validar el número de tarjeta utilizando el algoritmo de Luhn. Puedes definir una función isValid(numeroTarjeta) que tome el número de tarjeta como parámetro y realice las comprobaciones necesarias para determinar si es válido o no. Puedes utilizar métodos como split(), reverse(), alert(),   .push(), if(), Else() entre otros, para manipular y procesar el número de tarjeta.

*Archivo index.js: En este archivo, puedes escribir código JavaScript para interactuar con el DOM y agregar funcionalidad a tu página. Puedes utilizar el método getElementById() para obtener referencias a los elementos HTML, como el botón y los campos de entrada. Luego, puedes agregar un evento de clic al botón para llamar a la función isValid() del validator.js, Maskify() y mostrar los resultados en la página.




