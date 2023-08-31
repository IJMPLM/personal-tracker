const rows = 25;
const columns = 8;
const startingTime = 4;

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

function classifyRows(rows){
    for (let i = 1; i < rows; i++) {
            const cell = document.getElementById(`cell-${i}-0`);
            cell.classList.add('timeStub');
        }
}

function classifyHeaders(columns){
    for (let i = 0; i < columns; i++) {
        const cell = document.getElementById(`cell-0-${i}`);
        cell.classList.add('heading');
    }
}

function time(startingTime){
    for(let i=1; i<rows; i++){
        const specificCell = document.getElementById(`cell-${i}-0`);
        const timeDisplay = startingTime + i -1;
         if(timeDisplay > 12){
            if(timeDisplay > 24){
                specificCell.textContent = `${timeDisplay-24}:00AM`;
            } else{
                if (timeDisplay == 24){
                    specificCell.textContent = `${timeDisplay-12}:00MN`
                } else
                specificCell.textContent = `${timeDisplay-12}:00PM`;
            } 
        } else {
            if(timeDisplay == 12){
                specificCell.textContent = `${timeDisplay}:00NN`;
            } else
            specificCell.textContent = `${timeDisplay}:00AM`;
        }
    }
}



schedTable(rows,columns);
tableHeading();
classifyRows(rows);
classifyHeaders(columns);
time(startingTime);