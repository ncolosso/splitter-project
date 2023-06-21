// @ts-ignore
import React from "react";
import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import BillsList from "../components/BillsList.tsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/BillsList">
                <BillsList/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;