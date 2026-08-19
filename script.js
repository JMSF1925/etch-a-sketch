const grid = document.querySelector("#grid");
let x = 0;
let y = 0;

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

/*
while(y < 15)
{
    const line = document.createElement("div");
    let columns = document.querySelectorAll(".col");
    line.classList.add("line")
    line.textContent = "DIV";
    line.style.color = "white";
    line.style.backgroundColor = "black";
    columns.forEach((item) => {
        item.appendChild(line);
    });
    y++;
}*/