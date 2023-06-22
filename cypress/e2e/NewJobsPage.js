export class newJobsPage {
serchForJob(jobId) {
    cy.get('#searchString').type(jobId);
    
}
}