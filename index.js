let row = 0; 
let col = 0;
let color = false;
let currentColor = "White";
let table = document.getElementById("table")


function createTableBlock()
{
    let block = document.createElement("td");
    block.classList.add("grid-block")
    block.classList.add("empty")
    block.addEventListener("click", event =>{
        block.style.backgroundColor = currentColor
        block.classList.remove("empty")
    })

    block.addEventListener("mousedown", event =>{
        color = true
    })

    block.addEventListener("mousemove",event =>{
        if(color)
        {
            block.style.backgroundColor = currentColor
            block.classList.remove("empty")
        }
    })

    block.addEventListener("moveup",event =>{
        if(color)
        {
           color = false
        }
    })
    return block
}

function addRow()
{
    table = document.getElementById("table");
    let newRow = document.createElement("tr")
    newRow.classList.add("grid-row")
    table.appendChild(newRow)
    for (let i = 0; i < col; i++)
    {
        newRow.appendChild(createTableBlock())
    }
    row++
}

function addCol()
{
    table = document.getElementById("table");
    let newCol = document.getElementsByClassName("grid-row")
    for (let i = 0; i < newCol.length; i++)
    {
        newCol[i].appendChild(createTableBlock());
    }
    col++
}

function delRow()
{
   if(row ===1)
   {
    for(let i = rows[0].table.length-1; i >=0 ; i--)
    {
        delCol()
    }
   }
   else
   {
       row = row -1
       table = document.getElementById("table");
       let end = table.rows.length-1
       table.deleteRow(end)
   }
}

function delCol()
{
    if (col === 1){
        for (let i = row.length-1; i >= 0; i--){
        delRow();
        }
     }
     else {
     col = col - 1;
     table = document.getElementById("table");
     let end = table.rows[0].cells.length-1;
         for(let i = 0; i < table.rows.length; i++){
            table.rows[i].deleteCell(end);
         }
     }
}


function setColor()
{
    currentColor = color
}

function changeColor(color)
{
    block.style.backgroundColor = currentColor;
    block.classList.remove("empty");
}

function getBlocks()
{
    table = document.getElementById("table");
    let rows = table.getElementsByClassName("grid-row")
    let gridArray = []

    for (let i = 0; i < rows.length; i++)
    {
        let blocks = rows[x].getElementsByClassName("grid-cell")
        for (let j = 0; j < cells.length; j++)
        {
            
            gridArray.push(blocks)
        }
    }
    return gridArray
}

function fill()
{
    let blocks = getBlocks();
    for (let x = 0; x < blocks.length; x++) {
        changeColor(blocks[x]);
    }
}

function clear()
{
    cells = getBlocks();
    for (let y = 0; y < cells.length; y++) {
        cells[y].style.backgroundColor = "white";
        cells[y].classList.add("empty");
    }
}

function fillUncolored()
{
    let blocks = getBlocks();
    for (let x = 0; x < blocks.length; x++) {
        if (blocks[x].classList.contains("empty")){
            changeColor(blocks[x]);
        }
    }
}