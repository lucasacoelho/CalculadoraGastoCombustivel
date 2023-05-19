// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

function calculo(){
  var distancia = document.getElementById('distancia').value
  var vm = document.getElementById('Vm').value
  var auto = document.getElementById('autonomia').value
  var pm = document.getElementById('Pm').value
  var quantos_pd = document.getElementById('quantos-pd').value
  var botoesped = document.getElementsByName('pedagio')
  var botoesidavolt = document.getElementsByName('idaVolta')
  
  if ((distancia == "") || (auto == "") || (vm == "") || (distancia <= 0) || (auto <= 0) || (vm <= 0)) {
    alert("Insira algum valor maior que 0")
  }
  else {

 // se pedagio for igual a sim 
    for (var i = 0 in botoesped){
      if (botoesped[i].checked)
        var ped = botoesped[i].value
    }
    if (ped == 0){
      ped = quantos_pd * 4.70
      for (var l = 2 in botoesidavolt){
        if (botoesidavolt[l].checked)
         var iv = botoesidavolt[l].value
      }
      // se ida e volta for igual a sim
		if (iv == 2){
			ped = ped * 2
			var tempo = distancia / vm
			var consumo = distancia / auto
			var total = consumo * pm
			total = total * 2
			tempo = tempo * 2
			var final = total + ped

			if (tempo < 1){
			tempo = tempo * 60
			console.log("Velocidade Media de: " + vm +"Km/h"+"\n tempo de viagem foi de " + tempo + " minuto(s)" + 
			"\n Vai dar R$"+ total + " de gasolina" + "\n O total da viagem vai ser R$" + final)
			}
			else{
			console.log("Velocidade Media de: " + vm +"Km/h"+"\n tempo de viagem foi de " + tempo + " Hora(s)" + 
			"\n Vai dar R$"+ total + " de gasolina" + "\n O total da viagem vai ser R$" + final)

			}

		}

		else{

			var tempo = distancia / vm
			var consumo = distancia / auto
			var total = consumo * pm
			var final = total + ped
			if (tempo < 1){
				tempo = tempo * 60
				console.log("Velocidade Media de: " + vm +"Km/h"+"\n tempo de viagem foi de " + tempo + " minuto(s)" + 
				"\n Vai dar R$"+ total + " de gasolina" + "\n O total da viagem vai ser R$" + final)
			}
			else{
				console.log("Velocidade Media de: " + vm +"Km/h"+"\n tempo de viagem foi de " + tempo + " Hora(s)" + 
				"\n Vai dar R$"+ total + " de gasolina" + "\n O total da viagem vai ser R$" + final)
				}
			}
			
	
  	}
	else{
    	//se ida e volta for sim
		for (var l = 2 in botoesidavolt){
			if (botoesidavolt[l].checked)
			 var iv = botoesidavolt[l].value
		  }
		if (iv == 2){
			var tempo = distancia / vm
			var consumo = distancia / auto
			var total = consumo * pm
			total = total * 2 
			tempo = tempo * 2

			if (tempo < 1){
			tempo = tempo * 60
			console.log("Velocidade Media de: " + vm +"Km/h"+"\n tempo de viagem foi de " + tempo + " minuto(s)" + 
			"\n Vai dar R$"+ total + " de gasolina")
			}
			else{
			console.log("Velocidade Media de: " + vm +"Km/h"+"\n tempo de viagem foi de " + tempo + " Hora(s)" + 
			"\n Vai dar R$"+ total + " de gasolina")

			}

		}

		else{

			var tempo = distancia / vm
			var consumo = distancia / auto
			var total = consumo * pm
			if (tempo < 1){
				tempo = tempo * 60
				console.log("Velocidade Media de: " + vm +"Km/h"+"\n tempo de viagem foi de " + tempo + " minuto(s)" + 
				"\n Vai dar R$"+ total + " de gasolina")
			}
			else{
				console.log("Velocidade Media de: " + vm +"Km/h"+"\n tempo de viagem foi de " + tempo + " Hora(s)" + 
				"\n Vai dar R$"+ total + " de gasolina")
				}
			}

  
	}
}
}