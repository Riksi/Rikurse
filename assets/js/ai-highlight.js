window.onload = function(){
    let chatgptSpans = Array.from(document.querySelectorAll('.chatgpt'))
    // only run rest of script if there are chatgpt spans
    if (chatgptSpans.length == 0) {
        console.log('No AI-assisted content on this page')
        return;
    }
    let btn = document.createElement('button')
    btn.className = 'hidden'
    btn.innerText = 'Show AI-Assisted'
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
        chatgptSpans.forEach((x)=>{
            if(currentlyShown){
                x.classList.remove('chatgpt-active');
            }
            else{
                x.classList.add('chatgpt-active');
            }

        })

    })
}