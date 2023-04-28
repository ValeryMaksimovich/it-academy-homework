import {exec} from "node:child_process";
import * as util from "node:util";

const execPromise = util.promisify(exec);

export default class GetLatestBuild {

    private _xApiToken = '83dd867052cebee45c41d7bcc9f8745f3a3f9327';
    private _ownerName = 'undefined'
    private _distributionGroupName = 'E2E_testing';
    private _appName = 'undefined'
    private _downloadURL = 'undefined'
    public static _appURL = 'undefined'

    //deviceType: 0 - Android, 1 - iOS
    public getLatestBuild = async (deviceType: number) => {
        await this.getOwnerName(deviceType);
        await this.getDownloadUrl(this._ownerName, this._appName);
        return await this.uploadBuild(this._downloadURL);
    }

     //Send GET request to get _ownerName and _appName
     //deviceType: 0 - Android, 1 - iOS
    getOwnerName = async (deviceType: number) => {
        const { stdout, stderr } = await execPromise(`curl -sX GET  \"https://api.appcenter.ms/v0.1/apps\" \ -H \"Content-Type: application/json\" \ -H \"X-Api-Token: ${this._xApiToken}\"`);
        if (stdout) {
          let jsonResponse = JSON.parse(stdout);
          this._ownerName = jsonResponse[deviceType].owner.name;
          this._appName = jsonResponse[deviceType].name;
          console.log('Owner name: '+ this._ownerName + '\n' + 'App Name: ' + this._appName);
          return;
        }
        if (stderr) {
          console.log(`stderr: ${stderr}`);
        }
    }

     //Send Get response to get download URL for app
    getDownloadUrl = async (ownerName: string, appName: string) => {
        const { stdout, stderr } = await execPromise(`curl -sX GET \"https://api.appcenter.ms/v0.1/apps/${ownerName}/${appName}/distribution_groups/${this._distributionGroupName}/releases/latest\" \ -H \"Content-Type: application/json\" \ -H \"X-Api-Token: ${this._xApiToken}\"`);
        if (stdout) {
          let jsonResponse = JSON.parse(stdout);
          this._downloadURL = jsonResponse.download_url;
          console.log('Download URL: '+ this._downloadURL);
          return;
        }
        if (stderr) {
          console.log(`stderr: ${stderr}`);
        }
    }

    //Send POST request to get the app url needed for browser stack to install the app
    uploadBuild = async (downloadURL:string) => {
        const { stdout, stderr } = await execPromise(`curl -u \"-" -X POST \"https://api-cloud.browserstack.com/app-automate/upload\" -F \"url=${downloadURL}\"`);
        if (stdout) {
          let jsonResponse = JSON.parse(stdout);
          console.log('App path: '+ GetLatestBuild._appURL);
          return jsonResponse.app_url;
        }
        if (stderr) {
          console.log(`stderr: ${stderr}`);
        }
    }
}