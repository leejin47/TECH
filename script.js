function wrapText(str, maxWidth) {
    if (str.length <= maxWidth) {
        return str;
    }
    const words = str.split(' ');
    const lines = [];
    let currentLine = '';
    for (const word of words) {
        if ((currentLine + word).length <= maxWidth) {
            currentLine += word + ' ';
        } else {
            lines.push(currentLine.trim());
            currentLine = word + ' ';
        }
    }
    lines.push(currentLine.trim());
    return lines;
}

const tooltipTitleCallback = {
    plugins: {
        tooltip: {
            callbacks: {
                title: function(tooltipItems) {
                    const item = tooltipItems[0];
                    let label = item.chart.data.labels[item.dataIndex];
                    if (Array.isArray(label)) {
                        return label.join(' ');
                    } else {
                        return label;
                    }
                }
            }
        }
    }
};

const ipTypesCtx = document.getElementById('ipTypesChart').getContext('2d');
new Chart(ipTypesCtx, {
    type: 'bar',
    data: {
        labels: [
            wrapText('특허권 (기술적 사상 보호)', 16),
            wrapText('실용신안권 (소발명 보호)', 16),
            wrapText('디자인권 (물품 외관 보호)', 16),
            wrapText('상표권 (브랜드 보호)', 16)
        ],
        datasets: [{
            label: '보호 대상',
            data: [100, 80, 90, 95],
            backgroundColor: [
                'rgba(236, 72, 153, 0.6)',
                'rgba(245, 158, 11, 0.6)',
                'rgba(59, 130, 246, 0.6)',
                'rgba(16, 185, 129, 0.6)'
            ],
            borderColor: [
                'rgba(236, 72, 153, 1)',
                'rgba(245, 158, 11, 1)',
                'rgba(59, 130, 246, 1)',
                'rgba(16, 185, 129, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        ...tooltipTitleCallback,
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
        plugins: {
            ...tooltipTitleCallback.plugins,
            legend: {
                display: false
            }
        },
        scales: {
            x: {
                beginAtZero: true,
                ticks: { display: false }
            }
        }
    }
});

const ipImportanceCtx = document.getElementById('ipImportanceChart').getContext('2d');
new Chart(ipImportanceCtx, {
    type: 'doughnut',
    data: {
        labels: ['창작 의욕 고취', '모방 방지', '상업적 활용', '기술 발전 기여'],
        datasets: [{
            label: '지식재산권의 중요성',
            data: [30, 25, 25, 20],
            backgroundColor: [
                'rgba(236, 72, 153, 0.7)',
                'rgba(245, 158, 11, 0.7)',
                'rgba(59, 130, 246, 0.7)',
                'rgba(16, 185, 129, 0.7)'
            ],
            hoverOffset: 4
        }]
    },
    options: {
        ...tooltipTitleCallback,
        responsive: true,
        maintainAspectRatio: false,
    }
});

const inventionElementsCtx = document.getElementById('inventionElementsChart').getContext('2d');
new Chart(inventionElementsCtx, {
    type: 'radar',
    data: {
        labels: ['재료', '작동 원리', '사용자 편의', '차별성', '디자인'],
        datasets: [{
            label: '발명 아이디어 구체화',
            data: [8, 9, 7, 9, 6],
            fill: true,
            backgroundColor: 'rgba(16, 185, 129, 0.2)',
            borderColor: 'rgb(16, 185, 129)',
            pointBackgroundColor: 'rgb(16, 185, 129)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(16, 185, 129)'
        }]
    },
    options: {
        ...tooltipTitleCallback,
        responsive: true,
        maintainAspectRatio: false,
        elements: {
            line: {
                borderWidth: 3
            }
        }
    }
});