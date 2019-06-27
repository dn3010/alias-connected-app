const { Api: CennznetApi } = require('@cennznet/api');
import { Name, Names, SubscriptionTime } from './types';

export class Api {
  cennznetClient= null

  constructor(cennznetClient) {
    this.cennznetClient = cennznetClient
  }


  getContract() {
    return this.cennznetClient.tx.NameService;
  }


  getQuery() {
    return this.cennznetClient.query.NameService;
  }

  async getAddress(name): Promise<string> {
    // TODO convert to useful type
    return this.getQuery().Address(name);
  }

  async getNames(address): Promise<string[]> {
    // TODO convert to useful type
    const res = await this.getQuery().Names(address);

    return res.toArray().map(n => n.toString());
  }

  async createDomain(name, time){
    throw new Error('Not implemented');
    const tx = this.getContract().create(
      new Name(name),
      new SubscriptionTime(time)
    );

    return this.submitTransaction(tx);
  }


  async updateDomain(name, address) {
    throw new Error('Not implemented');
    const tx = this.getContract().update(
      new Name(name),
      new Address(address)
    );

    return this.submitTransaction(tx);
  }

  async renewDomain(name) {
    throw new Error('Not implemented');
    const tx = this.getContract().renew(
      new Name(name)
    );

    return this.submitTransaction(tx);
  }

  async deleteDomain(name) {
    throw new Error('Not implemented');
    const tx = this.getContract().delete(
      new Name(name)
    );

    return this.submitTransaction(tx);
  }

  async submitTransaction(tx) {

    //TODO
    const keypair = null;
    return new Promise((resolve, reject) => {
      tx.signAndSend(keypair, ({ events = [], status, type }) => {
        if (status.isFinalized) {
          events = events.toJSON();
          for (const event of events) {
            // The type of the event property is an enum where
            // index 0 == ExtrinsicSuccess, and index 1 == ExtrinsicFailure
            // https://github.com/paritytech/substrate/blob/master/srml/system/src/lib.rs#L129-L134
            if (
              event.phase &&
              event.phase.ApplyExtrinsic &&
              event.event.index === '0x0000'
            ) {
              return resolve();
            }
          }
          reject(new Error('Transaction Failed: no successful events'));
        }
      });
    });
  }
}

const create = async (endpoint) => {
  const cennznetApi = await CennznetApi.create({
    provider: endpoint,
    types: [Name, Names, SubscriptionTime]
  });

  return new Api(cennznetApi);
}

export default create
