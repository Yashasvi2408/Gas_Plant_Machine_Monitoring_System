// Machine configurations with parameters and thresholds
const MACHINE_CONFIGS = {
    compressor: {
        name: 'Compressor',
        description: 'High-pressure gas compression unit for processing natural gas',
        parameters: [
            {
                name: 'Temperature',
                unit: '°C',
                min: 20,
                max: 150,
                warningThreshold: 120,
                dangerThreshold: 140,
                tooltip: 'Operating temperature should be between 20-150°C. Higher temperatures may indicate cooling system issues.'
            },
            {
                name: 'Pressure',
                unit: 'bar',
                min: 0,
                max: 50,
                warningThreshold: 40,
                dangerThreshold: 45,
                tooltip: 'Pressure should be maintained between 0-50 bar. Excessive pressure can damage seals and gaskets.'
            },
            {
                name: 'Flow Rate',
                unit: 'm³/h',
                min: 0,
                max: 1000,
                warningThreshold: 800,
                dangerThreshold: 950,
                tooltip: 'Flow rate range: 0-1000 m³/h. Monitor for flow restrictions or blockages.'
            },
            {
                name: 'RPM',
                unit: 'rpm',
                min: 0,
                max: 3600,
                warningThreshold: 3200,
                dangerThreshold: 3500,
                tooltip: 'Rotation speed should not exceed 3600 rpm. High RPM may cause bearing wear.'
            },
            {
                name: 'Vibration Level',
                unit: 'mm/s',
                min: 0,
                max: 10,
                warningThreshold: 7,
                dangerThreshold: 9,
                tooltip: 'Vibration level should be below 10 mm/s. High vibration indicates mechanical issues.'
            }
        ]
    },
    gasTurbine: {
        name: 'Gas Turbine',
        description: 'Power generation turbine for converting gas energy to electrical power',
        parameters: [
            {
                name: 'Temperature',
                unit: '°C',
                min: 200,
                max: 800,
                warningThreshold: 700,
                dangerThreshold: 750,
                tooltip: 'Operating temperature range: 200-800°C. Monitor combustion efficiency and cooling systems.'
            },
            {
                name: 'Pressure',
                unit: 'bar',
                min: 0,
                max: 30,
                warningThreshold: 25,
                dangerThreshold: 28,
                tooltip: 'Pressure should be maintained between 0-30 bar. Check for compressor surge conditions.'
            },
            {
                name: 'Fuel Rate',
                unit: 'kg/h',
                min: 0,
                max: 500,
                warningThreshold: 400,
                dangerThreshold: 450,
                tooltip: 'Fuel consumption rate: 0-500 kg/h. Monitor for fuel system efficiency.'
            },
            {
                name: 'Output Power',
                unit: 'MW',
                min: 0,
                max: 100,
                warningThreshold: 90,
                dangerThreshold: 95,
                tooltip: 'Power output should not exceed 100 MW. Monitor generator load and grid conditions.'
            }
        ]
    },
    gasAnalyzer: {
        name: 'Gas Analyzer',
        description: 'Analytical equipment for monitoring gas composition and quality',
        parameters: [
            {
                name: 'Gas Purity',
                unit: '%',
                min: 90,
                max: 100,
                warningThreshold: 95,
                dangerThreshold: 92,
                tooltip: 'Gas purity should be above 90%. Low purity indicates contamination issues.'
            },
            {
                name: 'Moisture Level',
                unit: 'ppm',
                min: 0,
                max: 100,
                warningThreshold: 80,
                dangerThreshold: 90,
                tooltip: 'Moisture content should be below 100 ppm. High moisture can cause corrosion.'
            },
            {
                name: 'Operating Temp',
                unit: '°C',
                min: 15,
                max: 60,
                warningThreshold: 50,
                dangerThreshold: 55,
                tooltip: 'Operating temperature range: 15-60°C. Check analyzer cooling system.'
            },
            {
                name: 'Sampling Rate',
                unit: 'L/min',
                min: 0,
                max: 10,
                warningThreshold: 8,
                dangerThreshold: 9,
                tooltip: 'Sampling rate should be between 0-10 L/min. Check sample line for blockages.'
            }
        ]
    },
    cryogenicUnit: {
        name: 'Cryogenic Unit',
        description: 'Low-temperature processing unit for gas liquefaction and separation',
        parameters: [
            {
                name: 'Inlet Temp',
                unit: '°C',
                min: -200,
                max: 50,
                warningThreshold: 40,
                dangerThreshold: 45,
                tooltip: 'Inlet temperature range: -200 to 50°C. Monitor pre-cooling system performance.'
            },
            {
                name: 'Outlet Temp',
                unit: '°C',
                min: -200,
                max: -100,
                warningThreshold: -120,
                dangerThreshold: -110,
                tooltip: 'Outlet temperature should be below -100°C. Check refrigeration system efficiency.'
            },
            {
                name: 'Pressure Drop',
                unit: 'bar',
                min: 0,
                max: 5,
                warningThreshold: 4,
                dangerThreshold: 4.5,
                tooltip: 'Pressure drop should be below 5 bar. High pressure drop indicates system restrictions.'
            },
            {
                name: 'Cooling Rate',
                unit: 'kW',
                min: 0,
                max: 1000,
                warningThreshold: 800,
                dangerThreshold: 900,
                tooltip: 'Cooling capacity: 0-1000 kW. Monitor refrigeration compressor performance.'
            }
        ]
    },
    rotatingEquipment: {
        name: 'Rotating Equipment',
        description: 'Motors, pumps, and rotating machinery for plant operations',
        parameters: [
            {
                name: 'RPM',
                unit: 'rpm',
                min: 0,
                max: 5000,
                warningThreshold: 4500,
                dangerThreshold: 4800,
                tooltip: 'Rotation speed should not exceed 5000 rpm. Check for mechanical imbalance.'
            },
            {
                name: 'Power',
                unit: 'kW',
                min: 0,
                max: 500,
                warningThreshold: 400,
                dangerThreshold: 450,
                tooltip: 'Power consumption: 0-500 kW. Monitor motor efficiency and load conditions.'
            },
            {
                name: 'Vibration',
                unit: 'mm/s',
                min: 0,
                max: 15,
                warningThreshold: 12,
                dangerThreshold: 14,
                tooltip: 'Vibration should be below 15 mm/s. High vibration indicates bearing or alignment issues.'
            },
            {
                name: 'Bearing Temp',
                unit: '°C',
                min: 20,
                max: 120,
                warningThreshold: 100,
                dangerThreshold: 110,
                tooltip: 'Bearing temperature should be below 120°C. High temperature indicates lubrication issues.'
            }
        ]
    },
    accelerator: {
        name: 'Accelerator',
        description: 'Particle acceleration equipment for advanced gas processing applications',
        parameters: [
            {
                name: 'Beam Energy',
                unit: 'MeV',
                min: 0,
                max: 1000,
                warningThreshold: 900,
                dangerThreshold: 950,
                tooltip: 'Beam energy should not exceed 1000 MeV. Monitor beam stability and focusing systems.'
            },
            {
                name: 'Beam Current',
                unit: 'mA',
                min: 0,
                max: 100,
                warningThreshold: 85,
                dangerThreshold: 95,
                tooltip: 'Beam current range: 0-100 mA. High current may cause target heating issues.'
            },
            {
                name: 'RF Power',
                unit: 'kW',
                min: 0,
                max: 500,
                warningThreshold: 450,
                dangerThreshold: 480,
                tooltip: 'RF power should be maintained below 500 kW. Monitor klystron performance.'
            },
            {
                name: 'Vacuum Level',
                unit: 'Torr',
                min: 1e-9,
                max: 1e-6,
                warningThreshold: 5e-7,
                dangerThreshold: 8e-7,
                tooltip: 'Vacuum level should be below 1e-6 Torr. Poor vacuum affects beam quality.'
            },
            {
                name: 'Magnet Current',
                unit: 'A',
                min: 0,
                max: 1000,
                warningThreshold: 900,
                dangerThreshold: 950,
                tooltip: 'Magnet current should not exceed 1000 A. Monitor magnet cooling and stability.'
            }
        ]
    }
};

