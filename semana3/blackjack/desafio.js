console.log("Bem vindo ao jogo de Blackjack!")

let cartasU = []


   if (confirm("Quer iniciar uma nova rodada?")){
      const carta1 = comprarCarta();
      const carta2 = comprarCarta();
      const carta3 = comprarCarta();
      const carta4 = comprarCarta();
      let cartasU = [carta1.texto, carta2.texto]
      let cartasC = [carta3.texto, carta4. texto]

      if(cartasU === "A" || cartasC === "A"){
         const carta1 = comprarCarta()
         const carta2 = comprarCarta()
         const carta3 = comprarCarta();
         const carta4 = comprarCarta();
         } else {
      }
      if(confirm("Suas cartas são",carta1.texto, carta2.texto + ". A carta revelada do computador é", carta3.texto
      +"\n"+"Deseja comprar mais uma carta?")){
         const carta5 = comprarCarta()
         let resultadoU = carta1.valor + carta2.valor + carta5.valor
         if(resultadoU >= 21){

         }
      }
      
      let resultadoU = carta1.valor + carta2.valor
      let resultadoC = carta3.valor + carta4.valor

      console.log("Usuario - cartas:",carta1.texto, carta2.texto, "- Pontuação", resultadoU)
      console.log("Computador - cartas:",carta3.texto, carta4.texto, "- Pontuação", resultadoC)


      if(resultadoU > resultadoC){
         console.log("O usuario ganhou!")
      } else if(resultadoU < resultadoC){
         console.log("O computador ganhou!")
      } else{
         console.log("Empate!")
      }

   } else {
      console.log("O jogo acabou.")
   }

