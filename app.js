(function() {
    "use strict";
    ///////////////////////////////////////////
    // CONSTRUCT // GLOBALS
    ///////////////////////////////////////////
    const DrWhoModule = function() {
        let tableContainer = document.getElementById('table-container');
        let fullTable = document.createElement('table'),
            tableHeader = document.createElement('th'),
            tableRow = document.createElement('tr'),
            tableCell = document.createElement('td');
        let columnHeaders = [];

        function makeTable(tableData) {
            makeHeader(tableData);
            fillTable(tableData);
        }
        ///////////////////////////////////////////
        // Populating TH of table
        ///////////////////////////////////////////
        function makeHeader(tableData) {
            for (let i = 0; i < tableData.length; i++) {
                for (let header in tableData[i]) {
                    if (tableData[i].hasOwnProperty(header) && columnHeaders.indexOf(header) == -1) {
                        columnHeaders.push(header);
                        tableHeader.appendChild(document.createTextNode(header));
                        tableRow.appendChild(tableHeader);
                    }
                }
                fullTable.appendChild(tableRow);
                return columnHeaders;
            }
        }
        ///////////////////////////////////////////
        // Populating TD of table
        ///////////////////////////////////////////
        function fillTable(tableData, table) {
            for (let i = 0; i < tableData.length; ++i) {

                for (let j = 0; j < columnHeaders.length; ++j) {

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
                    makeTable(dataCatcher);
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
