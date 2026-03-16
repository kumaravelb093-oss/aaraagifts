const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs } = require('firebase/firestore');
const fs = require('fs');

const envFile = fs.readFileSync('.env.local', 'utf8');
const env = Object.fromEntries(
  envFile.split('\n')
    .filter(line => line.includes('='))
    .map(line => {
      const [key, ...value] = line.split('=');
      return [key.trim(), value.join('=').trim().replace(/^"(.*)"$/, '$1')];
    })
);

const firebaseConfig = {
  apiKey: env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function inspectCollections() {
  const collections = ['sections', 'products', 'categories'];
  let output = '';
  for (const colName of collections) {
    output += `--- Collection: ${colName} ---\n`;
    const q = collection(db, colName);
    const snapshot = await getDocs(q);
    snapshot.forEach(doc => {
      output += JSON.stringify({ id: doc.id, ...doc.data() }, null, 2) + '\n';
    });
  }
  fs.writeFileSync('db_inspection_results.txt', output);
  console.log('Results written to db_inspection_results.txt');
}

inspectCollections().catch(console.error);
