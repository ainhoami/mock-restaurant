$(document).ready(function() {
  $("#accordian").on("click", "span", function() {
    $(".content").removeClass("active")
    $(this)
      .find("+.content")
      .addClass("active")
  })


let appetizers=["images/Baked_clams_with_champagne_sauce_and_pancetta.jpg", "images/eggplant.jpg","images/tunatartare.jpg","images/cold-cuts.jpg"];
let entrees=["images/carbonara.jpg","images/trufagnocchi.jpg","images/ribeye.jpg","images/salmon.jpg"];
let desserts=["images/tiramisu-2897900_960_720.jpg","images/cheesecake.jpg","images/strawberries.jpg","images/oreomilkshake.jpg"];
let arraux=[];
$.get("https://obscure-tundra-54269.herokuapp.com/fine-dining").done(function(data){
    $("#sec1").on("click", "p", function() {
      
 $(".dinner").remove()
      
      
      const type = $(this).html()
      if(type.toLowerCase()==="entrees"){
        arraux=entrees;
      } else if (type.toLowerCase()==="desserts"){
        arraux=desserts;
      }else{
        arraux=appetizers;
      }
           
      let dat=data[type.toLowerCase()].map((d,i) =>{
      let spi=d.extra.spicy ? "fa fa-check" : "fa fa-times";
      let gfree=d.extra.glutenfree ? "fa fa-check" : "fa fa-times";
      let veg=d.extra.vegetarian ? "fa fa-check" : "fa fa-times";

      return `  
      <div class="dinner"> 
          <img src=${arraux[i]}>
            
          <div class="menuline1">
          <p id="name">${d.name}</p>
          <p id="descr">${d.description}</p>
          <p id="price">$${d.price}</p>
        <ul class="extras">                          
          <li>Spicy<i class="${spi}"></i></li>
          <li>Gluten free <i class="${gfree}"></i></li>
          <li>Vegetarian<i class="${veg}"></i></li>
      </ul>
      
      </div>
        </div> 
      ` 
     
      }).join('')
    
        $(".menu").append(dat)
     
      })
    })

   
      $( "a.scroll" ).click(function(e) {
          e.preventDefault();
          $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 700);
      });
 






})