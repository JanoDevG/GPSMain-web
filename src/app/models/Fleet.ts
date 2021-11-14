export class Fleet {
  constructor(public _id: String,
              public businessId: String,
              public gpsAssigned: String,
              public carName: String,
              public patent: String,
              public chassisNumber: String,
              public year: number) {
  }
}

export class ListFleetsResponse {
  constructor(public status: String,
              public body: Array<Fleet>) {

  }
}
