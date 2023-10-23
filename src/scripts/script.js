function distributeWork() {
    const workdaysInMonth = parseInt(document.getElementById("workdays").value);
    const supervisors = parseInt(document.getElementById("supervisors").value);
    const result = distributeWorkDays(workdaysInMonth, supervisors);
    document.getElementById("result").innerHTML = result;
}

function distributeWorkDays(workdays, supervisors) {
    const daysPerSupervisor = Math.floor(workdays / supervisors);
    const extraDays = workdays % supervisors;

    const distribution = Array.from({ length: supervisors }, (_, index) => {
        if (index < extraDays) {
            return daysPerSupervisor + 1;
        }
        return daysPerSupervisor;
    });

    const groupedDistribution = distribution.reduce((acc, days) => {
        if (!acc[days]) {
            acc[days] = 0;
        }
        acc[days]++;
        return acc;
    }, {});

    const output = Object.entries(groupedDistribution)
        .map(([days, count]) => `${count} Supervisor${count > 1 ? 's' : ''} work ${days} day${days > 1 ? 's' : ''}`)
        .join(', ');

    return output;
}