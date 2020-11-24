
export interface TableRelations {
    id_1: string,
    id_2: string
}

export interface RelationComment {
    id_user: string,
    id_post: string,
    comment: string
}

export class Relations {

    constructor (
        private id_1: string,
        private id_2: string
    ) {}

    getId_1 = (): string => this.id_1
    getId_2 = (): string => this.id_2
}

export class Comment {

    constructor (
        private id_user: string,
        private id_post: string,
        private comment: string
    ) {}

    getId_user = (): string => this.id_user
    getId_post = (): string => this.id_post
    getComment = (): string => this.comment
}