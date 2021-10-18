export class response {
  constructor(
    public status: String,
    public body: account
  ) {}
}

export class account {
  constructor(
    public businessName: String,
    public businessId: String,
    public profile: String,
    public activity: Array<Activity>,
    public gps: Array<GPS>,
    public names: String,
    public surnames: String,
    public mail: String,
  ) {
  }

}

export class Activity {
  constructor(
    public timestamp: String,
    public activityTitle: String,
    public description: String
  ) {
  }
}

export class GPS {
  constructor(
    public id: String,
    public clientId: String,
    public clientSecretId: String,
    public isActive: boolean,
    public installed: boolean
  ) {
  }
}