// Global variables
let currentChart = null;
let currentMachine = null;
let currentData = {};
let isDarkMode = false;

// DOM elements
const machineSelect = document.getElementById('machineSelect');
const parametersSection = document.getElementById('parametersSection');
const parametersContainer = document.getElementById('parametersContainer');
const parametersForm = document.getElementById('parametersForm');
const welcomeSection = document.getElementById('welcomeSection');
const resultsSection = document.getElementById('resultsSection');
const exportSection = document.getElementById('exportSection');
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const statusDot = document.getElementById('statusDot');
const statusText = document.getElementById('statusText');
const tooltip = document.getElementById('tooltip');
const analysisTitle = document.getElementById('analysisTitle');
const parametersGrid = document.getElementById('parametersGrid');
const alertsContainer = document.getElementById('alertsContainer');
const downloadReport = document.getElementById('downloadReport');

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    setupEventListeners();
    updateSystemStatus('ready');
});

// Theme management
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    isDarkMode = savedTheme === 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon();
}

function toggleTheme() {
    isDarkMode = !isDarkMode;
    const newTheme = isDarkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon();
}

function updateThemeIcon() {
    themeIcon.textContent = isDarkMode ? '☀️' : '🌙';
}

// Event listeners setup
function setupEventListeners() {
    machineSelect.addEventListener('change', handleMachineSelection);
    parametersForm.addEventListener('submit', handleFormSubmission);
    themeToggle.addEventListener('click', toggleTheme);
    downloadReport.addEventListener('click', generatePDFReport);
    
    // Tooltip functionality
    document.addEventListener('mouseover', handleTooltip);
    document.addEventListener('mouseout', hideTooltip);
}

