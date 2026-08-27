const grid = document.querySelector("#grid");
let x = 0;
let y = 0;
let z = 0;

while(x < 16)
{
    const col = document.createElement("div");
    col.classList.add("col");
    col.style.height = "60px";
    col.style.width = "60px";
    col.style.backgroundColor = "black";
    col.style.flex = "1";
    grid.appendChild(col);
    x++;
}

let columns = document.querySelectorAll(".col");

while(y < 16)
{
    while(z < 15)
    {
        const line = document.createElement("div");
        line.classList.add("line");
        line.style.height = "60px";
        line.style.width = "60px";
        line.style.backgroundColor = "black";
        line.style.flex = "1";
        columns.item(y).appendChild(line);
        z++;
    }

    z = 0;
    y++;
}

let div = document.querySelectorAll("div");

div.forEach((item) => {
    item.addEventListener("mouseenter", function(e){
        e.target.style.backgroundColor = "blue";
    })
});
