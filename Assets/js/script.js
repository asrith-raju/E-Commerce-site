let bestsaledata, newproductsdata;
let getData = async () => {
    bestsaledata = await fetch("Assets/best-sale.json")
    newproductsdata = await fetch("Assets/new-products.json")
    bestsaledata = await bestsaledata.json()
    newproductsdata = await newproductsdata.json()

}
function createcard(classname, upperbtn, image,name, brand, price, index) {
    let sec = document.querySelector(classname)
    const card = document.createElement("div")
    card.className = "card1 flex"
    card.innerHTML =
        ` ${upperbtn ? `<button class="btn newbtn">${upperbtn}</button>` : ''}
                <img src=${image} alt="" class="card-image">
                <div class="card-content">

                <p>${name}</p>
                <p>${brand}</p>
                    <p class="price">${price}</p>
                    <button class="endbtn btn hide">ADD TO CART</button>
                </div>`;

    sec.appendChild(card)
    const endBtn = card.querySelector(".endbtn")
    card.addEventListener("mouseenter", () => {
        endBtn.classList.remove("hide")
    })
    card.addEventListener("mouseleave", () => {
        endBtn.classList.add("hide")
    })
    endBtn.addEventListener("click", () => {
    const product = { image, name, brand, price };
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const alreadyexists = cart.some(item => item.name == product.name && item.brand == product.brand);
    if(alreadyexists){
        return ;
    }
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
});
}

function offers(iconname, offname, ptag) {
    let offer = document.querySelector(".offers")
    const subdiv = document.createElement("div")
    subdiv.className = "offdiv"
    subdiv.innerHTML = `<a href="#" class="icon icon-active"><i class="fa-solid fa-${iconname}"></i></a>
    <h3>${offname}</h3>
    <p>${ptag}</p>`
    offer.appendChild(subdiv)
}

function latest(heading, imagename) {
    const cont = document.querySelector(".newlatest");

    const outer = document.createElement("div");
    outer.className = "outerdiv";
    outer.style.backgroundImage = `url(Assets/images/${imagename})`;

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


function toggleMenu() {
    const nav = document.querySelector('.navlist');
    nav.classList.toggle('hide');
}
const list = document.querySelector(".navlist")
const hamburg = document.querySelector(".fa-bars")
hamburg.addEventListener("click", () => {
    hamburg.classList.toggle("fa-x")
    list.classList.toggle("navlist-active")
})
let search = document.querySelector('.fa-magnifying-glass')
let search1 = document.getElementById("search")
variable = true;
search.addEventListener("click", () => {
    if (variable) {
        search1.classList.remove("hide")
        variable = false
    }
    else {
        search1.classList.add("hide")
        variable = true
    }
})



 window.addEventListener("DOMContentLoaded", async () =>{
    await getData()

    newproductsdata.forEach(e => {
        createcard(".new", e.state, e.image, e.name, e.brand, e.price)
    });
    bestsaledata.forEach(e => {
        createcard(".bestsale",e.state, e.image, e.name, e.brand, e.price)
    });
    offers("truck", "Free Shipping", "Free Shipping On Order Over $50")
    offers("money-bill-1", "Cash On Deliver", "The Internet Trend to repeat")
    offers("gift", "Gift For All", "Receive Gift When Subscribe")
    offers("clock", "Opening All Week", "6.00 am-17.00 pm")

    latest("New Trend 2025", "news-image1.jpg");
    latest("Runway Looks", "news-image2.jpg");
    latest("Style Picks", "news-image3.jpg");
})

