import { supabase } from "@/lib/db";

export async function getAllTraffic() {
  let { data: traffics, error } = await supabase
  .from('traffics')
  .select('*')
  return {data: traffics, error}
}

export async function getAllTrafficByWeek() {
  let { data: week, error } = await supabase
  .from('week')
  .select('*')     
  return {data: week, error}
}

export async function getAllTrafficByHour() {
  let { data: hour, error } = await supabase
  .from('hour')
  .select('*')     
  return {data: hour, error}
}

export async function getAllTrafficByDay() {

  let { data: day, error } = await supabase
  .from('day')
  .select('*')
             
  return {data: day, error}
}

export async function getAllTrafficByTree() {
  let { data: tree, error } = await supabase
  .from('tree')
  .select('*')
  return {data: tree, error}
}

export async function getAllTrafficByNine() {
  
let { data: nine, error } = await supabase
.from('nine')
.select('*')
        
  return {data: nine, error}
}

export async function getAllRecomendationNine() {
    let { data: rekomendasi, error } = await supabase
    .from('rekomendasi')
    .select('*')   
  return {data: rekomendasi, error}
}


export async function getLocationNameAndLonglit() {
  // Fungsi untuk menghapus duplikat
  const removeDuplicates = (array:any) => {
    const seen = new Set();
    return array.filter((item : any) => {
        const key = JSON.stringify(item);
        return seen.has(key) ? false : seen.add(key);
    });
  };

  let { data: traffics, error } = await supabase
  .from('traffics')
  .select('location_name , longitude_latitude')

  const clearData = removeDuplicates(traffics);
  return {data: clearData, error}
}