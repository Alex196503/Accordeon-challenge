document.addEventListener(('DOMContentLoaded'),()=>{
    let containers=document.querySelectorAll('section');    
    containers.forEach((container)=>{
    container.addEventListener(('click'),()=>{
        let paragraf=container.querySelector('p');
        let img=container.querySelector('img');        
       if(paragraf.classList.contains('hidden'))
       {
        paragraf.classList.remove('hidden');
        img.setAttribute('src', 'icon-minus.svg');
       }
       else{
        paragraf.classList.add('hidden');
        img.setAttribute('src', 'icon-plus.svg');
       }       
    })
    container.addEventListener(('keypress'),(event)=>{
        if(event.key=='Enter' || event.key==' ')
        {
              let paragraf=container.querySelector('p');
        let img=container.querySelector('img');        
       if(paragraf.classList.contains('hidden'))
       {
        paragraf.classList.remove('hidden');
        img.setAttribute('src', 'icon-minus.svg');
       }
       else{
        paragraf.classList.add('hidden');
        img.setAttribute('src', 'icon-plus.svg');
       }       
        }
    })
}) 
})