$(".timeline-nameOrg").click(function(){

    console.log(this);
    console.log(this.parentNode);

    let titleTrabajo=this.parentNode.querySelector("h3").innerHTML;
    
    let descripcionTrabajo=this.parentNode.querySelector("p").innerHTML;

    console.log(titleTrabajo,descripcionTrabajo);

    $("#modal-title").text(titleTrabajo)
    $("#modal-text").text(descripcionTrabajo)

    $(".myModal").show();
    $("#modal_close").click(function(){
        $(".myModal").hide();

    })

})