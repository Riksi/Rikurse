window.onload = function(){
    let chatgptSpans = Array.from(document.querySelectorAll('.chatgpt'))
    // Also add '.ann' to the list of selectors
    let annSpans = Array.from(document.querySelectorAll('.ann'))
    let targetSpans = Array.from(document.querySelectorAll('.tar'));
    chatgptSpans = chatgptSpans.concat(annSpans)

    // look for '#btn-text' span in document and if present use stripped innerText as btnText else default
    let btnText = 'AI-Assisted'; // Default text
    const btnTextElement = document.querySelector('#btn-text'); // Select the element with id 'btn-text'

    if (btnTextElement) { // If the element exists
        btnText = btnTextElement.innerText.trim(); // Use its stripped innerText as btnText
    }

    let btn = document.createElement('button')
    btn.className = 'hidden'
    btn.innerText = 'Show ' + btnText
    document.body.appendChild(btn) // does not matter where as it is fixed position
    var togglBtn= function(){
        if (window.scrollY >= 50) {
          btn.style.display = "block";
        } else {
          btn.style.display = "none";
        }
      }

    window.addEventListener('scroll', togglBtn)

    btn.addEventListener('click',
    function (e){
        let currentlyShown = btn.classList.contains('shown');
        if(currentlyShown){
            btn.classList.remove('shown');
            btn.classList.add('hidden');
            btn.innerText = btn.innerText.replace('Hide', 'Show');
        } else {
            btn.classList.remove('hidden');
            btn.classList.add('shown');
            btn.innerText = btn.innerText.replace('Show', 'Hide');
        }
        chatgptSpans.forEach((x, idx)=>{
            if(currentlyShown){
                x.classList.remove('chatgpt-active');
                if (x.classList.contains('ann')){
                    let prevTarSpan = targetSpans[idx];
                    if (prevTarSpan) {
                        prevTarSpan.classList.remove('tar-active');
                    }
                
                }
            }
            else{
                x.classList.add('chatgpt-active');
                if (x.classList.contains('ann')){
                    let prevTarSpan = targetSpans[idx];
                    if (prevTarSpan) {
                        prevTarSpan.classList.add('tar-active');
                    }
                
                }
            }

        })
    })




    targetSpans.forEach((x, idx) => {
        x.addEventListener('mouseover', function (e) {
            if (btn.classList.contains('shown')) return;

            let nextAnnSpan = annSpans[idx]; 
    
            if (nextAnnSpan) {
                x.classList.add('tar-active')
                nextAnnSpan.classList.add('chatgpt-active');
            }
        });
    
        x.addEventListener('mouseout', function (e) {
            if (btn.classList.contains('shown')) return;
    
            let nextAnnSpan = annSpans[idx];
    
            if (nextAnnSpan) {
                x.classList.remove('tar-active')
                nextAnnSpan.classList.remove('chatgpt-active');
            }
        });
    });
    

    function findPrevTarSpan(element) {
        let prevSibling = element.previousElementSibling;
    
        while (prevSibling) {
            if (prevSibling.classList.contains('tar')) {
                return prevSibling;
            }
    
            prevSibling = prevSibling.previousElementSibling;
        }
    
        return null;
    }

    // click after .1 second for debugging
    // setTimeout(function(){
    //     btn.click();
    // }, 100);
}