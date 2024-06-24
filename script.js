const teams = [
    { name: "Team A", tasks: [false, false, false, false, false, false, false, false, false, false, false, false] },
    { name: "Team B", tasks: [false, false, false, false, false, false, false, false, false, false, false, false] },
    { name: "Team C", tasks: [false, false, false, false, false, false, false, false, false, false, false, false] },
];

function updateScoreboard() {
    const tbody = document.getElementById('scoreboard-body');
    tbody.innerHTML = '';

    teams.forEach(team => {
        const tr = document.createElement('tr');
        const teamNameTd = document.createElement('td');
        teamNameTd.textContent = team.name;
        tr.appendChild(teamNameTd);

        let completedTasks = 0;

        team.tasks.forEach(task => {
            const taskTd = document.createElement('td');
            taskTd.textContent = task ? '✔️' : '❌';
            taskTd.style.color = task ? 'green' : 'red';
            tr.appendChild(taskTd);

            if (task) completedTasks++;
        });

        const totalCompletedTd = document.createElement('td');
        totalCompletedTd.textContent = completedTasks;
        tr.appendChild(totalCompletedTd);

        tbody.appendChild(tr);
    });
}

document.addEventListener('DOMContentLoaded', updateScoreboard);


