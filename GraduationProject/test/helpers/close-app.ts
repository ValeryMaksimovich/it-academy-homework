import { exec } from 'child_process'

class CloseApp {
    public async closeApp() {
        driver.closeApp();
        await driver.pause(1000)
        console.log("App closed!")
    }

    public killApp() {
        try {
            console.log("Trying to stop the server...");
        exec("npx kill-port 4723", (error, stdout, stderr) => {
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
    }catch (e: unknown) {
                console.log("Appium server could not be stopped.");
            }
    }
}

export default new CloseApp