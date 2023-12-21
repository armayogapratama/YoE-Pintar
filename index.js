const receipt = require('receipt');

receipt.config.width = 60;
receipt.config.ruler = '-';
let output = receipt.create([    
{ type: 'text', value: [
    'YoE Course',
    'Jakarta Indonesia',
    'Yoe@store.com',
    'www.yoe.com'
], align: 'center' },
{ type: 'empty' },
{ type: 'properties', lines: [
    { name: 'Date', value: new Date() }
] },
{ type: 'text', value: [
    'Terima Kasih Telah Langanan Course Kami'
], align: 'center' }
]);
console.log(output)