// Machine selection handler
function handleMachineSelection(event) {
    const selectedMachine = event.target.value;
    
    if (!selectedMachine) {
        hideAllSections();
        showWelcomeSection();
        updateSystemStatus('ready');
        return;
    }
    
    currentMachine = selectedMachine;
    const machineConfig = MACHINE_CONFIGS[selectedMachine];
    
    if (machineConfig) {
        generateParameterInputs(machineConfig);
        showParametersSection();
        hideWelcomeSection();
        updateSystemStatus('configured', machineConfig.name);
    }
}

// Generate dynamic parameter inputs
function generateParameterInputs(machineConfig) {
    parametersContainer.innerHTML = '';
    
    machineConfig.parameters.forEach((param, index) => {
        const parameterGroup = document.createElement('div');
        parameterGroup.className = 'parameter-group';
        
        parameterGroup.innerHTML = `
            <label for="param_${index}">
                ${param.name} (${param.unit})
            </label>
            <input 
                type="number" 
                id="param_${index}" 
                name="${param.name}" 
                class="parameter-input" 
                placeholder="Enter ${param.name.toLowerCase()}"
                min="${param.min}"
                max="${param.max}"
                step="0.1"
                data-tooltip="${param.tooltip}"
                required
            />
        `;
        
        parametersContainer.appendChild(parameterGroup);
    });
}

// Form submission handler
function handleFormSubmission(event) {
    event.preventDefault();
    
    if (!currentMachine) return;
    
    const machineConfig = MACHINE_CONFIGS[currentMachine];
    const formData = new FormData(parametersForm);
    
    // Collect parameter values
    currentData = {};
    const parameterValues = [];
    const parameterLabels = [];
    
    machineConfig.parameters.forEach(param => {
        const value = parseFloat(formData.get(param.name)) || 0;
        const status = getParameterStatus(value, param);
        
        currentData[param.name] = {
            value: value,
            config: param,
            status: status
        };
        parameterValues.push(value);
        parameterLabels.push(`${param.name} (${param.unit})`);
    });
    
    // Update UI
    analysisTitle.textContent = `${machineConfig.name} - Parameter Analysis`;
    
    // Create parameter cards
    createParameterCards();
    
    // Create chart
    createChart(parameterLabels, parameterValues, machineConfig.name);
    
    // Generate alerts
    generateAlerts();
    
    // Show results sections
    showResultsSections();
    
    // Update system status
    updateSystemStatus('analyzing');
    
    // Simulate analysis completion
    setTimeout(() => {
        updateSystemStatus('complete');
    }, 1500);
}

// Get parameter status
function getParameterStatus(value, config) {
    if (value >= config.dangerThreshold) return 'danger';
    if (value >= config.warningThreshold) return 'warning';
    return 'normal';
}

// Create parameter cards
function createParameterCards() {
    parametersGrid.innerHTML = '';
    
    Object.entries(currentData).forEach(([paramName, data]) => {
        const card = document.createElement('div');
        card.className = `parameter-card ${data.status}`;
        
        const statusIcon = data.status === 'danger' ? '❌' : 
                          data.status === 'warning' ? '⚠️' : '✅';
        
        card.innerHTML = `
            <div class="parameter-header">
                <span class="parameter-name">${paramName}</span>
                <span class="parameter-status">${statusIcon}</span>
            </div>
            <div class="parameter-value ${data.status}">
                ${data.value} ${data.config.unit}
            </div>
            <div class="parameter-range">
                Range: ${data.config.min}-${data.config.max} ${data.config.unit}
            </div>
        `;
        
        parametersGrid.appendChild(card);
    });
}

