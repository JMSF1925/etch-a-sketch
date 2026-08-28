const grid = document.querySelector("#grid");
const button = document.querySelector("button");
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

let lines = document.querySelectorAll(".line");

columns.forEach((item) => {
    item.addEventListener("mouseenter", function(e){
        e.target.style.backgroundColor = "blue";
    })
});

lines.forEach((item) => {
    item.addEventListener("mouseenter", function(e){
        e.target.style.backgroundColor = "blue";
    })
});


button.addEventListener("click", () => {
    x = 0;
    y = 0;
    z = 0;
    let squares = prompt("How many squares do you want in the grid (per side)?");
    let numericSquares = Number(squares);
    let squareSize = Math.floor(960 / numericSquares);
    let strSize = squareSize.toString();
    
    if(Number.isInteger(numericSquares) && numericSquares <= 100)
    {
        columns.forEach((item) => {
            grid.removeChild(item);
        })

        while(x < numericSquares)
        {
            const col = document.createElement("div");
            col.classList.add("col");
            col.style.height = strSize + "px";
            col.style.width = strSize + "px";
            col.style.backgroundColor = "black";
            grid.appendChild(col);
            x++;
        }

        columns = document.querySelectorAll(".col");

        while(y < numericSquares)
        {
            while(z < numericSquares - 1)
            {
                const line = document.createElement("div");
                line.classList.add("line");
                line.style.height = strSize + "px";
                line.style.width = strSize + "px";
                line.style.backgroundColor = "black";
                columns.item(y).appendChild(line);
                z++;
            }   

            z = 0;
            y++;
        }

        lines = document.querySelectorAll(".line");
        columns = document.querySelectorAll(".col");

        columns.forEach((item) => {
            item.addEventListener("mouseenter", function(e){
                e.target.style.backgroundColor = "blue";
            })
        });

        lines.forEach((item) => {
            item.addEventListener("mouseenter", function(e){
                e.target.style.backgroundColor = "blue";
            })
        });

    }
    else if(Number.isInteger(numericSquares) && numericSquares > 100)
    {
        alert("Too high! The limit is 100!");
    }
    else
    {
        alert("It has to be an interger!")
    }
})
