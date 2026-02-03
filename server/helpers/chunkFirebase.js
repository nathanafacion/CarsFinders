// Script para popular o Firestore com os dados do carsDatabase.js
const carsDatabase = require('../db/carsDatabase');
const admin = require('firebase-admin');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    projectId: "carfinder-3aeec"
  });
}
const db = admin.firestore();

async function populateFirestoreCars() {
  const batch = db.batch();
  const collectionRef = db.collection('cars');
  for (let i = 0; i < carsDatabase.length; i++) {
    const docRef = collectionRef.doc();
    batch.set(docRef, carsDatabase[i]);
  }
  await batch.commit();
  console.log('Firestore populado com os carros!');
}

// Execute diretamente este arquivo para popular o banco
if (require.main === module) {
  populateFirestoreCars().then(() => process.exit(0));
}