// Chart creation
function createChart(labels, data, machineName) {
    const ctx = document.getElementById('parametersChart').getContext('2d');
    
    // Destroy existing chart
    if (currentChart) {
        currentChart.destroy();
    }
    
    // Generate colors based on alert levels
    const backgroundColors = data.map((value, index) => {
        const paramName = Object.keys(currentData)[index];
        const param = currentData[paramName];
        
        if (param.status === 'danger') {
            return 'rgba(220, 38, 38, 0.8)';
        } else if (param.status === 'warning') {
            return 'rgba(234, 179, 8, 0.8)';
        } else {
            return 'rgba(22, 163, 74, 0.8)';
        }
    });
    
    const borderColors = backgroundColors.map(color => 
        color.replace('0.8', '1')
    );
    
    currentChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: `${machineName} Parameters`,
                data: data,
                backgroundColor: backgroundColors,
                borderColor: borderColors,
                borderWidth: 2,
                borderRadius: 8,
                borderSkipped: false,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: 1500,
                easing: 'easeInOutQuart'
            },
            plugins: {
                title: {
                    display: true,
                    text: `${machineName} - Parameter Analysis`,
                    font: {
                        size: 18,
                        weight: 'bold'
                    }
                },
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleColor: 'white',
                    bodyColor: 'white',
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    borderWidth: 1,
                    cornerRadius: 8,
                    displayColors: false,
                    callbacks: {
                        afterBody: function(context) {
                            const index = context[0].dataIndex;
                            const paramName = Object.keys(currentData)[index];
                            const param = currentData[paramName];
                            return `Range: ${param.config.min}-${param.config.max} ${param.config.unit}`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        maxRotation: 45
                    }
                }
            }
        }
    });
}

// Generate safety alerts
function generateAlerts() {
    alertsContainer.innerHTML = '';
    
    const alerts = [];
    
    Object.keys(currentData).forEach(paramName => {
        const param = currentData[paramName];
        const value = param.value;
        const config = param.config;
        const status = param.status;
        
        let alert = null;
        
        if (status === 'danger') {
            alert = {
                parameter: paramName,
                severity: 'danger',
                icon: '❌',
                message: `${paramName} is at ${value} ${config.unit} - CRITICAL LEVEL`,
                recommendation: getRecommendation(paramName, 'danger')
            };
        } else if (status === 'warning') {
            alert = {
                parameter: paramName,
                severity: 'warning',
                icon: '⚠️',
                message: `${paramName} is at ${value} ${config.unit} - WARNING LEVEL`,
                recommendation: getRecommendation(paramName, 'warning')
            };
        } else {
            alert = {
                parameter: paramName,
                severity: 'normal',
                icon: '✅',
                message: `${paramName} is at ${value} ${config.unit} - NORMAL OPERATION`,
                recommendation: 'Continue monitoring. System operating within normal parameters.'
            };
        }
        
        alerts.push(alert);
    });
    
    // Sort alerts by severity (danger first, then warning, then normal)
    alerts.sort((a, b) => {
        const severityOrder = { danger: 3, warning: 2, normal: 1 };
        return severityOrder[b.severity] - severityOrder[a.severity];
    });
    
    // Only show critical and warning alerts, or show all normal if no issues
    const criticalAlerts = alerts.filter(alert => alert.severity !== 'normal');
    const alertsToShow = criticalAlerts.length > 0 ? criticalAlerts : [alerts[0]];
    
    if (criticalAlerts.length === 0) {
        // Show all normal message
        const allNormalAlert = document.createElement('div');
        allNormalAlert.className = 'alert-item normal';
        allNormalAlert.innerHTML = `
            <div class="alert-header">
                <span class="alert-icon">✅</span>
                <span class="alert-title">All Parameters Normal</span>
            </div>
            <div class="alert-message">All parameters are operating within normal ranges.</div>
            <div class="alert-recommendation">
                <strong>Recommendation:</strong> Continue routine monitoring. System operating optimally.
            </div>
        `;
        alertsContainer.appendChild(allNormalAlert);
    } else {
        alertsToShow.forEach(alert => {
            const alertCard = document.createElement('div');
            alertCard.className = `alert-item ${alert.severity}`;
            
            alertCard.innerHTML = `
                <div class="alert-header">
                    <span class="alert-icon">${alert.icon}</span>
                    <span class="alert-title">${alert.parameter}</span>
                </div>
                <div class="alert-message">${alert.message}</div>
                <div class="alert-recommendation">
                    <strong>Recommendation:</strong> ${alert.recommendation}
                </div>
            `;
            
            alertsContainer.appendChild(alertCard);
        });
    }
}

