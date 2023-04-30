import { PhoneListItem, PhoneListItems, TestDataSource } from "src/datasources/test.datasource";

export class PhoneBook {
  private datasource: TestDataSource;

  constructor() {
    this.datasource = new TestDataSource();
  }

  async addPhone(name: string, number: string): Promise<PhoneListItem> {
    return this.datasource.add(
      new PhoneListItem({
        name,
        number,
      }),
    );
  }

  async list(): Promise<PhoneListItems> {
    return this.datasource.list();
  }
}
