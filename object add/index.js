const db = {nan:'dsfs'};

const addDb = item => {
     const db = getDb();
    if(db[item]){
        db[item]=db[item]+1;
    }
    else {
        db[item]=1;
    }
     addLocalStore(db);
}
const removeDb = item => {
    delete db[item];
}
const addLocalStore = item => {
    const items = JSON.stringify(item);
    localStorage.setItem('first',items);
  
}
 const getDb = () => {
     return db;
 }