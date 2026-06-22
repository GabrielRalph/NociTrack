import { NociCMS } from "../src/noci-cms.js";
import * as firebase from "../src/Utilities/firebase.js";
import { LoginPage } from "../src/UI/loginPage/login-page.js";
import { setImageSourceResolver } from "../src/DataModels/models.js";

setImageSourceResolver((s) => {
    if (s.startsWith("http://") || s.startsWith("https://")) {
        return s;
    }
    return new URL("../" + s, import.meta.url).href;
})

async function load() {
    console.log("Loading");
    NociCMS.define();
    LoginPage.define();
    window.signOut = firebase.signOut;
    const cms = document.querySelector("noci-cms");
    cms.header.styles = {
        display: "grid",
        "grid-template-columns": "1fr auto",
        "align-items": "center",
    };
    cms.header.createChild("button", {
        content: "Sign Out",
        styles: {"margin-right": "1em"},
        events: {
            click: () => {
                firebase.signOut();
            }
        }
    });

    cms.onSave = async (key, data) => {
        await firebase.set(firebase.ref("noci-track/assessments/" + key), data);
    }

    cms.onDelete = async (key) => {
        // promt for confirmation
        if (confirm("Are you sure you want to delete this item? This action cannot be undone.")) {
            await firebase.set(firebase.ref("noci-track/assessments/" + key), null);
        }
    }

    let oldListener = null;

    let [user] = await Promise.all([
        new Promise(r => {
            firebase.addAuthChangeListener(user => {
                document.body.toggleAttribute("show-login", !user);
                if (oldListener) {
                    oldListener();
                    oldListener = null;
                }
                if (user) {
                    oldListener = firebase.onValue(firebase.ref("noci-track"), snapshot => {
                        const data = snapshot.val() || {};
                        const assessments = data.assessments || {};
                        cms.data = assessments;
                    });
                } 
                r(user);
            })
            firebase.initialise();
        }),
        NociCMS.load(),
        LoginPage.loadStyleSheets(),
    ]);

    console.log("Loaded", user);

    document.body.toggleAttribute("loaded", true);
}
load();
