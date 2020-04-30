// Purpose: An abstract factory that determines the family of products/settings being used by an Export. 

export default interface ExportFactory {
  createHeader(): String[];
  createEncoding(): String;
}