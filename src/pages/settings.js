import React, { useState, useEffect } from "react";
import DeleteModal from "../comps/delete-modal";
import connectCheck from "../img/connect-check.svg";
import { connect } from "react-redux";
import { getOrphanedServices, getOrphanedLocations, getUser } from "../store/selectors";
import { modifyServiceData } from "../store/actions/service-actions";
import { modifyLocationData } from "../store/actions/locations-actions";
import { disconnectAccount, deleteAccount } from "../store/actions/user-actions";
import { useLocation } from "react-router-dom";
import queryString from 'query-string';
import setPageTitle from "./pagetitle";

const SettingsSectionHeader = (props) => {
    return (
        <div className="sec-head-ctr">
            <p className="stg-sec-header">{props.title}</p>
            <hr />
        </div>
    )
}

const SectionRow = (props) => {
    return (
        <div className="section-items-row">
            <div className="section-item-label">
                <p>{props.label}</p>
            </div>
            <div className="section-item-content">
                {props.children}
            </div>
        </div>
    )
}

const ServiceItems = ({ orphanedServices, modifyServiceData }) => {
    const [services, setServices] = useState(orphanedServices);
    const [selectedServiceItems, setSelectedServiceItems] = useState([]);
    const [saveDisabled, setSaveDisabled] = useState(true);
    const [removeDisabled, setRemoveDisabled] = useState(false);

    function handleItemSelection(e) {
        let optionsList = Object.assign({}, e.target.options);
        let selectedValues = [];

        for (let option in optionsList) {
            if (optionsList[option].selected) {
                selectedValues.push(optionsList[option].value);
            }
        }

        setSelectedServiceItems(selectedValues.map((v) => parseInt(v)));
    }

    function handleServiceItemRemoval() {
        setServices(services =>
            services.filter(serviceItem => selectedServiceItems.indexOf(serviceItem.id) === -1)
        );

        setSaveDisabled(selectedServiceItems.length === 0);
        setRemoveDisabled(selectedServiceItems.length !== 0);
    }

    function handleServiceItemDeletion() {
        modifyServiceData(selectedServiceItems);
        setSaveDisabled(true);
        setRemoveDisabled(false);
        setSelectedServiceItems([])
    }

    return (
        <>
            <select className="service-select" multiple onChange={handleItemSelection} disabled={removeDisabled}>
                {services.map((si) => <option key={si.id} value={si.id}>{si.sname}</option>)}
            </select>
            <button type="button" className="btn btn-danger mt-2" disabled={removeDisabled} onClick={handleServiceItemRemoval}>Remove</button>
            <button type="button" className="btn btn-primary ml-2 mt-2" disabled={saveDisabled} onClick={handleServiceItemDeletion}>Save</button>
            <p className="sec-content-desc">Remove any orphaned service items you no longer want listed as an option</p>
        </>
    )
}

const LocationItems = ({ orphanedLocations, modifyLocationData }) => {
    const [locations, setLocations] = useState(orphanedLocations);
    const [selectedLocations, setSelectedLocations] = useState([]);
    const [saveDisabled, setSaveDisabled] = useState(true);
    const [removeDisabled, setRemoveDisabled] = useState(false);

    function handleItemSelection(e) {
        let optionsList = Object.assign({}, e.target.options);
        let selectedValues = [];

        for (let option in optionsList) {
            if (optionsList[option].selected) {
                selectedValues.push(optionsList[option].value);
            }
        }

        setSelectedLocations(selectedValues.map((v) => parseInt(v)));
    }


    function handleLocationItemRemoval() {
        setLocations(locations =>
            locations.filter(location => selectedLocations.indexOf(location.id) === -1)
        );

        setSaveDisabled(selectedLocations.length === 0);
        setRemoveDisabled(selectedLocations.length !== 0);
    }

    function handleLocationItemDeletion() {
        modifyLocationData(selectedLocations);
        setSaveDisabled(true);
        setRemoveDisabled(false);
        setSelectedLocations([])
    }

    return (
        <>
            <select className="service-select" multiple onChange={handleItemSelection} disabled={removeDisabled}>
                {locations.map((loc) => <option key={loc.id} value={loc.id}>{loc.name}</option>)}
            </select>
            <button type="button" className="btn btn-danger mt-2" disabled={removeDisabled} onClick={handleLocationItemRemoval}>Remove</button>
            <button type="button" className="btn btn-primary ml-2 mt-2" disabled={saveDisabled} onClick={handleLocationItemDeletion}>Save</button>
            <p className="sec-content-desc">Remove any orphaned locations you no longer want listed as an option</p>
        </>
    )
}

