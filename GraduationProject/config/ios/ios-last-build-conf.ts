import {config} from '../browserstack-shared-conf.js'
import GetLatestBuild from '../../test/helpers/get-latest-build.js'

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
    app: await new GetLatestBuild().getLatestBuild(1),
    browserstackLocal: false
}]
]

export {config as config}