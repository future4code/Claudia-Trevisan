export enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
}
 
export interface CreatePostInput {
    photo: string,
    description: string,
    type: POST_TYPES
}

export class PostInput {

    private type: POST_TYPES = POST_TYPES.NORMAL

    constructor (
        private id: string,
        private photo: string,
        private description: string,
        type: string,
        private authorId: string
        ) {
            if(type.toLowerCase() === POST_TYPES.NORMAL){
                this.type = POST_TYPES.NORMAL
            } else if(type.toLowerCase() === POST_TYPES.EVENT){
                this.type = POST_TYPES.EVENT
            } else{
                throw new Error("Envie um Type Post válido. Os valores válidos são NORMAL OU EVENT");
            }
        }
    
    public getId = (): string => this.id
    public getPhoto = (): string => this.photo
    public getDescription = (): string => this.description
    public getType = (): POST_TYPES => this.type
    public getAuthorId = (): string => this.authorId
}


export class Post {

    private type: POST_TYPES = POST_TYPES.NORMAL
    result: any;

    constructor (
        private id: string,
        private photo: string,
        private description: string,
        type: string,
        private createdAt: Date,
        private authorId: string
        ) {
            if(type.toLowerCase() === POST_TYPES.NORMAL){
                this.type = POST_TYPES.NORMAL
            } else if(type.toLowerCase() === POST_TYPES.EVENT){
                this.type = POST_TYPES.EVENT
            } else{
                throw new Error("Envie um Type Post válido. Os valores válidos são NORMAL OU EVENT");
            }
        }

        public static toPostModel = (post: any): Post =>{
            return new Post (
                post.id,
                post.photo,
                post.description,
                post.type,
                post.created_at,
                post.author_id
            )
        }
    
    public getId = (): string => this.id
    public getPhoto = (): string => this.photo
    public getDescription = (): string => this.description
    public getType = (): POST_TYPES => this.type
    public getCreatedAt = (): Date => this.createdAt
    public getAuthorId = (): string => this.authorId
}


 