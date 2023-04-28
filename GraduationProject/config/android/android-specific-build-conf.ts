import { join } from 'path'
import { config } from '../browserstack-shared-conf.js'

config.capabilities = [
    {
        'platformName': 'Android',
        'device': 'Samsung Galaxy S22 Ultra',
        'os_version': '12.0',
        maxInstances: 1,
    }
]

config.services = [['browserstack', {
    app: join(process.cwd(), 'apps/android/LMS_2.29.2.apk'),
    browserstackLocal: false
}]
]

export {config as config}