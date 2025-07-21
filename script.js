
function createcard(classname,upperbtn,image,p1,p2,price){
    let sec=document.querySelector(`${classname}`)
    const card = document.createElement("div")
    card.className="card1 flex"
     card.innerHTML=
                ` ${upperbtn ? `<button class="btn newbtn">${upperbtn}</button>` : ''}
                <img src=${image} alt="" class="card-image">
                <div class="card-content">

                    <p>${p1}</p>
                    <p>${p2}</p>
                    <p class="price">${price}</p>
                    <button class="endbtn btn hide">ADD TO CART</button>
                </div>`;
               
            sec.appendChild(card)
            let endBtn=card.querySelector(".endbtn")
            card.addEventListener("mouseenter",()=>{
           endBtn.classList.remove("hide")
    })
    card.addEventListener("mouseleave",()=>{
        endBtn.classList.add("hide")
    })

}
createcard(".new","SALE","Assets/card-image1.jpg","Sport shoes","outedition","$100.0")
createcard(".new","SALE","Assets/card-image2.jpg","BLACK WOMEN'S LEATHER HANDBAG","outedition","$100.0")
createcard(".new","SALE","Assets/card-image3.jpg","Sport shoes","outedition","$100.0")
createcard(".new","SALE","Assets/card-image4.jpg","Sport shoes","outedition","$100.0")


createcard(".bestsale","","Assets/card-image5.jpg","Sport shoes","outedition","$100.0")
createcard(".bestsale","New","Assets/card-image6.jpg","Sport shoes","outedition","$100.0")
createcard(".bestsale","","Assets/card-image7.jpg","Sport shoes","outedition","$100.0")
createcard(".bestsale","Sale","Assets/card-image8.jpg","Sport shoes","outedition","$100.0")
createcard(".bestsale","Sale","Assets/card-image9.jpg","Sport shoes","outedition","$100.0")
createcard(".bestsale","New","Assets/card-image10.jpg","Sport shoes","outedition","$100.0")
createcard(".bestsale","","Assets/card-image11.jpg","Sport shoes","outedition","$100.0")
createcard(".bestsale","Sale","Assets/card-image12.jpg","Sport shoes","outedition","$100.0")
function offers(iconname,offname,ptag){
    let offer = document.querySelector(".offers")
    const subdiv = document.createElement("div")
    subdiv.className="offdiv"
    subdiv.innerHTML=`<a href="#" class="icon icon-active"><i class="fa-solid fa-${iconname}"></i></a>
    <h3>${offname}</h3>
    <p>${ptag}</p>`
     offer.appendChild(subdiv)
}
offers("truck","Free Shipping","Free Shipping On Order Over $50")
offers("money-bill-1","Cash On Deliver","The Internet Trend to repeat")
offers("gift","Gift For All","Receive Gift When Subscribe")
offers("clock","Opening All Week","6.00 am-17.00 pm")
function latest(heading, imagename) {
    const cont = document.querySelector(".newlatest");

    const outer = document.createElement("div");
    outer.className = "outerdiv";
    outer.style.backgroundImage = `url(Assets/${imagename})`;

    const content = document.createElement("div");
    content.className = "latest-content";
    content.innerHTML = `
        <h2>${heading}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <a href="#" style="color: red; text-decoration: underline;">READ MORE</a>
    `;

    outer.appendChild(content);
    cont.appendChild(outer);
}

latest("New Trend 2025", "news-image1.jpg");
latest("Runway Looks", "news-image2.jpg");
latest("Style Picks", "news-image3.jpg");
function toggleMenu() {
    const nav = document.querySelector('.navlist');
    nav.classList.toggle('hide');
}
