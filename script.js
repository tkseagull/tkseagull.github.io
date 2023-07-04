    <script>
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
                        cell.appendChild(document.createTextNode(excelData[i][j]));
                        row.appendChild(cell);
                    }

                    tbody.appendChild(row);
                }

                table.appendChild(tbody);
            })
            .catch(error => console.log(error));
    </script>