const LinkedAccountsSection = (props) => {
    let showDisconnectButton = props.googleConnected && props.facebookConnected;

    function handleAccountDisconnection(e, authProvider) {
        e.preventDefault();
        props.disconnectAccount({ userId: props.id, authProvider: authProvider })
    }

    return (
        <div className="social-accounts-list">
            <div className="social-account-item">
                <p className="account-provider">Google</p>
                {props.googleConnected ?
                    <div className="connect-status">
                        <span className="icon-ctr"><img className="img-fluid" src={connectCheck} alt="Connected" /></span>
                        {showDisconnectButton && <span className="connect-link-ctr">(<a className="connect-link" href="#/" onClick={(e) => handleAccountDisconnection(e, "google")}>Disconnect</a>)</span>}
                    </div> :
                    <p className="connect-link-ctr">(<a className="connect-link" href="/auth/google">Connect</a>)</p>
                }
            </div>
            <div className="social-account-item">
                <p className="account-provider">Facebook</p>
                {props.facebookConnected ?
                    <div className="connect-status">
                        <span className="icon-ctr"><img className="img-fluid" src={connectCheck} alt="Connected" /></span>
                        {showDisconnectButton && <span className="connect-link-ctr">(<a className="connect-link" href="#/" onClick={(e) => handleAccountDisconnection(e, "facebook")}>Disconnect</a>)</span>}
                    </div> :
                    <p className="connect-link-ctr">(<a className="connect-link" href="/auth/fb">Connect</a>)</p>
                }
            </div>
            {props.addSecondAccountStatus === false && <p className="text-danger">Error: There is already a profile associated with the account you want to connect</p>}
        </div>
    )
}

function Settings(props) {
    let queryValues = queryString.parse(useLocation().search);

    useEffect(() => {
        setPageTitle("Settings");
    })

    return (
        <div className="row mt-3 pb-4 pl-2">
            <div className="col-12 mb-4">
                <p className="h3">Settings</p>
            </div>
            <SettingsSectionHeader title="General" />
            <div className="section-items">
                <SectionRow label="Remove Orphaned Services">
                    <ServiceItems orphanedServices={props.orphanedServices} modifyServiceData={props.modifyServiceData} />
                </SectionRow>
                <SectionRow label="Remove Orphaned Locations">
                    <LocationItems orphanedLocations={props.orphanedLocations} modifyLocationData={props.modifyLocationData} />
                </SectionRow>
            </div>
            <SettingsSectionHeader title="Account Settings" />
            <div className="section-items">
                <SectionRow label="Linked Accounts">
                    <LinkedAccountsSection {...props.user} disconnectAccount={props.disconnectAccount} addSecondAccountStatus={queryValues.addaccount === "true" || queryValues.addaccount === undefined} />
                </SectionRow>
                <SectionRow label="Delete Account">
                    <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#delete-modal">Delete Account</button>
                    <p className="sec-content-desc">Removes your account and all your service history</p>
                </SectionRow>
            </div>
            <DeleteModal
                title="Delete Account"
                message="Are you sure want to delete your account? All your data will also be removed and will not be recoverable!"
                deleteAction={() => props.deleteAccount({ userId: props.user.id })}
            />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        orphanedServices: getOrphanedServices(state),
        orphanedLocations: getOrphanedLocations(state),
        user: getUser(state)
    }
}

const mapDispatchToProps = { modifyServiceData, modifyLocationData, disconnectAccount, deleteAccount }

export default connect(mapStateToProps, mapDispatchToProps)(Settings);