import { SIZE } from "./size.enum";

export class Image_model{
    id= '';
    title= '';
    price= '';
    author= ''; 
    createdAt= '';
    mainAttachment= SIZE.SMALL;
    likesCount= '';
    liked= false;

    constructor(id, title, price, author, createdAt, mainAttachment, likesCount, liked) {
        this.id = id;
        this.title=title;
        this.price=price;
        this.author=author;
        this.createdAt=createdAt;
        this.mainAttachment=mainAttachment;
        this.likesCount=likesCount;
        this.liked=liked;
    }
    
}