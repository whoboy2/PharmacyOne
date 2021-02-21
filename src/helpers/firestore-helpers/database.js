import { db } from '../../services/firebase';

// Getting all of the patient information
export const allPatients = db.collection("patients");

// NEEDS TESTING - Only getting uncollected prescriptions
export const prescriptionSchedule =  db.collection("prescriptions");

// Bloodwork schedule
export const bloodworkSchedule =  db.collection("bloodworkSchedule");

// Bloodwork details
export const bloodworkDetails =  db.collection("bloodworkDetails");

// Medication
export const medications =  db.collection("medications");

// Staff details
export const allStaff =  db.collection("staff");

export function collectMeds(id) {
    // Reference to the desired document
    const prescRef = db.collection("prescriptions").where("prescriptionId", "==", parseInt(id));
    prescRef.get()
        .then(data => {
            let docRef;
            data.forEach(function(doc) {
                docRef = doc.id;
            })
            if (docRef == null) {
                alert("Please enter a valid prescription number.")
            }
            prescriptionSchedule.doc(docRef).update({completed: true}).then(() => {
                window.location.reload();                
            });
        });
}

export async function requestBloodwork(id) {
    // Reference to the desired document
    const bloodworkRef = db.collection("bloodworkSchedule").where("NHS_ID", "==", id);

    bloodworkRef.get()
        .then(data => {
            let docRef;
            data.forEach(function(doc) {
                docRef = doc.id;
            })
            if (docRef == null) {
                alert("Please enter a valid NHS ID.")
            }
            else {
                bloodworkSchedule.doc(docRef).update({completed: true}).then(() => {
                    window.location.reload();
                });
            }
        });
}