console.log("Bem vindo ao jogo de Blackjack!")
let chave0 = true
if(confirm("Quer iniciar uma nova rodada?")){
   let cartasU = [comprarCarta(), comprarCarta()]
   let cartasC = [comprarCarta(), comprarCarta()]
   for (let i = true; i === chave0; i += i){
      if(cartasU[0] && cartasU[1] === "A"){
      cartasU = [comprarCarta(), comprarCarta()]
      }
      if(cartasC[0] && cartasC[1] === "A"){
      cartasC = [comprarCarta(), comprarCarta()]
      } 
      else if ((cartasU[0] && cartasU[1] !== "A")&&(cartasC[0]&&cartasC[1]!=="A")){
         chave0 = !true
      }
   }   
   let resultadoC = 0   
   let resultadoU = 0
   let usu = " "
   let pc = " "
   for(let i of cartasU){
      usu += i.texto + " "
   }
   chave1 = confirm("Suas cartas são "+usu+". A carta revelada do computador é "+ cartasC[0].texto
   +"\n"+"Deseja comprar mais uma carta?")
   for(let i = true; i === chave1; i += i){
      const maisUmaCarta = comprarCarta()
      cartasU.push(maisUmaCarta)
      resultadoU = 0
      for(let i of cartasU){
         resultadoU += i.valor
      }if(resultadoU < 21){
         usu = " "
         for(let i of cartasU){
            usu += i.texto + " "
         } chave1 = confirm("Suas cartas são "+usu+". A carta revelada do computador é "+ cartasC[0].texto
         +"\n"+"Deseja comprar mais uma carta?")
      } else {
         usu = " "
         for(let i of cartasU){
            usu += i.texto + " "
            chave1 = !true
         }   
      }
   }  
   resultadoU = 0
   for(let i of cartasU){
   resultadoU += i.valor
   }
   for(let i of cartasC){
   resultadoC += i.valor
   }
   let chave2 = resultadoU <= 21 && resultadoC <= resultadoU
   for(let i = true; i === chave2; i += i){
      const maisUma = comprarCarta()
      cartasC.push(maisUma)
      resultadoC = 0
      for(let i of cartasC)
      resultadoC += i.valor
      chave2 = resultadoU <= 21 && resultadoC <= resultadoU
   } pc = " "
   for ( let t of cartasC){
      pc += t.texto + " "
   }
   let resultadoFinal = " "
   if((resultadoU <= 21  && resultadoU > resultadoC) || (resultadoU > 21 && resultadoU < resultadoC) || (resultadoC >= 21 && resultadoU < resultadoC)){
      resultadoFinal += "O usuário ganhou!"
   }
   else if((resultadoC <= 21 && resultadoC > resultadoU) || (resultadoC > 21 && resultadoC < resultadoU) || (resultadoU >= 21 && resultadoC < resultadoU)){
      resultadoFinal += "O computador ganhou"
   }
   else if(resultadoU === resultadoC){
      resultadoFinal += "Empatou!"
   }
   alert("Suas cartas são " + usu + ". Sua pontuação é " + resultadoU + ".\n As cartas do computador são "
    + pc + ". A pontuação do computador é " + resultadoC + "." + resultadoFinal)
}else{
   alert("O jogo acabou!")
}
     

