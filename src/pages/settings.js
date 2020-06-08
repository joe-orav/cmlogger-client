import React, { useEffect } from "react";
import PageWrapper from "../components/pageWrapper";
import { SettingsSection, SectionItem } from "../components/settingsSection";
import ItemListManager from "../components/itemListManager";
import LinkedAccounts from "../components/linkedAccounts";
import DeleteAccount from "../components/deleteAccount";
import setPageTitle from "../utils/pageTitle";

function Settings() {
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
          <ItemListManager />
        </SectionItem>
        <SectionItem
          label="Remove Orphaned Locations"
          description="Remove any orphaned locations you no longer want listed as an option"
        >
          <ItemListManager />
        </SectionItem>
      </SettingsSection>
      <SettingsSection label="Account Settings">
        <SectionItem label="Linked Accounts">
          <LinkedAccounts accountList={[]} />
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

export default Settings;
