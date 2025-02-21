document.addEventListener('keypress', function(event) {
     if (event.key === 'Enter') {
          spin();
     }
});

let truotthong = 0;
let truongthong_max = 0;

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


     let x = document.getElementById('numberInput').value;
     let y = document.getElementById('pointsInput').value;
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
          truotthong = 0;
          let texttt = `Ăn con ${x}, ${y} điểm, `
          texttt += nhay > 1? ` ${nhay} nhay, `: `` // xu ly truong hop ve nhieu hon 1 nhay!
          texttt += `được ${currency(y * nhay * 100000)}đ!`
          alert(texttt);
     }
     else{
          truotthong += 1;
          if (truotthong > truongthong_max) {
               truongthong_max = truotthong;
               document.getElementById('truongthong_max').textContent = truongthong_max
          }
          alert(`Trượt ${y} điểm con ${x}!`)
     }
     document.getElementById('count').textContent = truotthong

     // Clear input values and set focus
     document.getElementById('numberInput').value = '';
     document.getElementById('pointsInput').value = '';
     document.getElementById('numberInput').focus();
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
