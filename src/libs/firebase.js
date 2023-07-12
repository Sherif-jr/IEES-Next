// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore/lite";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STRORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;
//========================================general data==============================//
//home Data
const getHome = async () => {
  const docRef = doc(db, "website-content/LIVE", "content/home");
  const res = await getDoc(docRef);
  const home = res.data();
  return home;
};
const getContactDetails = async () => {
  const docRef = doc(db, "website-content/LIVE", "content/contactDetails");
  const res = await getDoc(docRef);
  const contactDetails = res.data();
  return contactDetails;
};
const getAbout = async () => {
  const docRef = doc(db, "website-content/LIVE", "content/about");
  const res = await getDoc(docRef);
  const contactDetails = res.data();
  return contactDetails;
};

//========================================services data==============================//
const getAllServices = async () => {
  const collectionRef = collection(db, "website-content/LIVE", "services");
  const res = await getDocs(collectionRef);
  const services = res.data();
  return services;
};
const getAllServicesCards = async (excludedService) => {
  let cards = [];
  const collectionRef = collection(db, "website-content/LIVE", "services");
  const res = await getDocs(collectionRef);
  res.forEach((service) => {
    if (excludedService) {
      if (service.id !== excludedService) {
        cards.push({ name: service.id, content: service.data().card });
      }
    } else {
      cards.push({ name: service.id, content: service.data().card });
    }
  });
  return cards;
};

const getService = async (id) => {
  const docRef = doc(db, "website-content/LIVE", `services/${id}`);
  const res = await getDoc(docRef);
  const service = res.data();
  return service;
};

//========================================Projects data==============================//
const getAllProjects = async () => {
  let projects = [];
  const collectionRef = collection(db, "website-content/LIVE", "projects");
  const res = await getDocs(collectionRef);
  res.forEach((project) => {
    projects.push({ id: project.id, data: project.data() });
  });
  return projects;
};

export {
  getHome,
  getContactDetails,
  getAbout,
  getService,
  getAllServices,
  getAllServicesCards,
  getAllProjects,
};

// export const otherService = async (serviceName) => {
//   const docRef = doc(db, "website-content/LIVE", `services/project-management`);
//   const res = await getDoc(docRef);
//   const service = res.data();
//   await setDoc(
//     doc(db, "website-content/LIVE", `services/${serviceName}`),
//     service
//   );
//   console.log(`Done`);
// };

// otherService("maintenance-management");
// otherService("energy-management");
// otherService("design-servces");
