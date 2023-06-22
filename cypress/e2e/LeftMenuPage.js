import {newJobsPage} from "../e2e/NewJobsPage";

export class leftMenuPage {
    clickJobsLabel (){
        cy.get('a[href="/root/jobs"]').click();
        
        return new newJobsPage();
    }
}