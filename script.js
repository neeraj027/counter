let temp=0;
const count = document.querySelector(".count");
const btns = document.querySelectorAll(".button");

btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const style = (e.currentTarget.classList)
        if(style.contains('minus')){
            
        temp--;
        }
        else if(style.contains('plus')){
            temp++;
        }
        else{
            temp=0;
        }
        if(temp<0){
            count.style.color="red"
        }
        if(temp>0){
            count.style.color="green"
        }
        count.textContent=temp;
    })
})