import {ReactNode} from 'react';

export default interface IInput{
    inline?: boolean;
    text?: string;
    description?: string;
    required?: boolean;
    children?: ReactNode;
}