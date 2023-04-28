type deviceType = {deviceName: string; }

export default class DeviceType {

    device: deviceType | undefined;

    getDeviceType(device: deviceType): void {
        this.device = device;
    }

}