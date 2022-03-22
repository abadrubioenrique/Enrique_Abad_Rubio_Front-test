export class Image_model{
    id= '';
    title= '';
    price= '';
    author= ''; 
    createdAt= '';
    main_attachment= '';
    likes_count= '';
    liked= false;

    constructor(id, title, price, author, createdAt, main_attachment, likes_count, liked) {
        this.id = id;
        this.title=title;
        this.price=price;
        this.author=author;
        this.createdAt=createdAt;
        this.main_attachment=main_attachment;
        this.likes_count=likes_count;
        this.liked=liked;
    }
    
}