import React, { useEffect } from "react";
import CarGrid from "../comps/car-grid";
import setPageTitle from "./pagetitle";

function Cars() {
    useEffect(() => {
        setPageTitle("My Cars");
    })

    return (
        <div className="row mt-3 pb-4">
            <div className="col-12 mb-4">
                <p className="h3">My Cars</p>
            </div>
            <div className="col-12 mb-4">
                <CarGrid cars={[]} />
            </div>
        </div>
    )
}

export default Cars;