let card = document.getElementsByClassName("songs");

document.querySelectorAll(".songs").forEach(song => {

    const anchor = song.querySelector("a");

    song.addEventListener("mouseenter", () => {

        if (anchor.querySelector(".Play")) return;

        let playbtn = document.createElement("button")
        playbtn.innerHTML = `<svg data-encore-id="icon" role="img" aria-hidden="true" height="25" width="25" class="e - 91000 - icon e - 91000 - baseline" viewBox="0 0 24 24"><path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05 - .606"></path></svg>`
        playbtn.classList.add("Play");
        anchor.appendChild(playbtn);

        playbtn.offsetHeight;

        playbtn.classList.add("show");
    });

    song.addEventListener("mouseleave", () =>{
        const btn = document.querySelector(".Play")
        if (btn){

            btn.classList.remove("show");

            setTimeout(() => btn.remove(), 300);
        } 

    })
    
})

let search = document.querySelector(".search")

search.addEventListener("mouseenter", () =>{

    let ctrl = document.createElement("span");
    let k = document.createElement("span");
    ctrl.innerText = `Ctrl`;
    k.innerText = `K`;
    ctrl.classList.add("js");
    k.classList.add("js");

    Prob = document.querySelector(".prob")
    Prob.appendChild(ctrl);
    Prob.appendChild(k);

    ctrl.offsetHeight;

    ctrl.classList.add("ani");
    k.classList.add("ani");
})

search.addEventListener("mouseleave", () =>{

    document.querySelectorAll(".js").forEach(both =>{

        if (both){
          both.classList.remove("ani");
          setTimeout(() => both.remove(), 300);
        }
    })

    
})
