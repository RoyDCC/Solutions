// RGB To Hex Conversion - 5 kyu

/*
The rgb function is incomplete. Complete it so that passing in RGB decimal values will
    result in a hexadecimal representation being returned.
Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be
    rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

Examples:
    255, 255, 255 --> "FFFFFF"
    255, 255, 300 --> "FFFFFF"
    0, 0, 0       --> "000000"
    148, 0, 211   --> "9400D3"
*/

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