
//source: https://www.chemie.de/lexikon/Permittivit%C3%A4t.html

export const PERMITTIVITY_VACUUM = 8.854187817e-12;


export const RELATIVE_PERMITTIVITIES = [
    { material: "Vakuum", value: 1, color: "#ffe4e6" },
    { material: "Luft", value: 1.00059, color: "#fae8ff" },
    { material: "Feuchte Erde", value: 29, color: "#ede9fe" },
    { material: "Eis", value: 100, color: "#dbeafe" },
    { material: "Wasser", value: 80.1, color: "#fee2e2" },
    { material: "Glas", value: 7, color: "#cffafe" },
    { material: "Methanol", value: 32.6, color: "#ecfccb" },
    { material: "Gummi", value: 2.5, color: "#ecfccb" },
    { material: "Kaliumchlorid", value: 4.94, color: "#fef3c7" },
  ];
  
export type Material = typeof RELATIVE_PERMITTIVITIES[number];