//import DeviceType from "../device.type.js"

class LocatorsLoginPage {

    public static inputUsername (deviceName: string) {  return $('id:com.elearningforce.LMS:id/LoginEntry'); }

    private get inputPassword () { return $('android.widget.EditText'); }

    private get logInButton () { return $('id:com.elearningforce.LMS:id/LoginButton'); }

    private get signInButton() { 
        const selector = 'new UiSelector().text("Sign in").className("android.widget.Button")'
        return $(`android=${selector}`); 
    }
}

export default new LocatorsLoginPage();