export class GroupItems {
    title?: string;
    text?: string;
    imgUrl?: string;
    link?: string;

    constructor(title: string, text: string, imgUrl: string, link: string) {
        this.title = title;
        this.text = text;
        this.imgUrl = imgUrl;
        this.link = link;
    }
}