
window.onload = function () {
    let countDown = document.getElementById('count-down');
    setTimeout(() => {
        countDown.innerHTML = 10;
        setTimeout(() => {
            countDown.innerHTML = 9;
            setTimeout(() => {
                countDown.innerHTML = 8;
        
                setTimeout(() => {
                    countDown.innerHTML = 7;
            
                    setTimeout(() => {
                        countDown.innerHTML = 6;
                
                        setTimeout(() => {
                            countDown.innerHTML = 5;
                    
                            setTimeout(() => {
                                countDown.innerHTML = 4;
                        
                                setTimeout(() => {
                                    countDown.innerHTML = 3;
                                    setTimeout(() => {
                                        countDown.innerHTML = 2;
                                
                                        setTimeout(() => {
                                            countDown.innerHTML = 1;
                                    
                                            setTimeout(() => {
                                                countDown.innerHTML = "Happy Independence Day!!!";
                                        
                                        
                                        
                                            }, 1000);
                                    
                                        }, 1000);
                                
                                    }, 1000);
                            
                            
                                }, 1000);
                        
                            }, 1000);
                    
                    
                        }, 1000);
                
                    }, 1000);
            
                }, 1000);
        
            }, 1000);
    
    
        }, 1000);
    
    
    }, 1000);
};

