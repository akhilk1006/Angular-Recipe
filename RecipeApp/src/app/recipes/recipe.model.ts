export class Recipe {
   public name: string;
   public description: string;
   public imagePath: string;
   constructor(name?: string, desc?: string, imagePath?: string){
    if(name)
        this.name = name;
    if(desc)
        this.description = desc;
    if(imagePath)
        this.imagePath = imagePath;
   }
}