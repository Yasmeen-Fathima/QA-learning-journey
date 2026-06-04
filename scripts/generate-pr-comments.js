const fs = require('fs');
const path = require('path');

// Read the JSON report
const reportPath = path.join(process.cwd(), 'test-results.json');
if (!fs.existsSync(reportPath)) {
  console.log('## 🧪 Test Results\n\n⚠️ No test results found — tests may not have run.');
  process.exit(0);
}
const rawData = fs.readFileSync(reportPath, 'utf8');
const report = JSON.parse(rawData);

// Extract stats
const { stats } = report;
const totalTests = stats.expected + stats.unexpected + stats.skipped;
const duration = (stats.duration / 1000).toFixed(2); // Convert to seconds

// Generate markdown comment
const comment = `## 🧪 Test Results

**Status:** ${stats.unexpected === 0 ? '✅ All tests passed!' : '❌ Some tests failed'}

| Metric | Count |
|--------|-------|
| ✅ Passed | ${stats.expected} |
| ❌ Failed | ${stats.unexpected} |
| ⏭️ Skipped | ${stats.skipped} |
| **Total** | **${totalTests}** |
| **Duration** | **${duration}s** |

**Run started:** ${new Date(stats.startTime).toLocaleString()}
`;

console.log(comment);