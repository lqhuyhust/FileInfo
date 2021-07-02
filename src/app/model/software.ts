export class Software {
    id!: number;
    name!: string;
    icon!: string;
    type: string | undefined;
    popularity!: number;
    category_id!: number;
    format_id!: string;
    info: string | undefined;
    more_info: string | undefined;
    about: string | undefined;
    programs!: Array<number>;
    update: string | undefined;
}