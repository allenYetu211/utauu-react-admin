import {observable} from 'mobx';

import {ITags} from 'src/interfaces/interface';

class Store {
  @observable public tags : ITags[] = []
}

export  default new Store()