// Get recommendations based on parameter and severity
function getRecommendation(parameter, severity) {
    const recommendations = {
        Temperature: {
            danger: 'IMMEDIATE ACTION REQUIRED: Shut down equipment and inspect cooling system. Check for coolant leaks or pump failures.',
            warning: 'Increase monitoring frequency. Check cooling system efficiency and clean heat exchangers if necessary.'
        },
        Pressure: {
            danger: 'EMERGENCY: Reduce pressure immediately. Check safety relief valves and inspect for system leaks.',
            warning: 'Monitor pressure trends closely. Check compressor performance and system restrictions.'
        },
        'Flow Rate': {
            danger: 'CRITICAL: Check for complete flow blockage or pump failure. Inspect pipelines and filters immediately.',
            warning: 'Investigate flow restrictions. Clean filters and check pump performance.'
        },
        RPM: {
            danger: 'STOP EQUIPMENT: Excessive speed detected. Check speed control system and mechanical coupling.',
            warning: 'Monitor bearing temperatures and vibration levels. Schedule maintenance check.'
        },
        'Vibration Level': {
            danger: 'SHUTDOWN REQUIRED: Excessive vibration detected. Risk of mechanical failure. Inspect bearings and alignment.',
            warning: 'Schedule maintenance to check bearing condition and shaft alignment.'
        },
        'Fuel Rate': {
            danger: 'Excessive fuel consumption detected. Check combustion efficiency and fuel system leaks.',
            warning: 'Monitor fuel efficiency trends. Consider combustion tuning maintenance.'
        },
        'Output Power': {
            danger: 'Power output exceeds safe limits. Reduce load immediately to prevent generator damage.',
            warning: 'Monitor generator temperature and electrical parameters closely.'
        },
        'Gas Purity': {
            danger: 'Gas contamination detected. Check filtration systems and gas supply quality immediately.',
            warning: 'Increase gas quality monitoring. Inspect filters and purification systems.'
        },
        'Moisture Level': {
            danger: 'High moisture content detected. Risk of corrosion and system damage. Check dehydration units.',
            warning: 'Monitor moisture removal systems. Consider desiccant replacement.'
        },
        'Operating Temp': {
            danger: 'Equipment overheating. Check ventilation and cooling systems immediately.',
            warning: 'Improve ventilation and monitor ambient temperature conditions.'
        },
        'Sampling Rate': {
            danger: 'Sampling system failure detected. Check sample lines and pump operation immediately.',
            warning: 'Clean sample lines and check pump performance.'
        },
        'Inlet Temp': {
            danger: 'Inlet temperature outside safe range. Check pre-cooling system operation.',
            warning: 'Monitor pre-cooling system performance and efficiency.'
        },
        'Outlet Temp': {
            danger: 'Cryogenic system not achieving target temperature. Check refrigeration system immediately.',
            warning: 'Monitor refrigeration system efficiency and refrigerant levels.'
        },
        'Pressure Drop': {
            danger: 'Excessive pressure drop indicates severe system restriction. Check for blockages immediately.',
            warning: 'Clean filters and inspect system for partial restrictions.'
        },
        'Cooling Rate': {
            danger: 'Cooling system operating at maximum capacity. Risk of system overload.',
            warning: 'Monitor cooling system performance and consider load reduction.'
        },
        Power: {
            danger: 'Power consumption exceeds safe limits. Check motor condition and load immediately.',
            warning: 'Monitor motor efficiency and consider load optimization.'
        },
        Vibration: {
            danger: 'Excessive vibration detected. Stop equipment and inspect mechanical components.',
            warning: 'Schedule mechanical inspection for bearings and alignment.'
        },
        'Bearing Temp': {
            danger: 'Bearing overheating detected. Stop equipment immediately to prevent seizure.',
            warning: 'Check lubrication system and bearing condition.'
        },
        'Beam Energy': {
            danger: 'Beam energy exceeds safe limits. Reduce energy immediately to prevent equipment damage.',
            warning: 'Monitor beam stability and focusing system performance.'
        },
        'Beam Current': {
            danger: 'Beam current too high. Risk of target overheating and damage. Reduce current immediately.',
            warning: 'Monitor target temperature and beam profile. Check cooling systems.'
        },
        'RF Power': {
            danger: 'RF power exceeds safe limits. Risk of klystron damage. Reduce power immediately.',
            warning: 'Monitor klystron temperature and performance. Check waveguide systems.'
        },
        'Vacuum Level': {
            danger: 'Poor vacuum detected. Risk of beam loss and contamination. Check vacuum pumps immediately.',
            warning: 'Monitor vacuum pump performance and check for small leaks.'
        },
        'Magnet Current': {
            danger: 'Magnet current too high. Risk of quench and damage. Reduce current immediately.',
            warning: 'Monitor magnet temperature and cooling system. Check power supply stability.'
        }
    };
    
    return recommendations[parameter]?.[severity] || 'Monitor parameter and follow standard operating procedures.';
}

