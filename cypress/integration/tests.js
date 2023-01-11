describe("checking for nav tag with an unordered list which contains navbar links", () => {
    it("checking for nav tag with an unordered list which contains navbar links", () => {
        cy.visit("http://127.0.0.1:5500/");
        cy.get("nav");
        cy.get("nav").within(() => {
            cy.get("ul");
            cy.get("ul>li").each(($el) => {
                cy.wrap($el).within(() => {
                    cy.get("a");
                });
            });
            cy.get("ul>li").should("have.length", 4);
        });
    });
});

describe("check for header", () => {
    it("check for header", () => {
        cy.visit("http://127.0.0.1:5500/");
        cy.get("header");
        cy.get("header").within(() => {
            cy.get("h1");
        });
    });
});

describe("checking for blog text content", () => {
    it("checking for blog text content", () => {
        cy.visit("http://127.0.0.1:5500/");

        cy.get("main").within(() => {
            cy.get("section");
            cy.get("#Blog").within(() => {
                cy.get("#blog-content");
            });
        });
    });
});

describe("checking for flag image", () => {
    it("checking for flag image", () => {
        cy.visit("http://127.0.0.1:5500/");
        cy.get("main").within(() => {
            cy.get("figure");
            cy.get("figure").within(() => {
                cy.get("img");
                cy.get("img")
                    .invoke("attr", "src")
                    .should(
                        "eq",
                        "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/967c2ad2aeb341ecba3edb91fe56d7e7.jpg"
                    );
                cy.get("figcaption");
            });
        });
    });
});

describe("checking for the aside tag and its content", () => {
    it("checking for the aside tag and its content", () => {
        cy.visit("http://127.0.0.1:5500/");
        cy.get("main").within(() => {
            cy.get("aside");
            cy.get("aside").within(() => {
                cy.get("p");
                cy.get("ol");
                cy.get("ol").within(() => {
                    cy.get("li");
                });
            });
        });
    });
});

describe("checking for media", () => {
    it("checking for media", () => {
        cy.visit("http://127.0.0.1:5500/");
        cy.get("main").within(() => {
            cy.get("#media").within(() => {
                cy.get("article");
                cy.get("article").within(() => {
                    cy.get("h2");
                    cy.get("p");
                });
                cy.get("video");
                cy.get("video")
                    .invoke("attr", "src")
                    .should(
                        "eq",
                        "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/60555de88e1b46ae91e333bf12d51f18.mp4"
                    );
                cy.get("embed");
                cy.get("embed")
                    .invoke("attr", "src")
                    .should(
                        "eq",
                        "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/0f97a4a619b74e80a9708d35df0781c5.jpg"
                    );
                cy.get("audio");
                cy.get("audio")
                    .invoke("attr", "src")
                    .should(
                        "eq",
                        "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/c3d9722a72ce4e98a472dc60b42e301a.mp3"
                    );
            });
        });
    });
});

// test canses for forms

describe("checking for the 'Contact Me' form", () => {
    it("checking for the 'Contact Me' form", () => {
        cy.visit("http://127.0.0.1:5500/");

        cy.get("#contact-me").within(() => {
            cy.get("select");
            cy.get("select").should("have.attr", "required");

            cy.get("#name");
            cy.get("#name").should("have.attr", "required");
            cy.get("input[placeholder='Name']");

            cy.get("#surname");
            cy.get("#surname").should("have.attr", "required");
            cy.get("input[placeholder='Surname']");

            cy.get("#email");
            cy.get("#email").should("have.attr", "required");
            cy.get("input[placeholder='Email']");

            cy.get("#phone");
            cy.get("#phone").should("have.attr", "required");
            cy.get("input[placeholder='Phone']");

            cy.get("#message");
            cy.get("#message").should("have.attr", "required");
            cy.get("textarea[placeholder='Message']");

            cy.get("#button");
            cy.get("button").invoke("attr", "type").should("eq", "submit");
        });
    });
});

// footer

describe("check for footer", () => {
    it("check for footer", () => {
        cy.get("#about");
        cy.get("#about").within(() => {
            cy.get("#name");
            cy.get("#contact");
        });
    });
});
