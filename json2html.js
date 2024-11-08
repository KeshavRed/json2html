<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JSON to HTML Table</title>
</head>
<body>
    <div id="table-container"></div>

    <script type="module">
        import json2html from './json2html.js';

        // Sample data
        const data = [
            { Name: "Alice", Age: 25 },
            { Name: "Bob", Age: 30 },
            { Name: "Charlie", Age: 35, Gender: "M" }
        ];

        // Generate HTML table and insert it into the page
        document.getElementById('table-container').innerHTML = json2html(data);
    </script>
</body>
</html>
