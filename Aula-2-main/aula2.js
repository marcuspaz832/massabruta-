function gerarNumeroaleatorio()
{ 
     const titulo = document.getElementById("numeroGerado");
      let numeroAleatorio = Math.floor(Math.random() * 100);

      titulo.innerHTML = `N ${numeroAleatorio}`;


}



function validainput(caramelo)
{
  let valor= parseInt(caramelo.value)
  
  if(isNaN(valor))
  {
  
      caramelo.style.backgroundColor = 'red';

      setTimeout(() => {
        caramelo.style.backgroundColor = 'white';
      } ,1000)

      return false;
  }

  return true;
}

function operacaoMatematica(input1, input2, resultado, operacao )
{
  console.log(`Retorno da função validadainput = ${validainput(input1)}`);
  console.log(`Resultado da validação não invertido ${validainput(input1)}`);
  console.log(`Resultado da validação invertido ${!validainput(input1)}`);

  if(validainput(input1) === false || validainput(input2) === false)
  {
    return;
  }

  let resultadoOperacao = 0;

  switch(operacao)
  { 
    case 'adicao':
      resultadoOperacao = parseInt(input1.value) + parseInt(input2.value);
      break;
    case'multiplicacao':
      resultadoOperacao = parseInt(input1.value) * parseInt(input2.value);
      break;
    case 'divisao':
      resultadoOperacao = parseInt(input1.value) / parseInt(input2.value);
      break;
    default:
      resultado.innerHTML = 'Operacao invalida';
      return;

  }
  resultado.innerHTML = `Resultado: ${resultadoOperacao}`;
}
    


    
      
      
      
    


      