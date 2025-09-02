import axios from "axios";

export const fetchSoilData = async (lat, lon) => {
  
  const url = `https://rest.isric.org/soilgrids/v2.0/properties/query?lat=${lat}&lon=${lon}`;
  const { data } = await axios.get(url);

  
  return {
    pH: data?.properties?.layers?.find(l => l.name === "phh2o")?.depths[0]?.values?.mean || "N/A",
    organicCarbon: data?.properties?.layers?.find(l => l.name === "ocd")?.depths[0]?.values?.mean || "N/A",
    nitrogen: data?.properties?.layers?.find(l => l.name === "nitrogen")?.depths[0]?.values?.mean || "N/A"
  };
};


//https://rest.isric.org/soilgrids/v2.0/properties/query?lon=77.20&lat=28.61
//sample hai 

