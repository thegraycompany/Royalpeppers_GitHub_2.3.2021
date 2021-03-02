import { ObjectId } from "bson";

class Task {
  /**
   *
   * @param {string} name The name of the task
   * @param {string status The status of the task. Default value is "Open"
   * @param {ObjectId} id The ObjectId to create this task with
   */
  constructor({
    name,
    partition,
    status = Task.STATUS_OPEN,
    id = new ObjectId(),
  }) {
    this._partition = partition;
    this._id = id;
    this.name = name;
    this.status = status;
  }

  static STATUS_OPEN = "Open";
  static STATUS_IN_PROGRESS = "InProgress";
  static STATUS_COMPLETE = "Complete";
  static schema = {
    name: "Task",
    properties: {
      _id: "objectId",
      _partition: "string?",
      name: "string",
      status: "string",
    },
    primaryKey: "_id",
  };
}

class Scout {
  /**
   *
   * @param {string} name The name of the task
   * @param {string status The status of the task. Default value is "Open"
   * @param {ObjectId} id The ObjectId to create this task with
   */
  constructor({
    partition,
    id = new ObjectId(),
    Locatie,
    Kas,
    Pad,
    Controleur,
    Tijd,
    Datum,
    Spint,
    Rups,
    Witte_Vlieg,
    Trips,
    Luis,
    Fruit_Mot,
    Kevers,
    Fusarium,
    Pythium,
    Mineer_Vlieg,
    Meeldauw,
    Wants,
    Cicaden,
    Kas_Opmerking,
    Overig,
  }) {
    this._partition = partition;
    this._id = id;
    this.Locatie = Locatie;
    this.Kas = Kas;
    this.Pad = Pad;
    this.Controleur = Controleur;
    this.Tijd = Tijd;
    this.Datum = Datum;
    this.Spint = Spint;
    this.Rups = Rups;
    this.Witte_Vlieg = Witte_Vlieg;
    this.Trips = Trips;
    this.Luis = Luis;
    this.Fruit_Mot = Fruit_Mot;
    this.Kevers = Kevers;
    this.Fusarium = Fusarium;
    this.Pythium = Pythium;
    this.Mineer_Vlieg = Mineer_Vlieg;
    this.Meeldauw = Meeldauw;
    this.Wants = Wants;
    this.Cicaden = Cicaden;
    this.Kas_Opmerking = Kas_Opmerking;
    this.Overig = Overig
  }
  static schema = {
    name: "Scouten",
    properties: {
      _id: "objectId",
      _partition: "string?",
      Locatie: "string",
      Kas: 'int',
      Pad: 'int',
      Controleur: "string",
      Tijd: 'int',
      Datum: Date,
      Spint: 'int',
      Rups: 'int',
      Witte_Vlieg: 'int',
      Trips: 'int',
      Luis: 'int',
      Fruit_Mot: 'int',
      Kevers: 'int',
      Fusarium: 'int',
      Pythium: 'int',
      Mineer_Vlieg: 'int',
      Meeldauw: 'int',
      Wants: 'int',
      Cicaden: 'int',
      Kas_Opmerking: "string",
      Overig: "string",
    },
    primaryKey: "_id",
  };
}

export { Task, Scout };
