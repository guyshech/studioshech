function showMobileSchedule() {
        var dayIndex = document.getElementById('day-select').value; // בחירת היום (1-7)
        var output = document.getElementById('schedule-output');
        output.innerHTML = ""; // ניקוי תצוגה קודמת

        if (!dayIndex) {
            output.innerHTML = "בחר יום כדי לראות את מערכת השעות.";
            return;
        }

        // מציאת הטבלה מהאתר
        var table = document.getElementById('schedule-table');
        var rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');

        // יצירת טבלה חדשה למובייל
        var mobileTable = `<table class="table table-bordered text-center">
                            <thead>
                                <tr>
                                    <th>שעות</th>
                                    <th>פילאטיס מכשירים</th>
                                    <th>יוגה</th>
                                </tr>
                            </thead>
                            <tbody>`;

        // מעבר על כל השורות (כל טווח השעות)
        for (var i = 0; i < rows.length; i++) {
            var cells = rows[i].getElementsByTagName('td');

            // משיכת התאים הרלוונטיים (שעות, פילאטיס ויוגה)
            var timeCell = cells[0].innerText;
            var pilatesCell = cells[(dayIndex * 2) - 1].innerText; // עמודת פילאטיס
            var yogaCell = cells[dayIndex * 2].innerText; // עמודת יוגה
 mobileTable += `
                <tr>
                    <td>${timeCell}</td>
                    <td>${pilatesCell}</td>
                    <td>${yogaCell}</td>
                </tr>`;
        }

        mobileTable += `</tbody></table>`;
        output.innerHTML = mobileTable; // הצגת הטבלה במובייל
    }

    // מדיה קוורי: הצגה מותאמת לפי גודל המסך
    function handleResize() {
        if (window.innerWidth <= 768) {
            document.querySelector('.desktop-view').style.display = 'none';
            document.querySelector('.mobile-view').style.display = 'block';
        } else {
            document.querySelector('.desktop-view').style.display = 'block';
            document.querySelector('.mobile-view').style.display = 'none';
        }
    }

    window.onload = handleResize;
    window.onresize = handleResize;