// System status management
function updateSystemStatus(status, machineName = '') {
    const statusConfig = {
        ready: {
            dot: '#16a34a',
            text: 'System Ready'
        },
        configured: {
            dot: '#eab308',
            text: `${machineName} Selected`
        },
        analyzing: {
            dot: '#2563eb',
            text: 'Analyzing Data...'
        },
        complete: {
            dot: '#16a34a',
            text: 'Analysis Complete'
        }
    };
    
    const config = statusConfig[status];
    if (config) {
        statusDot.style.backgroundColor = config.dot;
        statusText.textContent = config.text;
    }
}

// Section visibility management
function showParametersSection() {
    parametersSection.style.display = 'block';
    parametersSection.classList.add('slide-in');
}

function showResultsSections() {
    resultsSection.style.display = 'block';
    exportSection.style.display = 'block';
    
    resultsSection.classList.add('fade-in');
}

function showWelcomeSection() {
    welcomeSection.style.display = 'flex';
    welcomeSection.classList.add('fade-in');
}

function hideWelcomeSection() {
    welcomeSection.style.display = 'none';
}

function hideAllSections() {
    parametersSection.style.display = 'none';
    resultsSection.style.display = 'none';
    exportSection.style.display = 'none';
}

// Tooltip functionality
function handleTooltip(event) {
    const element = event.target;
    const tooltipText = element.getAttribute('data-tooltip');
    
    if (tooltipText) {
        tooltip.textContent = tooltipText;
        tooltip.classList.add('show');
        
        // Position tooltip
        const rect = element.getBoundingClientRect();
        tooltip.style.left = rect.left + 'px';
        tooltip.style.top = (rect.top - tooltip.offsetHeight - 8) + 'px';
    }
}

function hideTooltip() {
    tooltip.classList.remove('show');
}

