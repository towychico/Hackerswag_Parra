import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import NavBarCategory from "../components/navBarCategory/NavBarCategory";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/NavBarCategory">
                <NavBarCategory/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;