import { Inject } from '@nestjs/common';

import { IAppToolkit, APP_TOOLKIT } from '~app-toolkit/app-toolkit.interface';
import { Register } from '~app-toolkit/decorators';
import { PositionFetcher } from '~position/position-fetcher.interface';
import { ContractPosition } from '~position/position.interface';
import { Network } from '~types/network.interface';

import { PerpetualProtocolContractFactory } from '../contracts';
import { PERPETUAL_PROTOCOL_DEFINITION } from '../perpetual-protocol.definition';

const appId = PERPETUAL_PROTOCOL_DEFINITION.id;
const groupId = PERPETUAL_PROTOCOL_DEFINITION.groups.pool.id;
const network = Network.OPTIMISM_MAINNET;

@Register.ContractPositionFetcher({ appId, groupId, network })
export class OptimismPerpetualProtocolPoolContractPositionFetcher implements PositionFetcher<ContractPosition> {
  constructor(
    @Inject(APP_TOOLKIT) private readonly appToolkit: IAppToolkit,
    @Inject(PerpetualProtocolContractFactory)
    private readonly perpetualProtocolContractFactory: PerpetualProtocolContractFactory,
  ) {}

  async getPositions() {
    return [];
  }
}
