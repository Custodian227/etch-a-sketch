let numOfRows;
let numOfColumns;
let gridGenerated = false;
let blockArray = [];

const generateGridButton = document.querySelector('#generateBtn');
const resetSketchButton = document.querySelector('#resetBtn')
const rowField = document.querySelector('#inputRows');
const columnField = document.querySelector('#inputColumns');
const grid = document.querySelector('#flex-container');

function checkBlockLimit(rows, columns){
    if(rows * columns > 3600){
        return true;
    } else{
        return false;
    }
}

function setRowInput(){
    return numOfRows = +prompt('How many rows should the grid have?');
}

function setColumnInput(){
    return numOfColumns = +prompt('How many columns should the grid have?');
}

function generateGrid(){

    if(!checkBlockLimit(numOfRows, numOfColumns) && (numOfRows != '' || numOfRows != '')){
        
        for(let i = 1; i <= numOfRows * numOfColumns; i++){
            let block = document.createElement('div');
                
            block.style.width = `calc(100% / ${numOfColumns})`;
            block.style.aspectRatio = '1';
            block.style.textAlign = 'center';
            block.style.position = 'relative';
                
            blockArray.push(block);
        }
            
        blockArray.forEach(element => {
            document.querySelector('#flex-container').appendChild(element);
        });
    
        gridGenerated = true;
    }
}

function removeGrid(){
    blockArray.forEach(element => {
        document.querySelector('#flex-container').removeChild(element);
    });

    blockArray = [];
    gridGenerated = false;
}

generateGridButton.addEventListener('click', function(){
    numOfRows = setRowInput();
    numOfColumns = setColumnInput();

    if(checkBlockLimit(numOfRows, numOfColumns)){
        alert('Max number of blocks exceeded. You can only have up to 100 blocks on the grid.')
    }
    if(gridGenerated && !(checkBlockLimit(numOfRows, numOfColumns))){
        removeGrid();
    }
  
    grid.style.border = '1px solid black'
    generateGrid();

    blockArray.forEach(element => {
        element.addEventListener('mouseover', function(){
                element.style.backgroundColor = 'black';
        });
    });
});

resetSketchButton.addEventListener('click', function(){
    if(gridGenerated){
        blockArray.forEach(element => {
            element.style.backgroundColor = 'white';
        });
    }
});





