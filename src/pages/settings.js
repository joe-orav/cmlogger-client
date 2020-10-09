import React, { useEffect, useCallback } from "react";
import ProfilePageWrapper from "../components/layouts/profilePageWrapper";
import { SettingsSection, SectionItem } from "../components/settingsSection";
import {
  getOrphanedServices,
  getOrphanedLocations,
  getDataLoaded,
  getDemoModeState,
} from "../store/selectors";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import ItemListManager from "../components/itemListManager";
import LinkedAccounts from "../components/linkedAccounts";
import DeleteAccount from "../components/deleteAccount";
import setPageTitle from "../utils/pageTitle";
import { useSelector, useDispatch } from "react-redux";
import { modifyServiceData } from "../store/actions/service-actions";
import { modifyLocationData } from "../store/actions/locations-actions";

function Settings() {
  const orphanedLocations = useSelector(getOrphanedLocations);
  const orphanedServices = useSelector(getOrphanedServices);
  const dataLoaded = useSelector(getDataLoaded);
  const demoModeEnabled = useSelector(getDemoModeState);
  const dispatch = useDispatch();

  const modifyServiceDataDispatch = useCallback(
    (data, demo) => {
      dispatch(modifyServiceData(data, demo));
    },
    [dispatch]
  );

  const modifyLocationDataDispatch = useCallback(
    (data, demo) => {
      dispatch(modifyLocationData(data, demo));
    },
    [dispatch]
  );

  useEffect(() => {
    setPageTitle("Settings");
  });

  let urlQuery = queryString.parse(useLocation().search);
  let connectionAttempt = urlQuery.addaccount;

  return (
    <ProfilePageWrapper pageTitle="Settings" spacing="4">
      <SettingsSection label="General">
        <SectionItem
          label="Remove Orphaned Services"
          description="Remove any orphaned service items you no longer want listed as an option"
        >
          <ItemListManager
            dataList={orphanedServices.map((item) => {
              return { id: item.id, value: item.sname };
            })}
            dataLoaded={dataLoaded}
            removeAction={modifyServiceDataDispatch}
          />
        </SectionItem>
        <SectionItem
          label="Remove Orphaned Locations"
          description="Remove any orphaned locations you no longer want listed as an option"
        >
          <ItemListManager
            dataList={orphanedLocations.map((item) => {
              return { id: item.id, value: item.name };
            })}
            dataLoaded={dataLoaded}
            removeAction={modifyLocationDataDispatch}
          />
        </SectionItem>
      </SettingsSection>
      {!demoModeEnabled && (
        <SettingsSection label="Account Settings">
          <SectionItem label="Linked Accounts">
            <LinkedAccounts connectionAttempt={connectionAttempt} />
          </SectionItem>
          <SectionItem
            label="Delete Account"
            description="Removes your account and all your service history"
          >
            <DeleteAccount />
          </SectionItem>
        </SettingsSection>
      )}
    </ProfilePageWrapper>
  );
}

export default Settings;
