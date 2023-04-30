export class PhoneListItem {
  id: string;
  name: string;
  number: string;

  constructor(data?: Partial<PhoneListItem>) {
    this.id = data?.id ?? "";
    this.number = data?.number ?? "";
    this.name = data?.name ?? "";
  }
}
export type PhoneListItems = PhoneListItem[];

export class TestDataSource {
  private _list: PhoneListItems = [{
    id: "1",
    name: "a",
    number: "b",
  }];

  async add(item: PhoneListItem): Promise<PhoneListItem> {
    item.id = String(this._list.length + 1);
    this._list.push(item);
    return item;
  }

  async edit(id: string, item: PhoneListItem): Promise<PhoneListItem> {
    const index = this._list.findIndex((x) => x.id === id);
    this._list.splice(index, 1, item);
    return item;
  }

  async remove(id: string): Promise<void> {
    const index = this._list.findIndex((x) => x.id === id);
    this._list.splice(index, 1);
  }

  async list(): Promise<PhoneListItems> {
    return this._list;
  }
}
