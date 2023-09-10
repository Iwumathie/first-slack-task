
const hours = now.getUTCHours();
const minutes = now.getUTCMinutes();
const seconds = now.getUTCSeconds();
const milliseconds = now.getUTCMilliseconds();

console.log(`${year}-${month}-${day} 
            ${hours}:${minutes}:${seconds}.${milliseconds}`);