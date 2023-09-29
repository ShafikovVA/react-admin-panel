export default interface IInput{
    inline?: boolean;
    text?: string;
    description?: string;
    required?: boolean;
    children?: string | JSX.Element | JSX.Element[];
}