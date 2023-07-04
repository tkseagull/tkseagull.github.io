 <script>
        var excelData = [
            ["Name", "Age", "Email"],
            ["John Doe", 25, "johndoe@example.com"],
            ["Jane Smith", 30, "janesmith@example.com"],
            // Add more rows as needed
        ];

        function displayTable() {
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
        }

        function calculate() {
            var inputNumber = document.getElementById("inputNumber").value;
            var resultsDiv = document.getElementById("results");

            // Perform calculation or logic with the input number
            // Replace the following line with your actual calculation or logic
            var result = inputNumber * 2;

            resultsDiv.textContent = "Result: " + result;
        }

        displayTable();
    </script>

