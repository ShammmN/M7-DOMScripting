//creates an array of the data for the table
const tabledata = [
    {Car: "Chevorlet", Top: "120mph", Price: "$10,000"},
    {Car: "Pontiac", Top: "140mph", Price: "$20,000"}
]

const table = document.createElement('table') //creates a table element in the document
table.setAttribute('border', '2') //adds a border to the table by the size of 2
const row1 = document.createElement('tr') //creates a table row element


Object.keys(tabledata[0]).forEach(key => { //gets the keys of the table data 
    const th = document.createElement('th') //created a table header element 
    th.appendChild(document.createTextNode(key)) //adds the keys to the table header element
    row1.appendChild(th) //add the table header element to the first row in the table 
})

table.appendChild(row1) //adds the first row to the table 


tabledata.forEach(item => { //gets each item of the array tabledata 
    const rows = document.createElement('tr') //creates an element for table row called rows
    Object.values(item).forEach(value => { //gets each items value 
        const td = document.createElement('td') //creates an element for the table data cells
        td.appendChild(document.createTextNode(value)) //for every item it add the value as a text node into a table data cell each
        rows.appendChild(td) //adds table data cells to the rows of the table
    })
    table.appendChild(rows) //adds the rows to the table 
})
document.body.appendChild(table) //add the table to the body of the html to diplay it
table.setAttribute("style", "background-color:pink;") //changes the background color to pink
table.style.width = '100%' //changes the size of the table through the width to take up 100% width of tab
table.style.color = '#680e10' //changes the text color to a dark red
