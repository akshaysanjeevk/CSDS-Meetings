fetch("schedule.json")
    .then(response => response.json())
    .then(data => {

        const tableBody = document.querySelector(
            "#schedule-table tbody"
        );

        data.meetings.forEach(meeting => {

            const row = document.createElement("tr");

            const dateCell = document.createElement("td");
            dateCell.textContent = meeting.date;

            const speakerCell = document.createElement("td");
            speakerCell.textContent = meeting.speaker;

            row.appendChild(dateCell);
            row.appendChild(speakerCell);

            tableBody.appendChild(row);
        });

    })
    .catch(error => {
        console.error(
            "Error loading schedule:",
            error
        );
    });