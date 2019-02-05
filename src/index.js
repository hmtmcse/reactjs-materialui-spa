import React from 'react';
import ReactDOM from 'react-dom';
import UrlMapping from "./components/experiment/url-map/url-mapping";
import {LayoutRouter} from "./config/router";
import FormValidationExample from "./components/experiment/form-validation/form-validation-example";
import DatePickerEx1 from "./components/experiment/datepicket/date-picker-ex1";
import AtlassianDragAndDrop from "./components/experiment/drag-and-drop/atlassian-drag-and-drop";
import AtlassianDragAndDropMui from "./components/experiment/drag-and-drop/atlassian-drag-and-drop-mui";
import RecipeReviewCardSimple from "./components/experiment/collapse-expanded/recipe-review-card-simple";
import AtlassianDragAndDropNested from "./components/experiment/drag-and-drop/atlassian-drag-and-drop-nested";
import {SimpleMenu} from "./components/experiment/menu/simple-menu";
import ReactSelectMaterialUi from "./components/experiment/miscellaneous/react-select-material-ui";
import RaSelectTest from "./components/experiment/miscellaneous/ra-select-test";

ReactDOM.render(<RaSelectTest/>, document.getElementById('root'));
// ReactDOM.render(<ReactSelectMaterialUi/>, document.getElementById('root'));
// ReactDOM.render(<AdvanceSelect/>, document.getElementById('root'));
// ReactDOM.render(<SimpleMenu/>, document.getElementById('root'));
// ReactDOM.render(<AtlassianDragAndDropNested/>, document.getElementById('root'));
// ReactDOM.render(<RecipeReviewCardSimple/>, document.getElementById('root'));
// ReactDOM.render(<AtlassianDragAndDropMui/>, document.getElementById('root'));
// ReactDOM.render(<DatePickerEx1/>, document.getElementById('root'));
// ReactDOM.render(<FormValidationExample/>, document.getElementById('root'));
// ReactDOM.render(<LayoutRouter/>, document.getElementById('root'));
// ReactDOM.render(<UrlMapping/>, document.getElementById('root'));
