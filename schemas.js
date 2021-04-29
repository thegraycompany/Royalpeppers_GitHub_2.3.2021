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

class EmployeeTable {
  constructor({
    name,
    partition,
    id = new ObjectId(),
  }) {
    this._partition = partition;
    this._id = id;
    this.name = name;
  }
  static schema = {
    name: "EmployeeTable",
    properties: {
      _id: "objectId",
      _partition: "string?",
      name: "string",
    },
    primaryKey: "_id",
  };
}

class GrowTable {
  constructor({
    Greenhouse,
    Path,
    KopGebroken,
    KopVergeten,
    StrakGedraaid,
    TopNietGedraaid,
    TeKortGetopt,
    VruchtOpDeGrond,
    BloemVruchtEraf,
    PlaagNietGemeld,
    Date,
    Controleur,
    Employee,
    TijdControle,
    partition,
    id = new ObjectId(),
  }) {
    this._partition = partition;
    this._id = id;
    this.Greenhouse = Greenhouse;
    this.Path = Path;
    this.KopGebroken = KopGebroken;
    this.KopVergeten = KopVergeten;
    this.StrakGedraaid = StrakGedraaid;
    this.TopNietGedraaid = TopNietGedraaid;
    this.TeKortGetopt = TeKortGetopt;
    this.VruchtOpDeGrond = VruchtOpDeGrond;
    this.BloemVruchtEraf = BloemVruchtEraf;
    this.PlaagNietGemeld = PlaagNietGemeld;
    this.Date = Date;
    this.Controleur = Controleur;
    this.Employee = Employee;
    this.TijdControle = TijdControle;
  }
  static schema = {
    name: "GrowTable",
    properties: {
      _id: "objectId",
      _partition: "string?",
      Greenhouse: "string",
      Path: "int",
      KopGebroken: "int",
      KopVergeten: "int",
      StrakGedraaid: "int",
      TopNietGedraaid: "int",
      TeKortGetopt: "int",
      VruchtOpDeGrond: "int",
      BloemVruchtEraf: "int",
      PlaagNietGemeld: "int",
      Date: "date",
      Controleur: "string",
      Employee: "string",
      TijdControle: "int",
    },
    primaryKey: "_id",
  };
}

export { Task, EmployeeTable, GrowTable };
