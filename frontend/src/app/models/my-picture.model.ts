export class MyPicture {
  constructor(
    public imageUrl: string,
    public title: string,
    public description: string,
    public createdDate: Date,
    public likes: number,
    public hates: number
  ) {}
}
