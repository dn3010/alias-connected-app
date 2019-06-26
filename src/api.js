const { Api: CennznetApi } = require('@cennznet/api');

export class Api {
  cennznetClient= null

  constructor(cennznetClient) {
    this.cennznetClient = cennznetClient
  }




  async createDomain(name, time, address){
    throw new Error('Not implemented');
  }

  async readDomain(name) {
    throw new Error('Not implemented');
  }

  async updateDomain(name, address) {
    throw new Error('Not implemented');
  }

  async renedDomain(name) {
    throw new Error('Not implemented');
  }

  async deleteDomain(name) {
    throw new Error('Not implemented');
  }
}

const create = async (endpoint) => {
  const cennznetApi = await CennznetApi.create({ provider: endpoint });

  return new Api(cennznetApi);
}

export default create
