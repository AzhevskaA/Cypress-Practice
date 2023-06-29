import { LoginPage } from "../e2e/LoginPage";
import { homePage } from "../e2e/HomePage";
import { leftMenuPage } from "./LeftMenuPage";
import { usefullfunctions } from "./Usefullfunctions";
import { cta } from "../e2e/CTA";
import { LeadsPage } from "./Leads";

describe("Jobs tests", () => {
  let validEmail = "anastasia.azhevskaya+399@workiz.com";
  let usefullfunction = new usefullfunctions();
  let ctaModal = new cta();

  beforeEach(() => {
    cy.visit("/");
    let loginPage = new LoginPage();
    loginPage.login(validEmail, "stagingpass");
    usefullfunction.clearCookies();
  });

  it("go to jobs page and make sure jobs id 100 appear", () => {
    let leftMenupage = new leftMenuPage();
    let jobsPage = leftMenupage.clickJobsLabel();
    jobsPage.serchForJob("100");
    cy.get(".jobs-module__quickJob___3NbDw")
      .contains("100")
      .should("have.text", "100");
  });

  it("create a new lead", () => {
    let leadClientName = usefullfunction.generateText(7);
    let leadPhoneNumber = usefullfunction.generateNumber(10);
    let leadPage = ctaModal.createLeadFromCTA();
    leadPage.fillInDefualtValue();
    leadClientName = usefullfunction.capitalizeFirstLetter(leadClientName);
    cy.get(".cl_link").contains(leadClientName);
  });

  it("create a new lead + tag", () => {
    let leadClientName = usefullfunction.generateText(7);
    let leadPhoneNumber = usefullfunction.generateNumber(10);
    let leadTegName = usefullfunction.generateText(5);
    let leadPage = ctaModal.createLeadFromCTA();
    leadPage.fillInDefualtValue(leadClientName, leadPhoneNumber);
    leadPage.createTag(leadTegName);
    leadPage.openLeadsPage();
    leadPage.verifiedTagName(leadTegName);
  });

  //it ('log in with user which dont exist', () =>{

  // let loginPage = new LoginPage();
  //loginPage.login('anastasia@workiz.com','stagingpass');

  // cy.get('._notify.__error').should('have.text', 'login attempt failed , check user and password');

  //})
  it("regular log out", () => {
    let HomePage = new homePage();
    HomePage.openGear();

    cy.get("a").contains("Log Out").click();
    cy.wait(10000);
    cy.get("h1").contains("Login");
  });
  it("regular log in", () => {
    cy.get(".styles__frameHeader___294SI").should("have.length", 15);
  });
});
