import { Login, ChangeLanguage, OpenInformationTab, SendLogs, SyncManually, SwitchToggles, DisplayedUserName, DisplayedOnlineStatus, DisplayedUserImage, OpenLinksIn, OpenHelpPageLink} from '../testcases/index.js';


describe('Settings Page Regression', () => {
    Login();
    DisplayedUserImage();
    DisplayedUserName();
    DisplayedOnlineStatus();
    OpenLinksIn();
    SyncManually();
    SwitchToggles(); 
    OpenInformationTab();
    SendLogs();
    OpenHelpPageLink();
    ChangeLanguage();
})