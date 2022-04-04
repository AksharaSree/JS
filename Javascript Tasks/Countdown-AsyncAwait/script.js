

const msg=(count) => {
    return new Promise((resolve,reject)=>{
        if(count > 0){
            setTimeout(() => {
                let countDown = document.getElementById('count-down');
                countDown.innerText = count;
                resolve(count);                               
            }, 1000);
        }
        else{          
            setTimeout(() => {               
                reject("Happy Independence Day!!!");                          
            }, 1000);           
            
        }    
    });
};


window.onload = async function(){
        // msg(10) //10
        // .then(n=>msg(--n)) //9
        // .then(n=>msg(--n)) //8
        // .then(n=>msg(--n)) //7
        // .then(n=>msg(--n)) //6
        // .then(n=>msg(--n)) //5
        // .then(n=>msg(--n)) //4
        // .then(n=>msg(--n)) //3
        // .then(n=>msg(--n)) //2
        // .then(n=>msg(--n)) //1
        // .then(n=>msg(--n)) //0
        // .catch(countDownMsg =>  {
        //     let countDown = document.getElementById('count-down');
        //     countDown.innerText = countDownMsg;
        // });

        try {
            let n = await msg(10);
                n = await msg(--n);
                n = await msg(--n);
                n = await msg(--n);
                n = await msg(--n);
                n = await msg(--n);
                n = await msg(--n);
                n = await msg(--n);
                n = await msg(--n);
                n = await msg(--n);
                n = await msg(--n);
        } catch (countDownMsg) {            
            let countDown = document.getElementById('count-down');
            countDown.innerText = countDownMsg;
        }



};
