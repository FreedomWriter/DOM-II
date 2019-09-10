const blockDiv = document.querySelector('.blocks');
const blocks = Array.from(document.querySelectorAll('.block'));


blocks.forEach(() => {
    
    for (let block of blocks) {
        block.addEventListener('click', (e) => {
            if (blocks.indexOf(block) !== 0 ) {
                blockDiv.prepend(block);  
            }  

            block.addEventListener('mousedown', (e) => {
                block.style.position= 'relative'; 
                block.style.left = '0px';
                block.style.left = parseInt(block.style.left) + 10 + 'px';
    
                let start = Date.now();
    
                let  timer = setInterval(function() {
                    let timePassed = Date.now() - start;
    
                    if (timePassed >= 6000) {
                        clearInterval(timer);
                        block.style.position= 'relative'; 
                        block.style.left = '0px';
                    } 
                    
                    draw(timePassed);
    
                }, 10);
    
                function draw(timePassed) {
                    block.style.left = timePassed / 5 + 'px';
                }
                console.log('testing mouse down'); 
                block.addEventListener('mouseup', (e) => {
                    clearInterval(timer);
                    console.log('testinggg mouse uppp'); 
                });
            });
        });
        
    
        
    }
});