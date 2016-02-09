// Type definitions for ag-grid v3.3.3
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ceolter/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
import { RowNode } from './entities/rowNode';
import { GridOptions } from './entities/gridOptions';
import EventService from "./eventService";
import { GridApi } from "./gridApi";
import { ColDef } from "./entities/colDef";
export default class GridOptionsWrapper {
    private static MIN_COL_WIDTH;
    private gridOptions;
    private headerHeight;
    init(gridOptions: GridOptions, eventService: EventService): void;
    isRowSelection(): boolean;
    isRowDeselection(): boolean;
    isRowSelectionMulti(): boolean;
    getContext(): any;
    isVirtualPaging(): boolean;
    isShowToolPanel(): boolean;
    isToolPanelSuppressGroups(): boolean;
    isToolPanelSuppressValues(): boolean;
    isRowsAlreadyGrouped(): boolean;
    isGroupSelectsChildren(): boolean;
    isGroupHideGroupColumns(): boolean;
    isGroupIncludeFooter(): boolean;
    isGroupSuppressBlankHeader(): boolean;
    isSuppressRowClickSelection(): boolean;
    isSuppressCellSelection(): boolean;
    isSuppressMultiSort(): boolean;
    isGroupSuppressAutoColumn(): boolean;
    isForPrint(): boolean;
    isSuppressHorizontalScroll(): boolean;
    isSuppressLoadingOverlay(): boolean;
    isSuppressNoRowsOverlay(): boolean;
    getFloatingTopRowData(): any[];
    getFloatingBottomRowData(): any[];
    isUnSortIcon(): boolean;
    isSuppressMenuHide(): boolean;
    getRowStyle(): any;
    getRowClass(): any;
    getRowStyleFunc(): Function;
    getRowClassFunc(): Function;
    getBusinessKeyForNodeFunc(): (node: RowNode) => string;
    getHeaderCellRenderer(): any;
    getApi(): GridApi;
    isEnableColResize(): boolean;
    isSingleClickEdit(): boolean;
    getGroupDefaultExpanded(): number;
    getGroupAggFunction(): (nodes: any[]) => any;
    getRowData(): any[];
    isGroupUseEntireRow(): boolean;
    getGroupColumnDef(): ColDef;
    isGroupSuppressRow(): boolean;
    isAngularCompileRows(): boolean;
    isAngularCompileFilters(): boolean;
    isAngularCompileHeaders(): boolean;
    isDebug(): boolean;
    getColumnDefs(): any[];
    getDatasource(): any;
    isEnableSorting(): boolean;
    isEnableCellExpressions(): boolean;
    isEnableServerSideSorting(): boolean;
    isEnableFilter(): boolean;
    isEnableServerSideFilter(): boolean;
    isSuppressScrollLag(): boolean;
    isSuppressMovableColumns(): boolean;
    isSuppressMovingCss(): boolean;
    getIcons(): any;
    getIsScrollLag(): () => boolean;
    getSortingOrder(): string[];
    getSlaveGrids(): GridOptions[];
    getGroupRowRenderer(): Function | Object;
    getOverlayLoadingTemplate(): string;
    getOverlayNoRowsTemplate(): string;
    getCheckboxSelection(): Function;
    isSuppressAutoSize(): boolean;
    isSuppressParentsInRowNodes(): boolean;
    getHeaderCellTemplate(): string;
    getHeaderCellTemplateFunc(): (params: any) => string | HTMLElement;
    getHeaderHeight(): number;
    setHeaderHeight(headerHeight: number): void;
    isExternalFilterPresent(): boolean;
    doesExternalFilterPass(node: RowNode): boolean;
    getGroupRowInnerRenderer(): (params: any) => void;
    getMinColWidth(): number;
    getMaxColWidth(): number;
    getColWidth(): number;
    getRowBuffer(): number;
    private checkForDeprecated();
    getLocaleTextFunc(): Function;
    globalEventHandler(eventName: string, event?: any): void;
    getRowHeightForVirtualPagiation(): number;
    getRowHeightForNode(rowNode: RowNode): number;
}