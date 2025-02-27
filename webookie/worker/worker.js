self.onmessage = function(event){
    console.log("work started");
    setTimeout(() => {
        postMessage("work completed");
    }, 3000);
}