import { Register } from '~app-toolkit/decorators';
import { AbstractApp } from '~app/app.dynamic-module';

import { PerpetualProtocolContractFactory } from './contracts';
import { PerpetualProtocolAppDefinition, PERPETUAL_PROTOCOL_DEFINITION } from './perpetual-protocol.definition';

@Register.AppModule({
  appId: PERPETUAL_PROTOCOL_DEFINITION.id,
  providers: [PerpetualProtocolAppDefinition, PerpetualProtocolContractFactory],
})
export class PerpetualProtocolAppModule extends AbstractApp() {}
