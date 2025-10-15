// Sample data for the KDIP platform
const sampleData = {
  transactions: [
    {
      id: "tx001",
      date: "2024-10-01",
      area: "Business Bay",
      property_type: "Apartment",
      price_aed: 1250000,
      buyer: "Al-Rashid Holdings",
      seller: "Emirates Properties",
      size_sqft: 1200,
      bedrooms: 2
    },
    {
      id: "tx002",
      date: "2024-09-28",
      area: "Dubai Marina",
      property_type: "Villa",
      price_aed: 3500000,
      buyer: "Johnson Family Trust",
      seller: "Damac Properties",
      size_sqft: 3500,
      bedrooms: 4
    },
    {
      id: "tx003",
      date: "2024-09-25",
      area: "Downtown Dubai",
      property_type: "Office",
      price_aed: 2800000,
      buyer: "REIT Global Fund",
      seller: "Emaar Commercial",
      size_sqft: 2000,
      bedrooms: null
    }
  ],
  
  investors: [
    {
      id: "inv001",
      name: "Al-Rashid Holdings",
      type: "Company",
      nationality: "UAE",
      strategy: "Buy & Hold",
      total_investments: 25,
      total_value_aed: 45000000,
      risk_score: 0.35,
      liquidity_score: 0.80,
      preferred_areas: ["Business Bay", "DIFC", "Dubai Marina"]
    },
    {
      id: "inv002",
      name: "Johnson Family Trust",
      type: "Family Office",
      nationality: "UK",
      strategy: "Mixed Portfolio",
      total_investments: 12,
      total_value_aed: 28000000,
      risk_score: 0.45,
      liquidity_score: 0.60,
      preferred_areas: ["Palm Jumeirah", "Dubai Marina", "Emirates Hills"]
    },
    {
      id: "inv003",
      name: "REIT Global Fund",
      type: "Fund",
      nationality: "USA",
      strategy: "REIT",
      total_investments: 150,
      total_value_aed: 200000000,
      risk_score: 0.25,
      liquidity_score: 0.90,
      preferred_areas: ["Downtown Dubai", "DIFC", "Business Bay"]
    }
  ],
  
  properties: [
    {
      id: "prop001",
      area: "Business Bay",
      community: "Bay Central",
      building: "Central Tower A",
      type: "Apartment",
      size_sqft: 1200,
      bedrooms: 2,
      current_value_aed: 1300000,
      rental_yield: 0.065,
      coordinates: [25.1879, 55.2648]
    },
    {
      id: "prop002",
      area: "Dubai Marina",
      community: "Marina Walk",
      building: "Marina Heights",
      type: "Villa",
      size_sqft: 3500,
      bedrooms: 4,
      current_value_aed: 3600000,
      rental_yield: 0.055,
      coordinates: [25.0657, 55.1404]
    },
    {
      id: "prop003",
      area: "Downtown Dubai",
      community: "Business District",
      building: "Commercial Plaza",
      type: "Office",
      size_sqft: 2000,
      bedrooms: null,
      current_value_aed: 2900000,
      rental_yield: 0.075,
      coordinates: [25.1972, 55.2744]
    }
  ],
  
  market_trends: [
    { month: "2024-01", avg_price_per_sqft: 950, transaction_volume: 1250, price_growth: 0.08 },
    { month: "2024-02", avg_price_per_sqft: 965, transaction_volume: 1340, price_growth: 0.085 },
    { month: "2024-03", avg_price_per_sqft: 980, transaction_volume: 1420, price_growth: 0.09 },
    { month: "2024-04", avg_price_per_sqft: 995, transaction_volume: 1380, price_growth: 0.088 },
    { month: "2024-05", avg_price_per_sqft: 1010, transaction_volume: 1450, price_growth: 0.092 },
    { month: "2024-06", avg_price_per_sqft: 1025, transaction_volume: 1520, price_growth: 0.095 }
  ],
  
  strategic_milestones: [
    {
      week: "Week 1-2",
      phase: "Foundation Setup",
      progress: 100,
      status: "Completed",
      deliverables: ["Docker environment", "FastAPI structure", "Database schema"]
    },
    {
      week: "Week 3-4",
      phase: "Data Ingestion",
      progress: 85,
      status: "In Progress",
      deliverables: ["File upload system", "ETL pipelines", "Entity resolution"]
    },
    {
      week: "Week 5-6",
      phase: "Intelligence Engine",
      progress: 60,
      status: "In Progress",
      deliverables: ["ML models", "Feature engineering", "Behavioral analytics"]
    },
    {
      week: "Week 7-8",
      phase: "Search & Analytics",
      progress: 30,
      status: "Planned",
      deliverables: ["Elasticsearch", "NLQ system", "Advanced search"]
    },
    {
      week: "Week 9-10",
      phase: "Frontend Development",
      progress: 15,
      status: "Planned",
      deliverables: ["Streamlit UI", "Dashboards", "Report system"]
    },
    {
      week: "Week 11-12",
      phase: "Deployment",
      progress: 0,
      status: "Planned",
      deliverables: ["Production deployment", "Revenue tracking", "Go-to-market"]
    }
  ],
  
  dubai_areas: [
    { name: "Business Bay", transactions: 245, avg_price_aed: 1200000, growth_rate: 0.12, investment_activity: "High" },
    { name: "Dubai Marina", transactions: 198, avg_price_aed: 1800000, growth_rate: 0.08, investment_activity: "Very High" },
    { name: "Downtown Dubai", transactions: 167, avg_price_aed: 2500000, growth_rate: 0.15, investment_activity: "Premium" },
    { name: "Palm Jumeirah", transactions: 89, avg_price_aed: 4200000, growth_rate: 0.06, investment_activity: "Ultra Premium" },
    { name: "DIFC", transactions: 134, avg_price_aed: 2200000, growth_rate: 0.10, investment_activity: "High" }
  ]
};

