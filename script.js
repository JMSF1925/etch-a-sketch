const grid = document.querySelector("#grid");
let x = 0;
let y = 0;
let z = 0;

while(x < 16)
{
    const col = document.createElement("div");
    col.classList.add("col")
    col.textContent = "DIV";
    col.style.color = "white";
    col.style.backgroundColor = "black";
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
        line.textContent = "DIV";
        line.style.color = "white";
        line.style.backgroundColor = "black";
        columns.item(y).appendChild(line);
        z++;
    }

    z = 0;
    y++;
}