(function() {
    "use strict";
    ///////////////////////////////////////////
    // CONSTRUCT // GLOBALS
    ///////////////////////////////////////////
    const DrWhoModule = function() {
        let tableContainer = document.getElementById('table-container');
        let fullTable = document.createElement('table'),
            tableRow = document.createElement('tr');
        let columnHeaders = [];
        ///////////////////////////////////////////
        // Populating TH of table
        ///////////////////////////////////////////
        function makeHeader(tableData) {
            for (let i = 0; i < tableData.length; i++) {
                for (let header in tableData[i]) {
                    if (tableData[i].hasOwnProperty(header) && columnHeaders.indexOf(header) == -1) {
                        columnHeaders.push(header);
                        //if tableHeader is declared as a global variable, there will be one th that each header is added to
                        let tableHeader = document.createElement('th');
                        tableHeader.appendChild(document.createTextNode(header));
                        tableRow.appendChild(tableHeader);
                    }
                }
                fullTable.appendChild(tableRow);
            }
        }
        ///////////////////////////////////////////
        // Populating TD of table
        ///////////////////////////////////////////
        function fillTable(tableData, table) {
            for (let i = 0; i < tableData.length; ++i) {

                for (let j = 0; j < columnHeaders.length; ++j) {
                    //if tableCell is declared as a global variable, there will be one massive td
                    let tableCell = document.createElement('td');
                    tableCell.appendChild(document.createTextNode(tableData[i][columnHeaders[j]] || ''));
                    tableRow.appendChild(tableCell);
                }
                fullTable.appendChild(tableRow);
            }
            tableContainer.appendChild(fullTable);
        }
        ///////////////////////////////////////////
        // AJAX REQUEST
        ///////////////////////////////////////////
        function getTable() {
            let http = new XMLHttpRequest();
            http.onreadystatechange = function() {
                if (http.readyState === 4 && http.status === 200) {
                    let dataCatcher = JSON.parse(http.response);
                    makeHeader(dataCatcher);
                    fillTable(dataCatcher);
                }
            };
            http.open('GET', 'tabledata.json', true);
            http.send();
        }
        ///////////////////////////////////////////
        // RETURN FOR CONSTRUCT
        ///////////////////////////////////////////
        return {
            getTable: getTable,
        };
    };
    // module CONSTRUCT END
    ///////////////////////////////////////////
    // THE END & run functions
    ///////////////////////////////////////////
    // rename and grab RETURN
    const drWhoApp = DrWhoModule();
    drWhoApp.getTable();
}());