// Generate PDF report
async function generatePDFReport() {
    if (!currentChart || !currentMachine) {
        showNotification('No data available to generate report. Please analyze a machine first.', 'error');
        return;
    }
    
    try {
        // Show loading state
        const reportBtn = downloadReport;
        const originalText = reportBtn.textContent;
        reportBtn.textContent = '⏳ Generating PDF...';
        reportBtn.disabled = true;
        
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();
        const margin = 20;
        const contentWidth = pageWidth - (margin * 2);
        
        let yPosition = margin;
        
        // Helper function to add new page if needed
        function checkPageBreak(requiredHeight) {
            if (yPosition + requiredHeight > pageHeight - margin) {
                pdf.addPage();
                yPosition = margin;
                return true;
            }
            return false;
        }
        
        // Helper function to add text with word wrapping
        function addWrappedText(text, x, y, maxWidth, fontSize = 10) {
            pdf.setFontSize(fontSize);
            const lines = pdf.splitTextToSize(text, maxWidth);
            pdf.text(lines, x, y);
            return lines.length * (fontSize * 0.35);
        }
        
        // 1. HEADER SECTION
        pdf.setFillColor(220, 38, 38); // GAIL Red
        pdf.rect(0, 0, pageWidth, 40, 'F');
        
        pdf.setTextColor(255, 255, 255);
        pdf.setFontSize(24);
        pdf.setFont(undefined, 'bold');
        pdf.text('GAIL GAS PLANT MONITORING REPORT', margin, 25);
        
        pdf.setFontSize(12);
        pdf.setFont(undefined, 'normal');
        pdf.text('Gas Authority of India Limited - Comprehensive Analysis', margin, 35);
        
        yPosition = 50;
        pdf.setTextColor(0, 0, 0);
        
        // 2. REPORT INFORMATION
        const machineConfig = MACHINE_CONFIGS[currentMachine];
        const currentDate = new Date();
        
        pdf.setFontSize(14);
        pdf.setFont(undefined, 'bold');
        pdf.text('REPORT INFORMATION', margin, yPosition);
        yPosition += 10;
        
        pdf.setFontSize(10);
        pdf.setFont(undefined, 'normal');
        const reportInfo = [
            `Machine Type: ${machineConfig.name}`,
            `Description: ${machineConfig.description}`,
            `Analysis Date: ${currentDate.toLocaleDateString()}`,
            `Analysis Time: ${currentDate.toLocaleTimeString()}`,
            `Report Generated By: Yashasvi Grover`,
            `Organization: Gas Authority of India Limited (GAIL)`
        ];
        
        reportInfo.forEach(info => {
            pdf.text(info, margin, yPosition);
            yPosition += 5;
        });
        
        yPosition += 10;
        
        // 3. EXECUTIVE SUMMARY
        checkPageBreak(30);
        pdf.setFontSize(14);
        pdf.setFont(undefined, 'bold');
        pdf.text('EXECUTIVE SUMMARY', margin, yPosition);
        yPosition += 10;
        
        // Calculate summary statistics
        const totalParams = Object.keys(currentData).length;
        let normalCount = 0, warningCount = 0, dangerCount = 0;
        
        Object.keys(currentData).forEach(paramName => {
            const param = currentData[paramName];
            if (param.status === 'danger') {
                dangerCount++;
            } else if (param.status === 'warning') {
                warningCount++;
            } else {
                normalCount++;
            }
        });
        
        const overallStatus = dangerCount > 0 ? 'CRITICAL' : 
                             warningCount > 0 ? 'WARNING' : 'NORMAL';
        
        pdf.setFontSize(10);
        pdf.setFont(undefined, 'normal');
        const summaryText = `This report presents a comprehensive analysis of ${machineConfig.name} operations at GAIL facilities. ` +
                           `A total of ${totalParams} parameters were monitored and analyzed. ` +
                           `Current system status: ${overallStatus}. ` +
                           `Parameters in normal range: ${normalCount}, Warning level: ${warningCount}, Critical level: ${dangerCount}.`;
        
        const summaryHeight = addWrappedText(summaryText, margin, yPosition, contentWidth, 10);
        yPosition += summaryHeight + 10;
        
        // 4. PARAMETER ANALYSIS TABLE
        checkPageBreak(50);
        pdf.setFontSize(14);
        pdf.setFont(undefined, 'bold');
        pdf.text('PARAMETER ANALYSIS', margin, yPosition);
        yPosition += 10;
        
        // Table headers
        pdf.setFontSize(9);
        pdf.setFont(undefined, 'bold');
        const colWidths = [40, 25, 25, 25, 25, 30];
        const headers = ['Parameter', 'Value', 'Unit', 'Warning', 'Danger', 'Status'];
        let xPos = margin;
        
        headers.forEach((header, index) => {
            pdf.text(header, xPos, yPosition);
            xPos += colWidths[index];
        });
        
        yPosition += 5;
        pdf.line(margin, yPosition, pageWidth - margin, yPosition);
        yPosition += 5;
        
        // Table data
        pdf.setFont(undefined, 'normal');
        Object.keys(currentData).forEach(paramName => {
            checkPageBreak(8);
            const param = currentData[paramName];
            const value = param.value;
            const config = param.config;
            
            let status = 'NORMAL';
            if (param.status === 'danger') status = 'CRITICAL';
            else if (param.status === 'warning') status = 'WARNING';
            
            xPos = margin;
            const rowData = [
                paramName,
                value.toString(),
                config.unit,
                config.warningThreshold.toString(),
                config.dangerThreshold.toString(),
                status
            ];
            
            rowData.forEach((data, index) => {
                pdf.text(data, xPos, yPosition);
                xPos += colWidths[index];
            });
            
            yPosition += 5;
        });
        
        yPosition += 10;
        
        // 5. CHART VISUALIZATION
        checkPageBreak(120);
        pdf.setFontSize(14);
        pdf.setFont(undefined, 'bold');
        pdf.text('PARAMETER VISUALIZATION', margin, yPosition);
        yPosition += 10;
        
        // Capture chart as image
        const chartCanvas = document.getElementById('parametersChart');
        const canvas = await html2canvas(chartCanvas, {
            backgroundColor: '#ffffff',
            scale: 2,
            logging: false,
            useCORS: true
        });
        
        const imgData = canvas.toDataURL('image/png', 1.0);
        
        // Calculate image dimensions
        const maxImgWidth = contentWidth;
        const maxImgHeight = 100;
        
        const aspectRatio = canvas.width / canvas.height;
        let imgWidth = maxImgWidth;
        let imgHeight = imgWidth / aspectRatio;
        
        if (imgHeight > maxImgHeight) {
            imgHeight = maxImgHeight;
            imgWidth = imgHeight * aspectRatio;
        }
        
        const imgX = margin + (contentWidth - imgWidth) / 2;
        
        if (yPosition + imgHeight > pageHeight - margin) {
            pdf.addPage();
            yPosition = margin;
        }
        
        pdf.addImage(imgData, 'PNG', imgX, yPosition, imgWidth, imgHeight);
        yPosition += imgHeight + 15;
        
        // 6. SAFETY ALERTS & RECOMMENDATIONS
        checkPageBreak(30);
        pdf.setFontSize(14);
        pdf.setFont(undefined, 'bold');
        pdf.text('SAFETY ALERTS & RECOMMENDATIONS', margin, yPosition);
        yPosition += 10;
        
        const alerts = [];
        Object.keys(currentData).forEach(paramName => {
            const param = currentData[paramName];
            const value = param.value;
            const config = param.config;
            
            if (param.status === 'danger') {
                alerts.push({
                    parameter: paramName,
                    severity: 'CRITICAL',
                    value: value,
                    unit: config.unit,
                    recommendation: getRecommendation(paramName, 'danger')
                });
            } else if (param.status === 'warning') {
                alerts.push({
                    parameter: paramName,
                    severity: 'WARNING',
                    value: value,
                    unit: config.unit,
                    recommendation: getRecommendation(paramName, 'warning')
                });
            }
        });
        
        if (alerts.length === 0) {
            pdf.setFontSize(10);
            pdf.setFont(undefined, 'normal');
            pdf.text('✅ All parameters are operating within normal ranges. Continue routine monitoring.', margin, yPosition);
            yPosition += 10;
        } else {
            alerts.forEach((alert, index) => {
                checkPageBreak(25);
                
                pdf.setFontSize(11);
                pdf.setFont(undefined, 'bold');
                const alertTitle = `${index + 1}. ${alert.severity}: ${alert.parameter}`;
                pdf.text(alertTitle, margin, yPosition);
                yPosition += 6;
                
                pdf.setFontSize(9);
                pdf.setFont(undefined, 'normal');
                pdf.text(`Current Value: ${alert.value} ${alert.unit}`, margin + 5, yPosition);
                yPosition += 5;
                
                const recHeight = addWrappedText(`Recommendation: ${alert.recommendation}`, margin + 5, yPosition, contentWidth - 5, 9);
                yPosition += recHeight + 8;
            });
        }
        
        // 7. TECHNICAL SPECIFICATIONS
        checkPageBreak(40);
        pdf.setFontSize(14);
        pdf.setFont(undefined, 'bold');
        pdf.text('TECHNICAL SPECIFICATIONS', margin, yPosition);
        yPosition += 10;
        
        pdf.setFontSize(10);
        pdf.setFont(undefined, 'normal');
        machineConfig.parameters.forEach(param => {
            checkPageBreak(8);
            pdf.text(`${param.name}: ${param.min} - ${param.max} ${param.unit} (Warning: ${param.warningThreshold}, Critical: ${param.dangerThreshold})`, margin, yPosition);
            yPosition += 5;
        });
        
        // 8. FOOTER
        const footerY = pageHeight - 30;
        pdf.setFontSize(8);
        pdf.setFont(undefined, 'normal');
        pdf.setTextColor(128, 128, 128);
        pdf.text('This report was automatically generated by the GAIL Gas Plant Monitoring System.', margin, footerY);
        pdf.text(`Report ID: GAIL-${currentMachine.toUpperCase()}-${Date.now()}`, margin, footerY + 5);
        pdf.text('Gas Authority of India Limited - Ensuring Safe and Efficient Operations', margin, footerY + 10);
        
        // Add page numbers
        const pageCount = pdf.internal.getNumberOfPages();
        for (let i = 1; i <= pageCount; i++) {
            pdf.setPage(i);
            pdf.setFontSize(8);
            pdf.setTextColor(128, 128, 128);
            pdf.text(`Page ${i} of ${pageCount}`, pageWidth - margin - 20, footerY + 15);
        }
        
        // Save PDF
        const fileName = `GAIL-${machineConfig.name.replace(/\s+/g, '-')}-Report-${currentDate.toISOString().slice(0, 10)}.pdf`;
        pdf.save(fileName);
        
        // Reset button
        reportBtn.textContent = originalText;
        reportBtn.disabled = false;
        
        // Show success message
        showNotification('PDF report downloaded successfully!', 'success');
        
    } catch (error) {
        console.error('Error generating PDF report:', error);
        showNotification('Error generating PDF report. Please try again.', 'error');
        
        // Reset button
        downloadReport.textContent = '📄 Download PDF Report';
        downloadReport.disabled = false;
    }
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 12px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 1000;
        animation: slideInRight 0.3s ease;
        max-width: 300px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    `;
    
    if (type === 'success') {
        notification.style.backgroundColor = '#16a34a';
    } else if (type === 'error') {
        notification.style.backgroundColor = '#dc2626';
    } else {
        notification.style.backgroundColor = '#2563eb';
    }
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

// Add keyboard shortcuts
document.addEventListener('keydown', function(event) {
    // Ctrl/Cmd + Enter to submit form
    if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
        if (parametersForm.style.display !== 'none') {
            parametersForm.dispatchEvent(new Event('submit'));
        }
    }
    
    // Ctrl/Cmd + D to toggle theme
    if ((event.ctrlKey || event.metaKey) && event.key === 'd') {
        event.preventDefault();
        toggleTheme();
    }
});

// Add notification animations
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(notificationStyles);