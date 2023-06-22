import {LeadsPage} from "./Leads";

export class cta {
    createLeadFromCTA() {
       this.clickOnCTAButton();
        cy.get('a[href="/root/newLead?fromSource=cta"]').click();
        return new LeadsPage;
    }
    createJobFromCTA() {
        this.clickOnCTAButton();
        cy.get('a[href="/root/newJob?fromSource=cta"]').click();
        return new jobPage;
    }
    clickOnCTAButton() {
        cy.get('.MainCta__plus___1JlXa').click();
    }

    /// note ido
}