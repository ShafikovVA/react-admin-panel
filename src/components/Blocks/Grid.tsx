import { useState, MouseEvent } from "react";
import { Popper, Fade, Box } from "@mui/material";
import Checkbox from "../Inputs/Checkbox";
import DeleteIcon from "../../assets/images/icons/Trash.svg?react";
import EditIcon from "../../assets/images/icons/Pencil Square.svg?react";

export interface LayoutProps{
    model?: object | object[],
    tools?: boolean, 
    columnConfigure?: boolean, 
}

function Grid(props: LayoutProps){
    const [columnSettingsAnchor, setColumnSettingsAnchor] = useState<null|(EventTarget & Element)>(null);
    const [anchorEl1, setAnchorEl1] = useState<null|(EventTarget & Element)>(null);
    const [actionButton, setActionButton] = useState<null|EventTarget & Element>(null);

    const open = Boolean(columnSettingsAnchor);
    const open1 = Boolean(anchorEl1);
    const id = open ? "transitions-popper" : undefined;
    const actionsPopover = open1 ? "actions-popover" : undefined;

    // let actionButton:null|EventTarget & Element = null;

    const handleClick = (event: MouseEvent): void => {
        setColumnSettingsAnchor(columnSettingsAnchor ? null : event.currentTarget);
    };
    const handleClick1 = (event: MouseEvent): void => {
        console.log(anchorEl1);
        if(event.currentTarget === actionButton){
            setAnchorEl1(anchorEl1 ? null : event.currentTarget);
        }
        else{
            // setAnchorEl1(null);
            setAnchorEl1(event.currentTarget);
        }
        setActionButton(event.currentTarget);
    };

    return(
        <div className="grid">
            <table>
                <thead>
                    <tr>
                        <td>Hi, I'm your first cell. </td>
                        <td>I'm your second cell.</td>
                        <td>I'm your third cell.</td>
                        <td>I'm your fourth cell.</td>
                        {props.tools &&
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
                        {props.tools &&
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
                        {props.tools &&
                             <td>
                                <button aria-describedby={actionsPopover} onClick={handleClick1}>...</button>
                             </td>
                        }
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                    {props.columnConfigure &&
                        <>
                        <td ><button aria-describedby={id} onClick={handleClick}  className="configureColumn">настроить колонки</button></td>
                        <Popper id={id} open={open} anchorEl={columnSettingsAnchor} transition>
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
            </table>
            <Popper id={actionsPopover} open={open1} anchorEl={anchorEl1} transition>
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps}>
                    <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
                        <div className="button-group">
                            <button className="transparent"><EditIcon></EditIcon> Изменить</button>
                            <button className="danger"><DeleteIcon></DeleteIcon> Удалить</button>
                        </div>
                    </Box>
                    </Fade>
                )}
            </Popper> 
        </div>
    )
}

export default Grid;