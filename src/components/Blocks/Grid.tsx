import { useState, MouseEvent } from "react";
import { Popper, Fade, Box, Skeleton } from "@mui/material";
import Checkbox from "../Inputs/Checkbox";
import DeleteIcon from "../../assets/images/icons/TrashIcon";
import EditIcon from "../../assets/images/icons/PencilSquareIcon";
import GridSkeleton from "./Skeletons/GridSkeleton";

export interface LayoutProps{
    model?: object | object[],
    tools?: boolean, 
    columnConfigure?: boolean,
}

function Grid(props: LayoutProps){
    const { 
        model, 
        tools, 
        columnConfigure 
    } = props;

    const skeletonCondition = !model || !( Array.isArray(model) && model.length === 0);

    const [columnSettingsAnchor, setColumnSettingsAnchor] = useState<null|(EventTarget & Element)>(null);
    const [rowActionsAnchor, setRowActionsAnchor] = useState<null|(EventTarget & Element)>(null);
    const [actionButton, setActionButton] = useState<null|EventTarget & Element>(null);

    const openColumnSettings = Boolean(columnSettingsAnchor);
    const openRowAction = Boolean(rowActionsAnchor);
    const id = openColumnSettings ? "transitions-popper" : undefined;
    const actionsPopover = openRowAction ? "actions-popover" : undefined;

    // let actionButton:null|EventTarget & Element = null;

    const handleClick = (event: MouseEvent): void => {
        setColumnSettingsAnchor(columnSettingsAnchor ? null : event.currentTarget);
    };
    const handleClick1 = (event: MouseEvent): void => {
        console.log(rowActionsAnchor);
        if(event.currentTarget === actionButton){
            setRowActionsAnchor(rowActionsAnchor ? null : event.currentTarget);
        }
        else{
            // setAnchorEl1(null);
            setRowActionsAnchor(event.currentTarget);
        }
        setActionButton(event.currentTarget);
    };

    return(
        <Box className="grid">
            <table>
                {
                    !skeletonCondition &&  
                        <GridSkeleton/>
                }       
                {
                    skeletonCondition &&
                    <>  
                    <thead>
                        <tr>
                            <td>Hi, I'm your first cell. </td>
                            <td>I'm your second cell.</td>
                            <td>I'm your third cell.</td>
                            <td>I'm your fourth cell.</td>
                            {tools &&
                                <td>Действия</td>
                            }
                        </tr>
                    </thead>
                    <tbody>
                        <tr>    
                            <td>Hi, I'm your first cell.</td>
                            <td>I'm your second cell.</td>
                            <td>I'm your third cell.</td>
                            <td>I'm your fourth cell.</td>
                            {tools &&
                                <td>
                                    <button aria-describedby={actionsPopover} onClick={handleClick1}>...</button>
                                </td>
                            }
                        </tr>
                        <tr>    
                            <td>Hi, I'm your first cell.</td>
                            <td>I'm your second cell.</td>
                            <td>I'm your third cell.</td>
                            <td>I'm your fourth cell.</td>
                            {tools &&
                                <td>
                                    <button aria-describedby={actionsPopover} onClick={handleClick1}>...</button>
                                </td>
                            }
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                        {columnConfigure &&
                            <>
                            <td ><button aria-describedby={id} onClick={handleClick}  className="configureColumn">настроить колонки</button></td>
                            <Popper id={id} open={openColumnSettings} anchorEl={columnSettingsAnchor} transition>
                                {({ TransitionProps }) => (
                                    <Fade {...TransitionProps}>
                                    <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
                                        <Checkbox inline checked text="Первая колонка"></Checkbox>
                                        <Checkbox inline checked text="Вторая колонка"></Checkbox>
                                        <Checkbox inline checked text="Третья колонка"></Checkbox>
                                        <Checkbox inline checked text="Четвертая колонка"></Checkbox>
                                    </Box>
                                    </Fade>
                                )}
                            </Popper> 
                            </>
                        }
                        </tr>
                    </tfoot>
                    </>
                }
            </table>
            <Popper id={actionsPopover} open={openRowAction} anchorEl={rowActionsAnchor} transition>
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps}>
                    <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
                        <Box className="button-group">
                            <button className="transparent"><EditIcon></EditIcon> Изменить</button>
                            <button className="danger"><DeleteIcon></DeleteIcon> Удалить</button>
                        </Box>
                    </Box>
                    </Fade>
                )}
            </Popper> 
        </Box>
    )
}

export default Grid;