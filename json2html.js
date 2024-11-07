export default function json2html(data) {
    // Start building the HTML string for the table
    let html = '<table data-user="sskreddykomma@gmail.com">';
    
    // Add table headers
    html += `
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
            </tr>
        </thead>
    `;

    // Start the table body
    html += "<tbody>";

    // Loop through each item in the data array and add a row
    data.forEach(item => {
        html += `
            <tr>
                <td>${item.Name}</td>
                <td>${item.Age}</td>
                <td>${item.Gender || ""}</td>
            </tr>
        `;
    });

    // Close the table body and table tags
    html += "</tbody></table>";

    // Return the completed HTML string
    return html;
}
