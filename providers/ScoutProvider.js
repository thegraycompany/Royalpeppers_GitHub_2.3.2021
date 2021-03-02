import React, { useContext, useState, useEffect, useRef } from "react";
import Realm from "realm";
import { Scout } from "../schemas";
import { useAuth } from "./AuthProvider";

const ScoutContext = React.createContext(null);

const ScoutProvider = ({ children, projectPartition }) => {
  const [scouts, setScout] = useState([]);
  const { user } = useAuth();

  // Use a Ref to store the realm rather than the state because it is not
  // directly rendered, so updating it should not trigger a re-render as using
  // state would.
  const realmRef = useRef(null);

  useEffect(() => {
    const config = {
      sync: {
        user: user,
        partitionValue: projectPartition,
      },
    };
    // open a realm for this particular project
    Realm.open(config).then((projectRealm) => {
      realmRef.current = projectRealm;

      const syncTasks = projectRealm.objects("Scout");
      let sortedScout = syncTasks.sorted("name");
      console.log(test);
      setScout([...sortedScout]);
      sortedScout.addListener(() => {
        setScout([...sortedScout]);
      });
    });

    return () => {
      // cleanup function
      const projectRealm = realmRef.current;
      if (projectRealm) {
        projectRealm.close();
        realmRef.current = null;
        setScout([]);
      }
    };
  }, [user, projectPartition]);

  const sendScoutMistakes = (LocatieScout, KasScout, PadScout, ControleurScout, TijdScout, DatumScout, SpintScout, RupsScout, Witte_VliegScout, TripsScout, LuisScout, Fruit_MotScout, KeversScout, FusariumScout, PythiumScout,
    Mineer_VliegScout, MeeldauwScout, WantsScout, CicadenScout, Kas_OpmerkingScout, OverigScout,) => {
    const projectRealm = realmRef.current;
    projectRealm.write(() => {
      // Create a new task in the same partition -- that is, in the same project.
      projectRealm.create(
        "Scout",
        new Scout({
          partition: projectPartition,
          Locatie: LocatieScout,
          Kas: KasScout,
          Pad: PadScout,
          Controleur: ControleurScout,
          Tijd: TijdScout,
          Datum: DatumScout,
          Spint: SpintScout,
          Rups: RupsScout,
          Witte_Vlieg: Witte_VliegScout,
          Trips: TripsScout,
          Luis: LuisScout,
          Fruit_Mot: Fruit_MotScout,
          Kevers: KeversScout,
          Fusarium: FusariumScout,
          Pythium: PythiumScout,
          Mineer_Vlieg: Mineer_VliegScout,
          Meeldauw: MeeldauwScout,
          Wants: WantsScout,
          Cicaden: CicadenScout,
          Kas_Opmerking: Kas_OpmerkingScout,
          Overig: OverigScout,
        })
      );
    });
  };
  // Render the children within the TaskContext's provider. The value contains
  // everything that should be made available to descendants that use the
  // useTasks hook.
  return (
    <ScoutContext.Provider
      value={{
        sendScoutMistakes,
        scouts,
      }}
    >
      {children}
    </ScoutContext.Provider>
  );
};

const useScouts = () => {
  const scout = useContext(ScoutContext);
  console.log(scout);
  if (scout == null) {
    throw new Error("useScout() called outside of a ScoutProvider?"); // an alert is not placed because this is an error for the developer not the user
  }
  return scout;
};


export { ScoutProvider, useScouts };