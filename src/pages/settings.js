import React, { useEffect } from "react";
import PageWrapper from "../components/pageWrapper";
import { SettingsSection, SectionItem } from "../components/settingsSection";
import {
  getOrphanedServices,
  getOrphanedLocations,
  getDataLoaded,
} from "../store/selectors";
import ItemListManager from "../components/itemListManager";
import LinkedAccounts from "../components/linkedAccounts";
import DeleteAccount from "../components/deleteAccount";
import setPageTitle from "../utils/pageTitle";
import { connect } from "react-redux";
import { modifyServiceData } from "../store/actions/service-actions";
import { modifyLocationData } from "../store/actions/locations-actions";

function Settings({
  orphanedLocations,
  orphanedServices,
  dataLoaded,
  modifyServiceData, 
  modifyLocationData 
}) {
  useEffect(() => {
    setPageTitle("Settings");
  });

  return (
    <PageWrapper pageTitle="Settings" spacing="4">
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
            removeAction={modifyServiceData}
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
            removeAction={modifyLocationData}
          />
        </SectionItem>
      </SettingsSection>
      <SettingsSection label="Account Settings">
        <SectionItem label="Linked Accounts">
          <LinkedAccounts />
        </SectionItem>
        <SectionItem
          label="Delete Account"
          description="Removes your account and all your service history"
        >
          <DeleteAccount />
        </SectionItem>
      </SettingsSection>
    </PageWrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    orphanedServices: getOrphanedServices(state),
    orphanedLocations: getOrphanedLocations(state),
    dataLoaded: getDataLoaded(state)
  };
};

const mapDispatchToProps = { modifyServiceData, modifyLocationData }

export default connect(mapStateToProps,mapDispatchToProps)(Settings);
