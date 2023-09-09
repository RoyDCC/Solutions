// RGB To Hex Conversion - 5 kyu
function rgb(r, g, b){
    let rgb = [r,g,b];
    
    rgb.forEach((element, index)=> {
        if (element<0) {
            rgb[index] = 0;
        }else if (element>255){
            rgb[index] = 255;
        }
        
        rgb[index] = rgb[index].toString(16).toUpperCase();
        
        if (element<10 || ['A','B','C','D','E','F'].includes(rgb[index])){
            rgb[index] = "0"+rgb[index]
        }
    });
    
    return rgb[0]+rgb[1]+rgb[2]
}