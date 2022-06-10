import { Register } from '~app-toolkit/decorators';
import { appDefinition, AppDefinition } from '~app/app.definition';
import { AppAction, AppTag } from '~app/app.interface';
import { GroupType } from '~app/app.interface';
import { Network } from '~types/network.interface';

export const PERPETUAL_PROTOCOL_DEFINITION = appDefinition({
  id: 'perpetual-protocol',
  name: 'Perpetual protocol',
  description:
    'Perpetual Protocol is an on-chain perpetual futures DEX with deep liquidity and builder-ready composability.',
  url: 'https://perp.com/',
  groups: {
    pool: {
      id: 'pool',
      type: GroupType.POSITION,
      label: 'Pool',
    },
    trade: {
      id: 'trade',
      type: GroupType.POSITION,
      label: 'Trade',
    },
  },

  tags: [AppTag.LIQUIDITY_POOL, AppTag.LIQUID_STAKING, AppTag.PERPETUALS_EXCHANGE, AppTag.STAKING],

  keywords: [],
  links: {
    twitter: '',
    discord: '',
  },

  supportedNetworks: {
    [Network.OPTIMISM_MAINNET]: [AppAction.VIEW],
  },

  primaryColor: '#fff',
  token: {
    address: '0xbC396689893D065F41bc2C6EcbeE5e0085233447',
    network: Network.ETHEREUM_MAINNET,
  },
});

@Register.AppDefinition(PERPETUAL_PROTOCOL_DEFINITION.id)
export class PerpetualProtocolAppDefinition extends AppDefinition {
  constructor() {
    super(PERPETUAL_PROTOCOL_DEFINITION);
  }
}

export default PERPETUAL_PROTOCOL_DEFINITION;
