import { exec } from 'child_process'

    export const stopAppium = ( () => {
        try {
            console.log("Trying to stop the server...");
            exec("taskkill /F /IM node.exe", (error, stdout, stderr) => {
                if (error) {
                    console.log(`error: ${error.message}`);
                    return;
                }
                if (stderr) {
                    console.log(`stderr: ${stderr}`);
                    return;
                }
                console.log(`stdout: ${stdout}`);
            });
            console.log("Success, Server stopped.");
        } catch (e: unknown) {
            console.log("Appium server could not be stopped.");
        }
      });

// after('Kill port', () =>{
//     try {
//         console.log("Trying to stop the server...");
//         exec("npx kill-port 4723", (error, stdout, stderr) => {
//             if (error) {
//                 console.log(`error: ${error.message}`);
//                 return;
//             }
//             if (stderr) {
//                 console.log(`stderr: ${stderr}`);
//                 return;
//             }
//             console.log(`stdout: ${stdout}`);
//             console.log("George")
//         });
//         console.log("Success, Server stopped.");
//     } catch (e: unknown) {
//         console.log("Appium server could not be stopped.");
//     }
// }) 
