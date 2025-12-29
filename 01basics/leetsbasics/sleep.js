//sleep function to simulate delay

async function sleep(millis) {
    
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();  
        }, millis);
    });
}