// Global state
let currentPage = 'dashboard';
let charts = {};

// Utility functions
function formatCurrency(amount) {
  return new Intl.NumberFormat('en-AE', {
    style: 'currency',
    currency: 'AED',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
}

function formatNumber(num) {
  return new Intl.NumberFormat('en-US').format(num);
}

function formatPercentage(value) {
  return `${(value * 100).toFixed(1)}%`;
}

function showLoading() {
  document.getElementById('loadingOverlay').classList.add('active');
}

function hideLoading() {
  document.getElementById('loadingOverlay').classList.remove('active');
}

// Navigation
function initializeNavigation() {
  const navButtons = document.querySelectorAll('.nav-btn');
  const pages = document.querySelectorAll('.page');
  
  navButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetPage = button.dataset.page;
      
      // Update navigation
      navButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      // Update pages
      pages.forEach(page => page.classList.remove('active'));
      document.getElementById(targetPage).classList.add('active');
      
      currentPage = targetPage;
      
      // Initialize page-specific functionality
      switch(targetPage) {
        case 'dashboard':
          initializeDashboard();
          break;
        case 'ingestion':
          initializeIngestion();
          break;
        case 'investors':
          initializeInvestors();
          break;
        case 'properties':
          initializeProperties();
          break;
        case 'analytics':
          initializeAnalytics();
          break;
        case 'reports':
          initializeReports();
          break;
        case 'tracker':
          initializeTracker();
          break;
      }
    });
  });
}

// Dashboard functionality
function initializeDashboard() {
  createMarketTrendsChart();
}

function createMarketTrendsChart() {
  const ctx = document.getElementById('marketTrendsChart');
  if (!ctx || charts.marketTrends) return;
  
  const data = sampleData.market_trends;
  
  charts.marketTrends = new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.map(d => d.month),
      datasets: [
        {
          label: 'Avg Price per Sqft (AED)',
          data: data.map(d => d.avg_price_per_sqft),
          borderColor: '#32B4CD',
          backgroundColor: 'rgba(50, 184, 205, 0.1)',
          tension: 0.4,
          yAxisID: 'y'
        },
        {
          label: 'Transaction Volume',
          data: data.map(d => d.transaction_volume),
          borderColor: '#FF5459',
          backgroundColor: 'rgba(255, 84, 89, 0.1)',
          tension: 0.4,
          yAxisID: 'y1'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: '#F5F5F5'
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#A7A9A9'
          },
          grid: {
            color: 'rgba(167, 169, 169, 0.1)'
          }
        },
        y: {
          type: 'linear',
          display: true,
          position: 'left',
          ticks: {
            color: '#A7A9A9'
          },
          grid: {
            color: 'rgba(167, 169, 169, 0.1)'
          }
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          ticks: {
            color: '#A7A9A9'
          },
          grid: {
            drawOnChartArea: false
          }
        }
      }
    }
  });
}

