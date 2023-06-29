import { usefullfunctions } from "./Usefullfunctions";

export class LeadsPage {
  fillInPhone(phone) {
    cy.get("#primary_phone").type(phone);
  }
  fillInClinet(name) {
    cy.get("#name").type(name);
  }
  clickCreate() {
    cy.get(".newJob-module__createBtn___15l3R").click();
  }
  createTag(tagName) {
    cy.get(".header-module__addTag___3uR5l").click();
    cy.get(".objectTags-module__link___266ge").click()
    cy.get('#tag_name').type(tagName);
    cy.get(".button-module__container___i9TLF").contains('Save').click();
    cy.get('.tag').contains(tagName).click();
  }
  verifiedTagName(tagName) {
    cy.get(".tag.mid-margin-left.green-bg").contains(tagName);
  }

  openLeadsPage() {
    cy.get("#big-menu").contains("Leads").click();
  }

  fillInDefualtValue(clientName, phoneNumber) {
    this.fillInPhone(clientName);
    this.fillInClinet(phoneNumber);
    this.clickCreate();
  }
}
