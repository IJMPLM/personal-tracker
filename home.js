const rows = 11;
const columns = 8;

function schedTable(rows, columns){
    const table = document.createElement('table');
    table.id ='SERschedule';
    for (let i = 0; i < rows; i++) {
        const row = document.createElement('tr');
      for (let j = 0; j < columns; j++) {
         const cell = document.createElement('td');
         cell.id = `cell-${i}-${j}`;
         row.appendChild(cell);
        }
        table.appendChild(row);
    }
    document.getElementById('schedule').appendChild(table);
}

function tableHeading(){
    const dayNames =["Time","SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];
    for (let i=0; i<dayNames.length;i++){
        const specificCell = document.getElementById(`cell-0-${i}`);
        if (i==0){
            specificCell.textContent = dayNames[i];
        } else {
            specificCell.textContent = dayNames[i].substring(0,3);
        }
    }

    
}

schedTable(rows,columns);
tableHeading();