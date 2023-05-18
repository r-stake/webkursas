let slider = tns ({
    container: ".slider-container",
    itmes:1,
    gutter:10,
    autoplay:true,
    mousedrag:true,
    nav:false,
    autoplayButtonOutput:false,
    responsive: {
        640: {
            items:2,
        },
        768: {
            items:3,
        }
    }

})