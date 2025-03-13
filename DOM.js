
const tabledata = [
    {Car: "Chevorlet", Top: "120mph", Price: "$10,000"},
    {Car: "Pontiac", Top: "140mph", Price: "$20,000"}
];

const table = document.createElement('table');
table.setAttribute('border', '1'); 
const row1 = document.createElement('tr');


Object.keys(tabledata[0]).forEach(key => {
    const th = document.createElement('th');
    th.appendChild(document.createTextNode(key));
    row1.appendChild(th);
});

table.appendChild(row1);


tabledata.forEach(item => {
    const rows = document.createElement('tr');
    Object.values(item).forEach(value => {
        const td = document.createElement('td');
        td.appendChild(document.createTextNode(value));
        rows.appendChild(td);
    });
    table.appendChild(rows);
});

document.body.appendChild(table);
table.setAttribute("style", "background-color:red;");