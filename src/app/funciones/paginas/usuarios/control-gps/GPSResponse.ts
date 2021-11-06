import {GPS} from '../../../../models/account';

export class GPSResponse {
  constructor(public status: String,
              public body: Array<GPS>) {
  }
}
