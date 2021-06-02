import {controler, resta} from './controler.js';


const actiResta = function(e) {
  console.log(e);
  const num1 = _('num1');
  const num2 = _('num2');
  const results_dom = _('results');
  
  const result = resta(num1.value, num2.value)
  
  results_dom.innerText = `
  La resta es: ${result < 0 ? 'Menor a cero' : result}
  `;
}

_('restaAct').addEventListener('click', actiResta)

function _(elmnt) {
  return document.getElementById(elmnt);
}
