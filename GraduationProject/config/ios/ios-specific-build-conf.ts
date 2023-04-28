import { join } from 'path'
import {config} from '../browserstack-shared-conf.js'

config.capabilities = [
    {
        'platformName': 'iOS',
        'deviceName': 'iPhone 11 Pro Max',
        'platformVersion': '16.2',
        'automationName': 'XCUITest',
        maxInstances: 1,
    }
]

config.services = [['browserstack', {
    app: join(process.cwd(), 'apps/ios/LMSiOS_2.29.2.ipa'),
    browserstackLocal: false
}]
]

export {config as config}