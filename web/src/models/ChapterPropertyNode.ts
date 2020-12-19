export default class ChapterPropertyNode {
  _id?: string;
  Title: string;
  Description: string;
  Type: String;
  IsMainLevel: Boolean;
  PercentCompleted: Number;
  Parent: String;
  Children: String[];
  Links: String[];

  constructor(
    _id = undefined,
    Title = "",
    Description = "",
    Type = "",
    IsMainLevel = true,
    PercentCompleted = 0,
    Parent = "",
    Children = [],
    Links = []
  ) {
    this._id = _id;
    this.Title = Title;
    this.Description = Description;
    this.Type = Type;
    this.IsMainLevel = IsMainLevel;
    this.PercentCompleted = PercentCompleted;
    this.Parent = Parent;
    this.Children = Children;
    this.Links = Links;
  }
}
