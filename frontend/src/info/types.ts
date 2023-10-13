export interface IInfo {
    id: string;
    title?: string;
    text?: string;
    link?: {
        alias?: string;
        to?: string;
    }
}