// Data Ingestion functionality
function initializeIngestion() {
  const fileInput = document.getElementById('fileInput');
  const uploadArea = document.getElementById('uploadArea');
  
  // Drag and drop functionality
  uploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadArea.style.borderColor = '#32B4CD';
    uploadArea.style.background = 'rgba(50, 184, 205, 0.05)';
  });
  
  uploadArea.addEventListener('dragleave', () => {
    uploadArea.style.borderColor = '';
    uploadArea.style.background = '';
  });
  
  uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadArea.style.borderColor = '';
    uploadArea.style.background = '';
    
    const files = e.dataTransfer.files;
    handleFileUpload(files);
  });
  
  fileInput.addEventListener('change', (e) => {
    handleFileUpload(e.target.files);
  });
}

function handleFileUpload(files) {
  if (files.length === 0) return;
  
  showLoading();
  
  // Simulate file processing
  setTimeout(() => {
    hideLoading();
    
    // Update pipeline status
    updatePipelineStatus();
    
    // Show success message
    alert(`Successfully uploaded ${files.length} file(s) for processing`);
  }, 2000);
}

function updatePipelineStatus() {
  const steps = document.querySelectorAll('.pipeline-step');
  
  steps.forEach((step, index) => {
    step.classList.remove('completed', 'in-progress', 'pending');
    
    if (index === 0) {
      step.classList.add('completed');
    } else if (index === 1) {
      step.classList.add('in-progress');
    } else {
      step.classList.add('pending');
    }
  });
}

// Investors functionality
function initializeInvestors() {
  renderInvestorsGrid();
  setupInvestorFilters();
}

function renderInvestorsGrid(filteredInvestors = null) {
  const grid = document.getElementById('investorsGrid');
  const investors = filteredInvestors || sampleData.investors;
  
  grid.innerHTML = investors.map(investor => `
    <div class="investor-card" onclick="showInvestorModal('${investor.id}')">
      <div class="investor-header">
        <div class="investor-info">
          <h3>${investor.name}</h3>
          <span class="investor-type">${investor.type}</span>
        </div>
      </div>
      
      <div class="investor-stats">
        <div class="investor-stat">
          <div class="stat-number">${investor.total_investments}</div>
          <div class="stat-desc">Total Investments</div>
        </div>
        <div class="investor-stat">
          <div class="stat-number">${formatCurrency(investor.total_value_aed)}</div>
          <div class="stat-desc">Portfolio Value</div>
        </div>
      </div>
      
      <div class="investor-areas">
        <div class="areas-title">Preferred Areas</div>
        <div class="areas-list">
          ${investor.preferred_areas.map(area => `<span class="area-tag">${area}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

function setupInvestorFilters() {
  const searchInput = document.getElementById('investorSearch');
  const typeFilter = document.getElementById('investorTypeFilter');
  const strategyFilter = document.getElementById('strategyFilter');
  
  function applyFilters() {
    let filtered = sampleData.investors;
    
    // Search filter
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm) {
      filtered = filtered.filter(investor => 
        investor.name.toLowerCase().includes(searchTerm)
      );
    }
    
    // Type filter
    if (typeFilter.value) {
      filtered = filtered.filter(investor => investor.type === typeFilter.value);
    }
    
    // Strategy filter
    if (strategyFilter.value) {
      filtered = filtered.filter(investor => investor.strategy === strategyFilter.value);
    }
    
    renderInvestorsGrid(filtered);
  }
  
  searchInput.addEventListener('input', applyFilters);
  typeFilter.addEventListener('change', applyFilters);
  strategyFilter.addEventListener('change', applyFilters);
}

function showInvestorModal(investorId) {
  const investor = sampleData.investors.find(inv => inv.id === investorId);
  if (!investor) return;
  
  const modal = document.getElementById('investorModal');
  const modalName = document.getElementById('modalInvestorName');
  const modalBody = document.getElementById('modalBody');
  
  modalName.textContent = investor.name;
  
  modalBody.innerHTML = `
    <div class="investor-details">
      <div class="detail-section">
        <h3>Basic Information</h3>
        <div class="detail-grid">
          <div class="detail-item">
            <strong>Type:</strong> ${investor.type}
          </div>
          <div class="detail-item">
            <strong>Nationality:</strong> ${investor.nationality}
          </div>
          <div class="detail-item">
            <strong>Strategy:</strong> ${investor.strategy}
          </div>
        </div>
      </div>
      
      <div class="detail-section">
        <h3>Investment Profile</h3>
        <div class="detail-grid">
          <div class="detail-item">
            <strong>Total Investments:</strong> ${investor.total_investments}
          </div>
          <div class="detail-item">
            <strong>Portfolio Value:</strong> ${formatCurrency(investor.total_value_aed)}
          </div>
          <div class="detail-item">
            <strong>Risk Score:</strong> ${formatPercentage(investor.risk_score)}
          </div>
          <div class="detail-item">
            <strong>Liquidity Score:</strong> ${formatPercentage(investor.liquidity_score)}
          </div>
        </div>
      </div>
      
      <div class="detail-section">
        <h3>Preferred Areas</h3>
        <div class="areas-list">
          ${investor.preferred_areas.map(area => `<span class="area-tag">${area}</span>`).join('')}
        </div>
      </div>
    </div>
  `;
  
  modal.classList.add('active');
}

function closeModal() {
  const modal = document.getElementById('investorModal');
  modal.classList.remove('active');
}

// Properties functionality
function initializeProperties() {
  renderPropertiesTable();
}

function renderPropertiesTable() {
  const tbody = document.getElementById('propertiesTableBody');
  
  tbody.innerHTML = sampleData.properties.map(property => `
    <tr>
      <td>${property.id}</td>
      <td>${property.area}</td>
      <td>${property.type}</td>
      <td>${formatNumber(property.size_sqft)}</td>
      <td>${formatCurrency(property.current_value_aed)}</td>
      <td>${formatPercentage(property.rental_yield)}</td>
      <td><span class="status status--success">Active</span></td>
    </tr>
  `).join('');
}

// Analytics functionality
function initializeAnalytics() {
  createAreaTrendsChart();
  createActivityChart();
}

function createAreaTrendsChart() {
  const ctx = document.getElementById('areaTrendsChart');
  if (!ctx || charts.areaTrends) return;
  
  const data = sampleData.dubai_areas;
  
  charts.areaTrends = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.map(d => d.name),
      datasets: [{
        label: 'Average Price (AED)',
        data: data.map(d => d.avg_price_aed),
        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#5D878F', '#DB4545'],
        borderColor: ['#1FB8CD', '#FFC185', '#B4413C', '#5D878F', '#DB4545'],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: '#F5F5F5'
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#A7A9A9'
          },
          grid: {
            color: 'rgba(167, 169, 169, 0.1)'
          }
        },
        y: {
          ticks: {
            color: '#A7A9A9',
            callback: function(value) {
              return formatCurrency(value);
            }
          },
          grid: {
            color: 'rgba(167, 169, 169, 0.1)'
          }
        }
      }
    }
  });
}

