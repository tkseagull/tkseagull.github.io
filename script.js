        fetch('conversions.csv')
            .then(response => response.text())
            .then(data => {
                var rows = data.split('\n');
                var excelData = [];

                for (var i = 0; i < rows.length; i++) {
                    excelData.push(rows[i].split(','));
                }

                var table = document.getElementById("excelTable");
                var thead = document.createElement("thead");
                var headerRow = document.createElement("tr");

                for (var i = 0; i < excelData[0].length; i++) {
                    var th = document.createElement("th");
                    th.appendChild(document.createTextNode(excelData[0][i]));
                    headerRow.appendChild(th);
                }

                thead.appendChild(headerRow);
                table.appendChild(thead);

                var tbody = document.createElement("tbody");

                for (var i = 1; i < excelData.length; i++) {
                    var row = document.createElement("tr");

                    for (var j = 0; j < excelData[i].length; j++) {
                        var cell = document.createElement(i === 0 ? "th" : "td");
                        var cellId = 'cell-' + i + '-' + j;

                        if (cellId === 'cell-4-1' || cellId === 'cell-4-2' || cellId === 'cell-4-3' || cellId === 'cell-4-4' || cellId === 'cell-4-5') {
                            var input = document.createElement("input");
                            input.setAttribute("type", "text");
                            input.setAttribute("value", excelData[i][j]);
                            input.setAttribute("oninput", "updateResult(this.value, this.parentElement.id)");
                            cell.appendChild(input);
                        } else if (cellId === 'cell-7-1') {
                            var result = document.createElement("span");
                            result.setAttribute("id", "result");
                            cell.appendChild(result);
                        } else {
                            cell.appendChild(document.createTextNode(excelData[i][j]));
                        }

                        cell.setAttribute('id', cellId);
                        row.appendChild(cell);
                    }

                    tbody.appendChild(row);
                }

                table.appendChild(tbody);
            })
            .catch(error => console.log(error));

        function updateResult(value, cellId) {
            var cellIdParts = cellId.split('-');
            var row = parseInt(cellIdParts[1]);
            var column = parseInt(cellIdParts[2]);
            var aboveCellValue1 = parseInt(document.getElementById('cell-' + (row - 2) + '-' + column).textContent);
            var aboveCellValue2 = parseInt(document.getElementById('cell-' + (row - 1) + '-' + column).textContent);
            var aboveCellValue3 = parseInt(document.getElementById('cell-' + (row - 3) + '-' + column).textContent);
            var result = aboveCellValue1 * aboveCellValue2 * aboveCellValue3 * value;
            document.getElementById('result').textContent = result;
        }
