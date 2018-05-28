/**
 * Taggeds são utilizadas para interceptar o render de uma string.
 */

 const name = 'jairo'
 const age = '31'
 const country = 'Colômbia'

 const catchString = (template, ...values) => {
     /**
      * reduce recebe uma função com parametro
      */
    return template.reduce((acumulator, part, i) => {
        return `${acumulator} ${values[i - 1].toUpperCase()} ${part}`
    })
 };
 
const template = catchString`${name} nasceu em ${country} e sua idedade é ${age}`

console.log(template)