function createActivityChart() {
  const ctx = document.getElementById('activityChart');
  if (!ctx || charts.activity) return;
  
  const data = sampleData.dubai_areas;
  
  charts.activity = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: data.map(d => d.name),
      datasets: [{
        data: data.map(d => d.transactions),
        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F']
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            color: '#F5F5F5',
            padding: 20
          }
        }
      }
    }
  });
}

// Reports functionality
function initializeReports() {
  // Reports functionality already set up in HTML
}

function generateReport(type) {
  showLoading();
  
  setTimeout(() => {
    hideLoading();
    
    let reportName = '';
    switch(type) {
      case 'investor':
        reportName = 'Investor Profile Report';
        break;
      case 'jv':
        reportName = 'JV Radar Report';
        break;
      case 'market':
        reportName = 'Market Intelligence Report';
        break;
    }
    
    alert(`${reportName} has been generated successfully! Download link sent to your email.`);
  }, 3000);
}

// Strategic Tracker functionality
function initializeTracker() {
  renderMilestonesTimeline();
}

function renderMilestonesTimeline() {
  const timeline = document.getElementById('milestonesTimeline');
  
  timeline.innerHTML = sampleData.strategic_milestones.map(milestone => {
    const statusClass = milestone.status.toLowerCase().replace(' ', '-');
    
    return `
      <div class="timeline-item ${statusClass}">
        <div class="timeline-header">
          <div class="timeline-title">${milestone.phase}</div>
          <div class="timeline-week">${milestone.week}</div>
        </div>
        <div class="timeline-description">
          ${milestone.deliverables.join(', ')}
        </div>
        <div class="timeline-progress">
          <div class="timeline-progress-bar" style="width: ${milestone.progress}%"></div>
        </div>
        <div style="font-size: 12px; color: #A7A9A9; margin-top: 8px;">
          Progress: ${milestone.progress}% - ${milestone.status}
        </div>
      </div>
    `;
  }).join('');
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initializeNavigation();
  initializeDashboard();
  
  // Close modal when clicking outside
  document.getElementById('investorModal').addEventListener('click', function(e) {
    if (e.target === this) {
      closeModal();
    }
  });
  
  console.log('KDIP Platform initialized successfully');
});

// Export functions for global access
window.showInvestorModal = showInvestorModal;
window.closeModal = closeModal;
window.generateReport = generateReport;