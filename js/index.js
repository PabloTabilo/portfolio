document.querySelectorAll(".container-themes a").forEach((e)=>{
    e.addEventListener("click", () => {
        document.querySelector(".container-themes .active").classList.remove("active");
        e.parentElement.classList.add("active");
    })
});