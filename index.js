document.addEventListener("DOMContentLoaded", function () {
    const chainHover = document.querySelector(".chain-hover");
    const earingsHover = document.querySelector(".earings-hover");
    const banglesHover = document.querySelector(".bangles-hover");
    const braceletsHover = document.querySelector(".bracelets-hover");
    const pendantsHover = document.querySelector(".pendants-hover");
    const necklaceHover = document.querySelector(".necklace-hover")
    const newHead = document.getElementById('main')
    newHead.addEventListener("mouseleave", function () {
        earingsHover.classList.remove("highlighted");
        banglesHover.classList.remove("highlighted");
        braceletsHover.classList.remove("highlighted");
        chainHover.classList.remove('highlighted');
        necklaceHover.classList.remove("highlighted");
        pendantsHover.classList.remove("highlighted");
    })
    chainHover.addEventListener("mouseover", function () {
        earingsHover.classList.add("highlighted");
        banglesHover.classList.add("highlighted");
        braceletsHover.classList.add("highlighted");
        chainHover.classList.remove('highlighted');
        necklaceHover.classList.add("highlighted");
        pendantsHover.classList.add("highlighted");
    });

    earingsHover.addEventListener("mouseover", function () {
        chainHover.classList.add("highlighted");
        banglesHover.classList.add("highlighted");
        braceletsHover.classList.add("highlighted");
        earingsHover.classList.remove('highlighted')
        necklaceHover.classList.add("highlighted");
        pendantsHover.classList.add("highlighted");
    });

    banglesHover.addEventListener("mouseover", function () {
        chainHover.classList.add("highlighted");
        earingsHover.classList.add("highlighted");
        braceletsHover.classList.add("highlighted");
        banglesHover.classList.remove("highlighted")
        necklaceHover.classList.add("highlighted");
        pendantsHover.classList.add("highlighted");
    });
    braceletsHover.addEventListener("mouseover", function () {
        chainHover.classList.add("highlighted");
        earingsHover.classList.add("highlighted");
        banglesHover.classList.add("highlighted")
        braceletsHover.classList.remove("highlighted");
        necklaceHover.classList.add("highlighted");
        pendantsHover.classList.add("highlighted");
    });
    pendantsHover.addEventListener("mouseover", function () {
        chainHover.classList.add("highlighted");
        earingsHover.classList.add("highlighted");
        banglesHover.classList.add("highlighted");
        braceletsHover.classList.add("highlighted");
        necklaceHover.classList.add("highlighted");
        pendantsHover.classList.remove("highlighted");
    });
    necklaceHover.addEventListener("mouseover", function () {
        chainHover.classList.add("highlighted");
        earingsHover.classList.add("highlighted");
        banglesHover.classList.add("highlighted")
        braceletsHover.classList.add("highlighted");
        pendantsHover.classList.add("highlighted")
        necklaceHover.classList.remove("highlighted")
    })
});