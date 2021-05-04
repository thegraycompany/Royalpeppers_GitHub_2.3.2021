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

class HarvestTable {
  constructor({
    Greenhouse,
    Path,
    Sneetje,
    Buts,
    TeBont,
    RafeligeSteel,
    Blad,
    VruchtVergeten,
    KarNietSchoon,
    TeKleinGesneden,
    TeGrootGesneden,
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
    this.Sneetje = Sneetje;
    this.Buts = Buts;
    this.TeBont = TeBont;
    this.RafeligeSteel = RafeligeSteel;
    this.Blad = Blad;
    this.VruchtVergeten = VruchtVergeten;
    this.KarNietSchoon = KarNietSchoon;
    this.TeKleinGesneden = TeKleinGesneden;
    this.TeGrootGesneden = TeGrootGesneden;
    this.Date = Date;
    this.Controleur = Controleur;
    this.Employee = Employee;
    this.TijdControle = TijdControle;
  }
  static schema = {
    name: "HarvestTable",
    properties: {
      _id: "objectId",
      _partition: "string?",
      Greenhouse: "string",
      Path: "int",
      Sneetje: "int",
      Buts: "int",
      TeBont: "int",
      RafeligeSteel: "int",
      Blad: "int",
      VruchtVergeten: "int",
      KarNietSchoon: "int",
      TeKleinGesneden: "int",
      TeGrootGesneden: "int",
      Date: "date",
      Controleur: "string",
      Employee: "string",
      TijdControle: "int",
    },
    primaryKey: "_id",
  };
}

class ScoutTable {
  constructor({
    Greenhouse,
    Path,
    Spint,
    Rups,
    WitteVlieg,
    Trips,
    Luis,
    FruitMot,
    Kevers,
    Fusarium,
    Pythium,
    MineerVlieg,
    Meeldauw,
    Wants,
    Kas,
    Overig,
    Date,
    Controleur,
    TijdControle,
    partition,
    id = new ObjectId(),
  }) {
    this._partition = partition;
    this._id = id;
    this.Greenhouse = Greenhouse;
    this.Path = Path;
    this.Spint = Spint;
    this.Rups = Rups;
    this.WitteVlieg = WitteVlieg;
    this.Trips = Trips;
    this.Luis = Luis;
    this.FruitMot = FruitMot;
    this.Kevers = Kevers;
    this.Fusarium = Fusarium;
    this.Pythium = Pythium;
    this.MineerVlieg = MineerVlieg;
    this.Meeldauw = Meeldauw;
    this.Wants = Wants;
    this.Kas = Kas;
    this.Overig = Overig;
    this.Date = Date;
    this.Controleur = Controleur;
    this.TijdControle = TijdControle;
  }
  static schema = {
    name: "ScoutTable",
    properties: {
      _id: "objectId",
      _partition: "string?",
      Greenhouse: "string",
      Path: "int",
      Spint: "string",
      Rups: "string",
      WitteVlieg: "string",
      Trips: "string",
      Luis: "string",
      FruitMot: "string",
      Kevers: "string",
      Fusarium: "string",
      Pythium: "string",
      MineerVlieg: "string",
      Meeldauw: "string",
      Wants: "string",
      Kas: "string",
      Overig: "string",
      Date: "date",
      Controleur: "string",
      TijdControle: "int",
    },
    primaryKey: "_id",
  };
}

export { Task, EmployeeTable, GrowTable, HarvestTable, ScoutTable };
