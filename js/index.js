
function calcularArea() {
  const base = parseFloat(document.getElementById('base').value);
  const altura = parseFloat(document.getElementById('altura').value);

  if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
    Swal.fire({
      icon: 'error',
      title: 'Invalido',
      text: 'Solo valores posotivos. Por favor ingrese valores positivos para base y altura.'
    });
    return;
  }

  const area = base * altura;

  Swal.fire({
    icon: 'success',
    title: 'Área Calculada',
    text: `El área del rectángulo es: ${area.toFixed(2)} unidades.`
  });
}

function limpiarFormulario() {
  document.getElementById('base').value = '';
  document.getElementById('altura').value = '';
}
