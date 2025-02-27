let main= document.getElementById("main")
fetch("https://dummyjson.com/products").then(data => data.json()).then((res) => {
    console.log(res);
    res.products.map((item) => {
        main.innerHTML += `<div class="indi_product">
        <img src="${item.images[0]}" alt="" class="img" />
        <div class="title">${item.title}</div>
        <div class="description">${item.description}</div>
    </div>`
    });
    // map is used to select data for each item 
});