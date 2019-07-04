export class Person {
    public name: string;
    public lastname : string;
    public city: string;
    public imagePath: string;

    constructor(name: string, lname: string, city: string, imagePath: string ) {
        this.name = name;
        this.lastname = lname;
        this.city = city;
        this.imagePath = imagePath;
    }
}