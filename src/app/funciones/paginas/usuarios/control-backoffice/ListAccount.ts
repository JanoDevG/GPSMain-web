import {account} from '../../../../models/account';

export class ListAccount {
  constructor(public status: String,
              public body: Array<account>) {
  }
}
