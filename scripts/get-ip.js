const os = require('os');

function getLocalIP() {
    const interfaces = os.networkInterfaces();
    
    for (const name of Object.keys(interfaces)) {
        for (const interface of interfaces[name]) {
            // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
            if (interface.family === 'IPv4' && !interface.internal) {
                console.log(`\n🌐 Your computer's IP address: ${interface.address}`);
                console.log(`📱 Access from mobile/tablet: http://${interface.address}:5173`);
                console.log(`🧪 Test page: http://${interface.address}:5173/test.html`);
                return interface.address;
            }
        }
    }
    
    console.log('❌ Could not find local IP address');
    return null;
}

console.log('=== NextHR Network Setup ===');
getLocalIP();
console.log('\n📋 Troubleshooting steps:');
console.log('1. Make sure your mobile/tablet is on the same WiFi network');
console.log('2. Try the test page first: /test.html');
console.log('3. Check if your firewall is blocking port 5173');
console.log('4. Restart your router if needed');