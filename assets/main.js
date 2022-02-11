function spin() {

     let resultBox = document.querySelectorAll('b')
     
     // console.log(resultBox);
     resultBox.forEach((item) => {
          if (item.classList.contains('r-5')) {
               item.textContent = random(5)
          }
          else if (item.classList.contains('r-4')) {
               item.textContent = random(5)
          }
          else if (item.classList.contains('r-3')) {
               item.textContent = random(3)
          }
          else if (item.classList.contains('r-2')) {
               item.textContent = random(2)
          }
          else {
               console.log();
          }
          
          item.style.color = "#333"
     })

     if (confirm('Mày chơi xổ số đấy à?')) {
          let x = prompt('Nay đánh con gì?')
          let y = prompt('Bao nhiêu điểm?')
          let mess = document.querySelector('#mess')
          let trung = false
          let nhay = 0
          resultBox.forEach((item) => {
               if (check(item.textContent, x)) {
                    trung = true;
                    nhay++;
                    item.style.color = "red"
               }
          })

          if(trung) {
               mess.textContent = `Ăn con ${x}, ${y * nhay} điểm, được ${currency(y * nhay * 100000)}đ!`
          }
          else{
               mess.textContent = `Này thì ${y} điểm con ${x} :v...Ra đê!`
          }
     }
}

function check(to, sonho) {
     let soto = to.toString();
     let con = soto[soto.length-2] + soto[soto.length-1]
     return con == sonho
}

function currency(x){
     let out = x.toString().split('')
     for(let i = out.length-3; i >0 ; i-=3)
     {
          out[i] = `.${out[i]}`
     }
     return out.join('')
}

function random(length) {
     let number = Math.floor(Math.random() * Math.pow(10, length))
     let result = number.toString();

     if (result.length === length) {
          return result
     }
     else {
          while (result.length !== length) {
               result = '0'.concat(result)
          }
          return result
     }
}
