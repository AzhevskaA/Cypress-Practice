import { usefullfunctions } from "./Usefullfunctions";

export class LeadsPage {
    fillInPhone(phone){
        cy.get('#primary_phone').type(phone);
    }
    fillInClinet(name){
        cy.get('#name').type(name);
    }
    clickCreate(){
        cy.get('.newJob-module__createBtn___15l3R').click();
    }
    createTag(tagName){
        cy.get('.add_tag').click();
        cy.get('#save_tag_txt').type(tagName);
        cy.get('[onclick="SAJ.Tags.saveNew()"]').click();
        cy.get('.saved_tag_sng').contains(tagName).click();
    } 
    verifiedTagName(tagName){
        cy.get('.tag.mid-margin-left.green-bg').contains(tagName);
    }

    openLeadsPage(){
        cy.get('#big-menu').contains('Leads').click();
    }
}