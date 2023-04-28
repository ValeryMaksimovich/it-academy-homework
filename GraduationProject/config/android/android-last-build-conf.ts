import { config } from '../browserstack-shared-conf.js'
import GetLatestBuild from '../../test/helpers/get-latest-build.js'

config.capabilities = [
    {
        'platformName': 'Android',
        'device': 'Samsung Galaxy S22 Ultra',
        'os_version': '12.0',
        maxInstances: 1,
    }
]

config.services = [['browserstack', {
    app: await new GetLatestBuild().getLatestBuild(0),
    browserstackLocal: false
}]
]

export {config as config}