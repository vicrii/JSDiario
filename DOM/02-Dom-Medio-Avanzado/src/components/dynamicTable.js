const data= [
    {
        name: "Juan",
        edad: 20,
        email: "juan@gmail.com"
    },
    {
        name: "Maria",
        edad: 25,
        email: "maria@gmail.com"
    },  
    {
        name: "Pedro",
        edad: 30,
        email: "pedro@gmail.com"
    }
]

const DynamicTable = (data, headers) => {
    const table = document.createElement("table");
    table.id = "table-data-users";
    table.style.border = "1px solid black";
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    headers.forEach(header => {
        const th = document.createElement("th");
        th.textContent = header;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);
    const tbody = document.createElement("tbody");
    // limpiar la tabla
    tbody.innerHTML = "";
    data.forEach(user => {
        const tr = document.createElement("tr");
        tbody.appendChild(tr);
        Object.values(user).forEach(value => {
            const td = document.createElement("td");
            td.textContent = value;
            tr.appendChild(td);
        });
    });
    table.appendChild(tbody);
    return table;
    

}

export default DynamicTable;